import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Briefcase, 
  FolderOpen, 
  Package, 
  Newspaper,
  Settings,
  LogOut,
  Menu,
  X,
  Building2,
  Users,
  FileText
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Contact Submissions', href: '/admin/contact-submissions', icon: MessageSquare },
  { name: 'Jobs', href: '/admin/jobs', icon: Briefcase },
  { name: 'Applications', href: '/admin/applications', icon: Users },
  { name: 'Catalogues', href: '/admin/catalogues', icon: FolderOpen },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Media', href: '/admin/media', icon: Newspaper },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location] = useLocation();
  const { admin, logout } = useAdminAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-[#031D33] flex flex-col">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-[#FFC600]" />
              <span className="ml-2 text-xl font-bold text-white">IndoSup Admin</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = location === item.href;
                return (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-[#FFC600] text-[#031D33]'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <item.icon className="h-5 w-5 mr-3" />
                        {item.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-4">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full text-white border-gray-600 hover:bg-gray-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col bg-[#031D33] h-full">
          <div className="flex items-center p-4">
            <Building2 className="h-8 w-8 text-[#FFC600]" />
            <span className="ml-2 text-xl font-bold text-white">IndoSup Admin</span>
          </div>
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = location === item.href;
                return (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-[#FFC600] text-[#031D33]'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        <item.icon className="h-5 w-5 mr-3" />
                        {item.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-4">
            <div className="bg-gray-800 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-400">Logged in as:</p>
              <p className="text-white font-medium">{admin?.name}</p>
              <p className="text-gray-400 text-sm">{admin?.email}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full text-white border-gray-600 hover:bg-gray-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex-1 lg:flex-none">
                <h1 className="text-xl font-semibold text-gray-900">
                  {navigation.find(item => item.href === location)?.name || 'Admin Panel'}
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="hidden lg:block">
                  <span className="text-sm text-gray-500">Welcome back, {admin?.name}</span>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="lg:hidden border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}