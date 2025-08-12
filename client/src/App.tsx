import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminLayout from "@/components/admin/AdminLayout";
import PrivateRoute from "@/components/admin/PrivateRoute";
import Home from "@/pages/home";
import About from "@/pages/about";
import NewInitiatives from "@/pages/newInitiatives";
import GlobalAssist from "@/pages/global-assist";
import StreamlinedProcurement from "@/pages/streamlinedProcurement";
import SteelProducts from "@/pages/steel-products";
import NonSteelProducts from "@/pages/non-steel-products";
import SolarProducts from "@/pages/products/solar";
import Media from "@/pages/media";
import Careers from "@/pages/careers";
import Catalogues from "@/pages/catalogues";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminContactSubmissions from "@/pages/admin/contact-submissions";
import AdminJobs from "@/pages/admin/jobs";
import AdminApplications from "@/pages/admin/applications";
import AdminCatalogues from "@/pages/admin/catalogues";
import AdminProducts from "@/pages/admin/products";
import AdminMedia from "@/pages/admin/media";
import AdminSettings from "@/pages/admin/settings";

// Main App component following Next.js patterns
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AdminAuthProvider>
          <Toaster />
          <Switch>
            {/* Admin Routes */}
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/admin">
              <PrivateRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </PrivateRoute>
            </Route>
            <Route path="/admin/dashboard">
              <PrivateRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </PrivateRoute>
            </Route>
            <Route path="/admin/contact-submissions">
              <PrivateRoute>
                <AdminLayout>
                  <AdminContactSubmissions />
                </AdminLayout>
              </PrivateRoute>
            </Route>
            <Route path="/admin/jobs">
              <PrivateRoute>
                <AdminLayout>
                  <AdminJobs />
                </AdminLayout>
              </PrivateRoute>
            </Route>
            <Route path="/admin/applications">
              <PrivateRoute>
                <AdminLayout>
                  <AdminApplications />
                </AdminLayout>
              </PrivateRoute>
            </Route>
            <Route path="/admin/catalogues">
              <PrivateRoute>
                <AdminLayout>
                  <AdminCatalogues />
                </AdminLayout>
              </PrivateRoute>
            </Route>
            <Route path="/admin/products">
              <PrivateRoute>
                <AdminLayout>
                  <AdminProducts />
                </AdminLayout>
              </PrivateRoute>
            </Route>
            <Route path="/admin/media">
              <PrivateRoute>
                <AdminLayout>
                  <AdminMedia />
                </AdminLayout>
              </PrivateRoute>
            </Route>
            <Route path="/admin/settings">
              <PrivateRoute>
                <AdminLayout>
                  <AdminSettings />
                </AdminLayout>
              </PrivateRoute>
            </Route>
            
            {/* Public Routes with Navbar and Footer */}
            <Route path="/" component={() => (
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            )} />
            <Route path="/about" component={() => (
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            )} />
            <Route path="/new-initiatives" component={() => (
              <>
                <Navbar />
                <NewInitiatives />
                <Footer />
              </>
            )} />
            <Route path="/global-assist" component={() => (
              <>
                <Navbar />
                <GlobalAssist />
                <Footer />
              </>
            )} />
            <Route path="/streamlined-procurement" component={() => (
              <>
                <Navbar />
                <StreamlinedProcurement />
                <Footer />
              </>
            )} />
            <Route path="/products/steel" component={() => (
              <>
                <Navbar />
                <SteelProducts />
                <Footer />
              </>
            )} />
            <Route path="/products/non-steel" component={() => (
              <>
                <Navbar />
                <NonSteelProducts />
                <Footer />
              </>
            )} />
            <Route path="/products/solar" component={() => (
              <>
                <Navbar />
                <SolarProducts />
                <Footer />
              </>
            )} />
            <Route path="/media" component={() => (
              <>
                <Navbar />
                <Media />
                <Footer />
              </>
            )} />
            <Route path="/careers" component={() => (
              <>
                <Navbar />
                <Careers />
                <Footer />
              </>
            )} />
            <Route path="/catalogues" component={() => (
              <>
                <Navbar />
                <Catalogues />
                <Footer />
              </>
            )} />
            <Route path="/contact" component={() => (
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            )} />
            <Route component={() => (
              <>
                <Navbar />
                <NotFound />
                <Footer />
              </>
            )} />
          </Switch>
        </AdminAuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
