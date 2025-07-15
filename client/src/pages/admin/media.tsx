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
  Newspaper, 
  Calendar, 
  Eye,
  EyeOff,
  Image,
  Award,
  FileText,
  ExternalLink
} from 'lucide-react';
import type { MediaContent } from '@shared/schema';

const mediaSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  type: z.string().min(1, 'Type is required'),
  author: z.string().optional(),
  content: z.string().optional(),
  summary: z.string().optional(),
  imageUrl: z.string().optional(),
  fileUrl: z.string().optional(),
  source: z.string().optional(),
  externalLink: z.string().optional(),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean().default(true),
});

type MediaForm = z.infer<typeof mediaSchema>;

export default function Media() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMedia, setEditingMedia] = useState<MediaContent | null>(null);
  const [tagsInput, setTagsInput] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: mediaContent, isLoading } = useQuery({
    queryKey: ['/api/admin/media'],
  });

  const form = useForm<MediaForm>({
    resolver: zodResolver(mediaSchema),
    defaultValues: {
      title: '',
      type: '',
      author: '',
      content: '',
      summary: '',
      imageUrl: '',
      fileUrl: '',
      source: '',
      externalLink: '',
      tags: [],
      isPublished: true,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: MediaForm) => {
      const response = await apiRequest('/api/admin/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create media content');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/media'] });
      toast({ title: "Success", description: "Media content created successfully" });
      setIsDialogOpen(false);
      form.reset();
      setTagsInput('');
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to create media content", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: MediaForm }) => {
      const response = await apiRequest(`/api/admin/media/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update media content');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/media'] });
      toast({ title: "Success", description: "Media content updated successfully" });
      setIsDialogOpen(false);
      setEditingMedia(null);
      form.reset();
      setTagsInput('');
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update media content", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest(`/api/admin/media/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete media content');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/media'] });
      toast({ title: "Success", description: "Media content deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete media content", variant: "destructive" });
    },
  });

  const filteredMedia = mediaContent?.filter((media: MediaContent) => {
    const matchesSearch = media.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         media.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         media.author?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || media.type === typeFilter;
    return matchesSearch && matchesType;
  }) || [];

  const handleSubmit = (data: MediaForm) => {
    // Parse tags from input
    const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    const mediaData = { ...data, tags };
    
    if (editingMedia) {
      updateMutation.mutate({ id: editingMedia.id, data: mediaData });
    } else {
      createMutation.mutate(mediaData);
    }
  };

  const handleEdit = (media: MediaContent) => {
    setEditingMedia(media);
    form.reset({
      title: media.title,
      type: media.type,
      author: media.author || '',
      content: media.content || '',
      summary: media.summary || '',
      imageUrl: media.imageUrl || '',
      fileUrl: media.fileUrl || '',
      source: media.source || '',
      externalLink: media.externalLink || '',
      isPublished: media.isPublished,
    });
    setTagsInput(media.tags?.join(', ') || '');
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this media content?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingMedia(null);
    form.reset();
    setTagsInput('');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <FileText className="h-4 w-4" />;
      case 'award':
        return <Award className="h-4 w-4" />;
      case 'news':
        return <Newspaper className="h-4 w-4" />;
      case 'case_study':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'award':
        return 'bg-yellow-100 text-yellow-800';
      case 'news':
        return 'bg-green-100 text-green-800';
      case 'case_study':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
          <h1 className="text-2xl font-bold text-gray-900">Media Management</h1>
          <p className="text-gray-600 mt-1">
            Manage blogs, news, awards, and case studies
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#FFC600] hover:bg-[#E6B200] text-[#031D33]">
              <Plus className="h-4 w-4 mr-2" />
              Add Media Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingMedia ? 'Edit Media Content' : 'Add New Media Content'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    {...form.register('title')}
                    placeholder="Content title"
                  />
                  {form.formState.errors.title && (
                    <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <select
                    id="type"
                    {...form.register('type')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select type</option>
                    <option value="blog">Blog</option>
                    <option value="award">Award</option>
                    <option value="news">News</option>
                    <option value="case_study">Case Study</option>
                  </select>
                  {form.formState.errors.type && (
                    <p className="text-red-500 text-sm">{form.formState.errors.type.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    {...form.register('author')}
                    placeholder="Author name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="source">Source</Label>
                  <Input
                    id="source"
                    {...form.register('source')}
                    placeholder="Source publication"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <textarea
                  id="summary"
                  {...form.register('summary')}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Brief summary..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <textarea
                  id="content"
                  {...form.register('content')}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Full content..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    {...form.register('imageUrl')}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fileUrl">File URL</Label>
                  <Input
                    id="fileUrl"
                    {...form.register('fileUrl')}
                    placeholder="https://example.com/file.pdf"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="externalLink">External Link</Label>
                <Input
                  id="externalLink"
                  {...form.register('externalLink')}
                  placeholder="https://example.com/article"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="e.g., steel, construction, innovation"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isPublished"
                  {...form.register('isPublished')}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="isPublished">Published (visible to users)</Label>
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
                  {editingMedia ? 'Update Content' : 'Add Content'}
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
                placeholder="Search media content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Types</option>
              <option value="blog">Blog</option>
              <option value="award">Award</option>
              <option value="news">News</option>
              <option value="case_study">Case Study</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Media List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            All Media Content ({filteredMedia.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredMedia.length === 0 ? (
            <div className="text-center py-12">
              <Newspaper className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No media content found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredMedia.map((media: MediaContent) => (
                <div
                  key={media.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">{media.title}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(media.type)}`}>
                          {getTypeIcon(media.type)}
                          <span className="ml-1 capitalize">{media.type.replace('_', ' ')}</span>
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          media.isPublished 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {media.isPublished ? (
                            <>
                              <Eye className="h-3 w-3 mr-1" />
                              Published
                            </>
                          ) : (
                            <>
                              <EyeOff className="h-3 w-3 mr-1" />
                              Draft
                            </>
                          )}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-6 mb-3 text-sm text-gray-600">
                        {media.author && (
                          <span>By {media.author}</span>
                        )}
                        {media.source && (
                          <span>Source: {media.source}</span>
                        )}
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(media.publishedAt).toLocaleDateString()}
                        </div>
                      </div>

                      {media.summary && (
                        <p className="text-gray-700 mb-3">{media.summary}</p>
                      )}

                      <div className="flex items-center space-x-4">
                        {media.externalLink && (
                          <a
                            href={media.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View External Link
                          </a>
                        )}
                        {media.fileUrl && (
                          <a
                            href={media.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
                          >
                            <FileText className="h-4 w-4 mr-1" />
                            View File
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={() => handleEdit(media)}
                        variant="outline"
                        size="sm"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(media.id)}
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