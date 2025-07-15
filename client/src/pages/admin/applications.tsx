import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  Search, 
  Download, 
  Users, 
  Calendar, 
  Mail, 
  Phone, 
  FileText,
  Filter,
  ExternalLink,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  X
} from 'lucide-react';
import type { JobApplication, Job } from '@shared/schema';

export default function JobApplications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [currentResumeUrl, setCurrentResumeUrl] = useState<string>('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: applications, isLoading } = useQuery({
    queryKey: ['/api/admin/job-applications'],
  });

  const { data: jobs } = useQuery({
    queryKey: ['/api/admin/jobs'],
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      const response = await apiRequest('PUT', `/api/admin/job-applications/${id}`, { status });
      if (!response.ok) throw new Error('Failed to update application');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/job-applications'] });
      toast({ title: "Success", description: "Application status updated successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update application status", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest('DELETE', `/api/admin/job-applications/${id}`);
      if (!response.ok) throw new Error('Failed to delete application');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/job-applications'] });
      toast({ title: "Success", description: "Application deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete application", variant: "destructive" });
    },
  });

  const filteredApplications = applications?.filter((app: JobApplication) => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  }) || [];

  const getJobTitle = (jobId: number) => {
    const job = jobs?.find((j: Job) => j.id === jobId);
    return job?.title || 'Unknown Job';
  };

  const handleStatusChange = (id: number, status: string) => {
    updateStatusMutation.mutate({ id, status });
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleViewApplication = (application: JobApplication) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const handleViewResume = (resumeUrl: string) => {
    setCurrentResumeUrl(resumeUrl);
    setIsResumeModalOpen(true);
  };

  const handleDownloadResume = (resumeUrl: string, applicantName: string) => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = `${applicantName}_resume.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'shortlisted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'interviewed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'shortlisted':
        return <CheckCircle className="h-4 w-4" />;
      case 'rejected':
        return <XCircle className="h-4 w-4" />;
      case 'interviewed':
        return <Eye className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const exportToCSV = () => {
    if (!applications || applications.length === 0) return;

    const csvContent = [
      ['Name', 'Email', 'Phone', 'Job Title', 'Status', 'Applied Date', 'Resume URL'],
      ...applications.map((app: JobApplication) => [
        app.name,
        app.email,
        app.phone || '',
        getJobTitle(app.jobId),
        app.status,
        new Date(app.createdAt).toLocaleDateString(),
        app.resumeUrl || ''
      ])
    ]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `job-applications-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
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
          <h1 className="text-2xl font-bold text-gray-900">Job Applications</h1>
          <p className="text-gray-600 mt-1">
            Manage and review job applications
          </p>
        </div>
        <Button
          onClick={exportToCSV}
          variant="outline"
          className="flex items-center"
        >
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
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
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="rejected">Rejected</option>
                <option value="interviewed">Interviewed</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Applications ({filteredApplications.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredApplications.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No job applications found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredApplications.map((application: JobApplication) => (
                <div
                  key={application.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="font-semibold text-gray-900">{application.name}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                          {getStatusIcon(application.status)}
                          <span className="ml-1 capitalize">{application.status}</span>
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-6 mb-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {application.email}
                        </div>
                        {application.phone && (
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {application.phone}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(application.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-1">Applied for:</p>
                        <p className="font-medium text-gray-900">{getJobTitle(application.jobId)}</p>
                      </div>

                      {application.coverLetter && (
                        <div className="mb-3">
                          <p className="text-sm text-gray-600 mb-1">Cover Letter:</p>
                          <p className="text-gray-700 text-sm bg-gray-50 p-2 rounded">
                            {application.coverLetter}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center space-x-4">
                        <Button
                          onClick={() => handleViewApplication(application)}
                          variant="outline"
                          size="sm"
                          className="flex items-center"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        {application.resumeUrl && (
                          <div className="flex items-center space-x-2">
                            <Button
                              onClick={() => handleViewResume(application.resumeUrl!)}
                              variant="outline"
                              size="sm"
                              className="flex items-center text-blue-600 hover:text-blue-700"
                            >
                              <FileText className="h-4 w-4 mr-1" />
                              View Resume
                            </Button>
                            <Button
                              onClick={() => handleDownloadResume(application.resumeUrl!, application.name)}
                              variant="outline"
                              size="sm"
                              className="flex items-center text-green-600 hover:text-green-700"
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <select
                          value={application.status}
                          onChange={(e) => handleStatusChange(application.id, e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-sm"
                        >
                          <option value="pending">Pending</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="rejected">Rejected</option>
                          <option value="interviewed">Interviewed</option>
                        </select>
                      </div>
                      <Button
                        onClick={() => handleDelete(application.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Application Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Application Details</DialogTitle>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-6">
              {/* Header Section */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{selectedApplication.name}</h3>
                  <p className="text-gray-600">{selectedApplication.email}</p>
                  {selectedApplication.phone && (
                    <p className="text-gray-600">{selectedApplication.phone}</p>
                  )}
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedApplication.status)}`}>
                    {getStatusIcon(selectedApplication.status)}
                    <span className="ml-1 capitalize">{selectedApplication.status}</span>
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    Applied: {new Date(selectedApplication.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Job Information */}
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Job Information</h4>
                <p className="text-gray-700">{getJobTitle(selectedApplication.jobId)}</p>
              </div>

              {/* Cover Letter */}
              {selectedApplication.coverLetter && (
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cover Letter</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedApplication.coverLetter}</p>
                  </div>
                </div>
              )}

              {/* Resume Section */}
              {selectedApplication.resumeUrl && (
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Resume</h4>
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => handleViewResume(selectedApplication.resumeUrl!)}
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Resume
                    </Button>
                    <Button
                      onClick={() => handleDownloadResume(selectedApplication.resumeUrl!, selectedApplication.name)}
                      variant="outline"
                      className="flex items-center"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              )}

              {/* Status Management */}
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Status Management</h4>
                <div className="flex items-center space-x-4">
                  <select
                    value={selectedApplication.status}
                    onChange={(e) => {
                      handleStatusChange(selectedApplication.id, e.target.value);
                      setSelectedApplication({
                        ...selectedApplication,
                        status: e.target.value
                      });
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="pending">Pending</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="rejected">Rejected</option>
                    <option value="interviewed">Interviewed</option>
                  </select>
                  <Button
                    onClick={() => {
                      handleDelete(selectedApplication.id);
                      setIsModalOpen(false);
                    }}
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                  >
                    Delete Application
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Resume Viewer Modal */}
      <Dialog open={isResumeModalOpen} onOpenChange={setIsResumeModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Resume Viewer</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            {currentResumeUrl && (
              <div className="h-[70vh] border rounded-lg overflow-hidden">
                <iframe
                  src={currentResumeUrl}
                  className="w-full h-full border-0"
                  title="Resume Viewer"
                  loading="lazy"
                />
              </div>
            )}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                If the resume doesn't load properly, you can download it directly.
              </p>
              <div className="flex space-x-2">
                <Button
                  onClick={() => window.open(currentResumeUrl, '_blank')}
                  variant="outline"
                  className="flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in New Tab
                </Button>
                <Button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = currentResumeUrl;
                    link.download = 'resume.pdf';
                    link.click();
                  }}
                  className="flex items-center bg-[#FFC600] hover:bg-[#E6B200] text-black"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}