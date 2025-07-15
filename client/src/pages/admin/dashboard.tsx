import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MessageSquare, 
  Briefcase, 
  Users, 
  FolderOpen, 
  Package, 
  Newspaper,
  TrendingUp,
  Calendar
} from 'lucide-react';

export default function AdminDashboard() {
  const { data: contactSubmissions } = useQuery({
    queryKey: ['/api/admin/contact-submissions'],
  });

  const { data: jobs } = useQuery({
    queryKey: ['/api/admin/jobs'],
  });

  const { data: applications } = useQuery({
    queryKey: ['/api/admin/job-applications'],
  });

  const { data: catalogues } = useQuery({
    queryKey: ['/api/admin/catalogues'],
  });

  const { data: products } = useQuery({
    queryKey: ['/api/admin/products'],
  });

  const { data: media } = useQuery({
    queryKey: ['/api/admin/media'],
  });

  const stats = [
    {
      title: 'Contact Submissions',
      value: contactSubmissions?.length || 0,
      icon: MessageSquare,
      color: 'bg-blue-500',
      description: 'Total contact form submissions'
    },
    {
      title: 'Active Jobs',
      value: jobs?.filter((job: any) => job.isActive).length || 0,
      icon: Briefcase,
      color: 'bg-green-500',
      description: 'Currently open positions'
    },
    {
      title: 'Applications',
      value: applications?.length || 0,
      icon: Users,
      color: 'bg-purple-500',
      description: 'Total job applications'
    },
    {
      title: 'Catalogues',
      value: catalogues?.length || 0,
      icon: FolderOpen,
      color: 'bg-orange-500',
      description: 'Available product catalogues'
    },
    {
      title: 'Products',
      value: products?.length || 0,
      icon: Package,
      color: 'bg-red-500',
      description: 'Total products in database'
    },
    {
      title: 'Media Content',
      value: media?.length || 0,
      icon: Newspaper,
      color: 'bg-indigo-500',
      description: 'Published media items'
    },
  ];

  const recentSubmissions = contactSubmissions?.slice(-5) || [];
  const recentApplications = applications?.slice(-5) || [];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-[#031D33] to-[#0E2F44] rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome to IndoSup Admin</h1>
            <p className="text-gray-300 mt-2">
              Manage your website content and monitor activity from this dashboard
            </p>
          </div>
          <div className="text-right">
            <div className="text-[#FFC600] text-sm">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`${stat.color} p-2 rounded-full`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contact Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Recent Contact Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentSubmissions.length > 0 ? (
              <div className="space-y-3">
                {recentSubmissions.map((submission: any) => (
                  <div key={submission.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{submission.name}</p>
                      <p className="text-xs text-gray-500">{submission.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        {new Date(submission.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No contact submissions yet</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Job Applications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Recent Job Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentApplications.length > 0 ? (
              <div className="space-y-3">
                {recentApplications.map((application: any) => (
                  <div key={application.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{application.name}</p>
                      <p className="text-xs text-gray-500">{application.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        application.status === 'shortlisted' ? 'bg-green-100 text-green-800' :
                        application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {application.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No job applications yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="/admin/jobs"
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-blue-900">Manage Jobs</p>
                <p className="text-sm text-blue-600">Add or edit job postings</p>
              </div>
            </a>
            <a
              href="/admin/catalogues"
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <FolderOpen className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-green-900">Upload Catalogues</p>
                <p className="text-sm text-green-600">Add new product catalogs</p>
              </div>
            </a>
            <a
              href="/admin/products"
              className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Package className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="font-medium text-purple-900">Manage Products</p>
                <p className="text-sm text-purple-600">Add or edit products</p>
              </div>
            </a>
            <a
              href="/admin/media"
              className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <Newspaper className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <p className="font-medium text-orange-900">Media Content</p>
                <p className="text-sm text-orange-600">Manage news and blogs</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}