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
  Settings as SettingsIcon, 
  Globe,
  Database,
  Save,
  Key
} from 'lucide-react';
import type { SiteSetting } from '@shared/schema';

const settingSchema = z.object({
  key: z.string().min(1, 'Key is required'),
  value: z.string().min(1, 'Value is required'),
  type: z.string().default('text'),
  description: z.string().optional(),
});

type SettingForm = z.infer<typeof settingSchema>;

export default function Settings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSetting, setEditingSetting] = useState<SiteSetting | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery({
    queryKey: ['/api/admin/settings'],
  });

  const form = useForm<SettingForm>({
    resolver: zodResolver(settingSchema),
    defaultValues: {
      key: '',
      value: '',
      type: 'text',
      description: '',
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: SettingForm) => {
      const response = await apiRequest('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to create setting');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/settings'] });
      toast({ title: "Success", description: "Setting created successfully" });
      setIsDialogOpen(false);
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to create setting", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ key, value }: { key: string; value: string }) => {
      const response = await apiRequest(`/api/admin/settings/${key}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value }),
      });
      if (!response.ok) throw new Error('Failed to update setting');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/settings'] });
      toast({ title: "Success", description: "Setting updated successfully" });
      setEditingSetting(null);
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to update setting", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (key: string) => {
      const response = await apiRequest(`/api/admin/settings/${key}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete setting');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/settings'] });
      toast({ title: "Success", description: "Setting deleted successfully" });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to delete setting", variant: "destructive" });
    },
  });

  const filteredSettings = settings?.filter((setting: SiteSetting) => {
    const matchesSearch = setting.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         setting.value.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         setting.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  }) || [];

  const handleSubmit = (data: SettingForm) => {
    createMutation.mutate(data);
  };

  const handleEdit = (setting: SiteSetting) => {
    setEditingSetting(setting);
  };

  const handleSave = (setting: SiteSetting, newValue: string) => {
    updateMutation.mutate({ key: setting.key, value: newValue });
  };

  const handleDelete = (key: string) => {
    if (window.confirm('Are you sure you want to delete this setting?')) {
      deleteMutation.mutate(key);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    form.reset();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'text':
        return <Key className="h-4 w-4" />;
      case 'number':
        return <Database className="h-4 w-4" />;
      case 'boolean':
        return <SettingsIcon className="h-4 w-4" />;
      case 'json':
        return <Database className="h-4 w-4" />;
      default:
        return <Key className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'text':
        return 'bg-blue-100 text-blue-800';
      case 'number':
        return 'bg-green-100 text-green-800';
      case 'boolean':
        return 'bg-purple-100 text-purple-800';
      case 'json':
        return 'bg-orange-100 text-orange-800';
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
          <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage global site configuration and settings
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#FFC600] hover:bg-[#E6B200] text-[#031D33]">
              <Plus className="h-4 w-4 mr-2" />
              Add Setting
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Setting</DialogTitle>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="key">Key</Label>
                  <Input
                    id="key"
                    {...form.register('key')}
                    placeholder="e.g., site_title"
                  />
                  {form.formState.errors.key && (
                    <p className="text-red-500 text-sm">{form.formState.errors.key.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <select
                    id="type"
                    {...form.register('type')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="boolean">Boolean</option>
                    <option value="json">JSON</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="value">Value</Label>
                <Input
                  id="value"
                  {...form.register('value')}
                  placeholder="Setting value"
                />
                {form.formState.errors.value && (
                  <p className="text-red-500 text-sm">{form.formState.errors.value.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  {...form.register('description')}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Brief description of this setting..."
                />
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
                  disabled={createMutation.isPending}
                >
                  Add Setting
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search settings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Settings List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            All Settings ({filteredSettings.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredSettings.length === 0 ? (
            <div className="text-center py-12">
              <SettingsIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No settings found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSettings.map((setting: SiteSetting) => (
                <div
                  key={setting.key}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="font-semibold text-gray-900">{setting.key}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(setting.type)}`}>
                          {getTypeIcon(setting.type)}
                          <span className="ml-1 capitalize">{setting.type}</span>
                        </span>
                      </div>
                      
                      {editingSetting?.key === setting.key ? (
                        <div className="flex items-center space-x-2 mb-3">
                          <Input
                            defaultValue={setting.value}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleSave(setting, e.currentTarget.value);
                              }
                              if (e.key === 'Escape') {
                                setEditingSetting(null);
                              }
                            }}
                            className="flex-1"
                            autoFocus
                          />
                          <Button
                            onClick={(e) => {
                              const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                              handleSave(setting, input.value);
                            }}
                            size="sm"
                            className="bg-[#FFC600] hover:bg-[#E6B200] text-[#031D33]"
                          >
                            <Save className="h-4 w-4" />
                          </Button>
                          <Button
                            onClick={() => setEditingSetting(null)}
                            size="sm"
                            variant="outline"
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <div className="mb-3">
                          <p className="text-sm text-gray-600 mb-1">Current value:</p>
                          <p className="font-mono text-sm bg-gray-100 p-2 rounded">
                            {setting.value}
                          </p>
                        </div>
                      )}

                      {setting.description && (
                        <p className="text-sm text-gray-700 mb-3">
                          {setting.description}
                        </p>
                      )}

                      <div className="text-sm text-gray-500">
                        Last updated: {new Date(setting.updatedAt).toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={() => handleEdit(setting)}
                        variant="outline"
                        size="sm"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => handleDelete(setting.key)}
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

      {/* Quick Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-2">
                <Globe className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-blue-900">Site Configuration</h3>
              </div>
              <p className="text-sm text-blue-700 mb-3">
                Configure global site settings like title, description, and contact information.
              </p>
              <Button
                onClick={() => {
                  form.reset({
                    key: 'site_title',
                    value: 'IndoSup - Construction Procurement Platform',
                    type: 'text',
                    description: 'Main site title displayed in header and meta tags'
                  });
                  setIsDialogOpen(true);
                }}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Add Site Title
              </Button>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center mb-2">
                <Database className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-900">System Settings</h3>
              </div>
              <p className="text-sm text-green-700 mb-3">
                Configure system-wide settings and preferences.
              </p>
              <Button
                onClick={() => {
                  form.reset({
                    key: 'maintenance_mode',
                    value: 'false',
                    type: 'boolean',
                    description: 'Enable or disable maintenance mode'
                  });
                  setIsDialogOpen(true);
                }}
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Add Maintenance Mode
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}