import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  FolderOpen, 
  Download, 
  FileText,
  Calendar,
  Eye,
  EyeOff,
  Upload
} from 'lucide-react';
import type { Catalogue } from '@shared/schema';

const catalogueSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  category: z.string().min(1, 'Category is required'),
  description: z.string().optional(),
  fileUrl: z.string().min(1, 'File URL is required'),
  fileName: z.string().min(1, 'File name is required'),
  fileSize: z.number().optional(),
  isActive: z.boolean().default(true),
});

type CatalogueForm = z.infer<typeof catalogueSchema>;

export default function Catalogues() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCatalogue, setEditingCatalogue] = useState<Catalogue | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: catalogues, isLoading } = useQuery({
    queryKey: ['/api/admin/catalogues'],
  });

  const form = useForm<CatalogueForm>({
    resolver: zodResolver(catalogueSchema),
    defaultValues: {
      title: '',
      category: '',
      description: '',
      fileUrl: '',
      fileName: '',
      fileSize: 0,
      isActive: true,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: CatalogueForm) => {
      const response = await apiRequest('POST', '/api/admin/catalogues', data);
      if (!response.ok) throw new Error('Failed to create catalogue');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/catalogues'] });
      toast({ title: "Success", description: "Catalogue created successfully" });
      setIsDialogOpen(false);
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to create catalogue", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: CatalogueForm }) => {
      const response = await apiRequest('PUT', `/api/admin/catalogues/${id}`, data);
      if (!response.ok) throw new Error('Failed to update catalogue');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/catalogues'] });
      toast({ title: "Success", description: "Catalogue updated successfully" });
      setIsDialogOpen(false);
      setEditingCatalogue(null);
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update catalogue", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest('DELETE', `/api/admin/catalogues/${id}`);
      if (!response.ok) throw new Error('Failed to delete catalogue');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/catalogues'] });
      toast({ title: "Success", description: "Catalogue deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete catalogue", variant: "destructive" });
    },
  });

  const filteredCatalogues = catalogues?.filter((catalogue: Catalogue) => {
    const matchesSearch = catalogue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         catalogue.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || catalogue.category === categoryFilter;
    return matchesSearch && matchesCategory;
  }) || [];

  const handleSubmit = (data: CatalogueForm) => {
    if (editingCatalogue) {
      updateMutation.mutate({ id: editingCatalogue.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (catalogue: Catalogue) => {
    setEditingCatalogue(catalogue);
    form.reset({
      title: catalogue.title,
      category: catalogue.category,
      description: catalogue.description || '',
      fileUrl: catalogue.fileUrl,
      fileName: catalogue.fileName,
      fileSize: catalogue.fileSize || 0,
      isActive: catalogue.isActive,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this catalogue?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingCatalogue(null);
    form.reset();
  };

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return 'Unknown';
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
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
          <h1 className="text-2xl font-bold text-gray-900">Catalogue Management</h1>
          <p className="text-gray-600 mt-1">
            Upload and manage product catalogues
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#FFC600] hover:bg-[#E6B200] text-[#031D33]">
              <Plus className="h-4 w-4 mr-2" />
              Upload Catalogue
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingCatalogue ? 'Edit Catalogue' : 'Upload New Catalogue'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    {...form.register('title')}
                    placeholder="e.g., Steel Products 2024"
                  />
                  {form.formState.errors.title && (
                    <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    {...form.register('category')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select category</option>
                    <option value="Steel">Steel</option>
                    <option value="Non-Steel">Non-Steel</option>
                  </select>
                  {form.formState.errors.category && (
                    <p className="text-red-500 text-sm">{form.formState.errors.category.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  {...form.register('description')}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Brief description of the catalogue..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fileUrl">File URL</Label>
                  <Input
                    id="fileUrl"
                    {...form.register('fileUrl')}
                    placeholder="https://example.com/catalogue.pdf"
                  />
                  {form.formState.errors.fileUrl && (
                    <p className="text-red-500 text-sm">{form.formState.errors.fileUrl.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fileName">File Name</Label>
                  <Input
                    id="fileName"
                    {...form.register('fileName')}
                    placeholder="catalogue.pdf"
                  />
                  {form.formState.errors.fileName && (
                    <p className="text-red-500 text-sm">{form.formState.errors.fileName.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fileSize">File Size (bytes)</Label>
                <Input
                  id="fileSize"
                  type="number"
                  {...form.register('fileSize', { valueAsNumber: true })}
                  placeholder="e.g., 1024000"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isActive"
                  {...form.register('isActive')}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="isActive">Active (visible to users)</Label>
              </div>

              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCloseDialog}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#FFC600] hover:bg-[#E6B200] text-[#031D33]"
                  disabled={createMutation.isPending || updateMutation.isPending}
                >
                  {editingCatalogue ? 'Update Catalogue' : 'Upload Catalogue'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
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
                placeholder="Search catalogues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Categories</option>
              <option value="Steel">Steel</option>
              <option value="Non-Steel">Non-Steel</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Catalogues Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            All Catalogues ({filteredCatalogues.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredCatalogues.length === 0 ? (
            <div className="text-center py-12">
              <FolderOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No catalogues found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCatalogues.map((catalogue: Catalogue) => (
                <div
                  key={catalogue.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-red-500" />
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        catalogue.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {catalogue.isActive ? (
                          <>
                            <Eye className="h-3 w-3 mr-1" />
                            Active
                          </>
                        ) : (
                          <>
                            <EyeOff className="h-3 w-3 mr-1" />
                            Inactive
                          </>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button
                        onClick={() => handleEdit(catalogue)}
                        variant="outline"
                        size="sm"
                      >
                        <Edit2 className="h-3 w-3" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(catalogue.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">{catalogue.title}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-3">
                    <div className="flex items-center justify-between">
                      <span>Category:</span>
                      <span className="font-medium">{catalogue.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>File Size:</span>
                      <span>{formatFileSize(catalogue.fileSize)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Created:</span>
                      <span>{new Date(catalogue.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {catalogue.description && (
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      {catalogue.description}
                    </p>
                  )}

                  <div className="flex items-center space-x-2">
                    <a
                      href={catalogue.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download PDF
                    </a>
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