import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Search, 
  Trash2, 
  Download, 
  Calendar, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare,
  Filter,
  MoreVertical
} from 'lucide-react';
import type { ContactSubmission } from '@shared/schema';

export default function ContactSubmissions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmissions, setSelectedSubmissions] = useState<number[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: submissions, isLoading } = useQuery({
    queryKey: ['/api/admin/contact-submissions'],
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest(`/api/admin/contact-submissions/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete submission');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/contact-submissions'] });
      toast({
        title: "Success",
        description: "Contact submission deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete submission",
        variant: "destructive",
      });
    },
  });

  const filteredSubmissions = submissions?.filter((submission: ContactSubmission) =>
    submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.message.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleBulkDelete = () => {
    if (selectedSubmissions.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedSubmissions.length} submissions?`)) {
      selectedSubmissions.forEach(id => {
        deleteMutation.mutate(id);
      });
      setSelectedSubmissions([]);
    }
  };

  const exportToCSV = () => {
    if (!submissions || submissions.length === 0) return;

    const csvContent = [
      ['Name', 'Email', 'Phone', 'Company', 'Message', 'Date'],
      ...submissions.map((submission: ContactSubmission) => [
        submission.name,
        submission.email,
        submission.phone || '',
        submission.company || '',
        submission.message.replace(/,/g, ';'),
        new Date(submission.createdAt).toLocaleDateString()
      ])
    ]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const toggleSelection = (id: number) => {
    setSelectedSubmissions(prev => 
      prev.includes(id) 
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedSubmissions.length === filteredSubmissions.length) {
      setSelectedSubmissions([]);
    } else {
      setSelectedSubmissions(filteredSubmissions.map((s: ContactSubmission) => s.id));
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FFC600]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Submissions</h1>
          <p className="text-gray-600 mt-1">
            Manage and view all contact form submissions
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            onClick={exportToCSV}
            variant="outline"
            className="flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          {selectedSubmissions.length > 0 && (
            <Button
              onClick={handleBulkDelete}
              variant="destructive"
              className="flex items-center"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Selected ({selectedSubmissions.length})
            </Button>
          )}
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Submissions Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              All Submissions ({filteredSubmissions.length})
            </CardTitle>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSubmissions.length === filteredSubmissions.length && filteredSubmissions.length > 0}
                onChange={toggleSelectAll}
                className="rounded border-gray-300"
              />
              <label className="text-sm text-gray-600">Select All</label>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No contact submissions found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSubmissions.map((submission: ContactSubmission) => (
                <div
                  key={submission.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedSubmissions.includes(submission.id)}
                        onChange={() => toggleSelection(submission.id)}
                        className="mt-1 rounded border-gray-300"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="font-semibold text-gray-900">{submission.name}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="h-4 w-4 mr-1" />
                            {submission.email}
                          </div>
                          {submission.phone && (
                            <div className="flex items-center text-sm text-gray-500">
                              <Phone className="h-4 w-4 mr-1" />
                              {submission.phone}
                            </div>
                          )}
                          {submission.company && (
                            <div className="flex items-center text-sm text-gray-500">
                              <Building className="h-4 w-4 mr-1" />
                              {submission.company}
                            </div>
                          )}
                        </div>
                        <p className="text-gray-700 mb-3">{submission.message}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(submission.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={() => handleDelete(submission.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}