import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Building, Users, Star, X, Upload, Send, Eye, Target, Briefcase, ArrowUp, ArrowDown, Search, Filter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import careerBannerImage from '@assets/businessman-holding-briefcase-travellers-walking-outdoors_1752497648254.jpg';

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  createdAt: string;
}

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
}

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState<ApplicationData>({
    name: '',
    email: '',
    phone: '',
    resume: null
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch jobs from admin panel
  const { data: jobOpenings = [], isLoading: jobsLoading } = useQuery<JobOpening[]>({
    queryKey: ['/api/jobs'],
    queryFn: () => fetch('/api/jobs').then(res => res.json()),
  });

  // Job application mutation
  const applyMutation = useMutation({
    mutationFn: async (applicationData: ApplicationData) => {
      const formData = new FormData();
      formData.append('name', applicationData.name);
      formData.append('email', applicationData.email);
      formData.append('phone', applicationData.phone || '');
      if (applicationData.resume) {
        formData.append('resume', applicationData.resume);
      }
      
      const response = await fetch(`/api/jobs/${selectedJob?.id}/apply`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) throw new Error('Failed to submit application');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Application submitted successfully!" });
      handleCloseModal();
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to submit application" });
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract unique departments and locations from job data
  const departments = [...new Set(jobOpenings.map(job => job.department))];
  const locations = [...new Set(jobOpenings.map(job => job.location))];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (job.requirements && job.requirements.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const handleApply = (job: JobOpening) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsApplyModalOpen(false);
    setSelectedJob(null);
    setFormData({ name: '', email: '', phone: '', resume: null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      resume: formData.resume, // Pass the actual file object
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, resume: file });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ede6d3] to-white">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={careerBannerImage}
            alt="Career Opportunities at IndoSup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/50"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-10 w-24 h-24 bg-primary/25 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-36 h-36 bg-primary/35 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.6, 0.2],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-8" style={{ color: '#ffffff', fontFamily: 'Cardo, Georgia, serif' }}>
              Career Opportunities
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-[#F5A623] mx-auto mb-6"
            />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            style={{ fontFamily: 'Cardo, Georgia, serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Build Your Future with Construction Innovation
          </motion.p>

          <motion.button
            className="bg-[#F5A623] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'Cardo, Georgia, serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => {
              const heroHeight = window.innerHeight;
              window.scrollTo({
                top: heroHeight,
                behavior: 'smooth'
              });
            }}
          >
            Explore Opportunities
          </motion.button>
        </div>


      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Job Openings Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
              Current Openings
            </h2>
            <div className="w-24 h-1 bg-[#FFC600] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
              Join our team of innovators and help shape the future of construction procurement
            </p>
          </motion.div>



          {/* Search and Filters */}
          <motion.div 
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg p-6 mb-8 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC600] focus:border-[#FFC600] transition-all duration-300 text-gray-700 placeholder-gray-400 shadow-sm hover:shadow-md hover:border-[#FFC600]/50"
                  style={{ fontFamily: 'Cardo, Georgia, serif' }}
                />
              </div>

              {/* Department Filter */}
              <div className="relative min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC600] focus:border-[#FFC600] text-gray-700 appearance-none shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#FFC600]/50"
                  style={{ fontFamily: 'Cardo, Georgia, serif' }}
                >
                  <option value="all" className="bg-white text-gray-700" style={{ fontFamily: 'Cardo, Georgia, serif' }}>All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept} className="bg-white text-gray-700" style={{ fontFamily: 'Cardo, Georgia, serif' }}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div className="relative min-w-[200px]">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC600] focus:border-[#FFC600] text-gray-700 appearance-none shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#FFC600]/50"
                  style={{ fontFamily: 'Cardo, Georgia, serif' }}
                >
                  <option value="all" className="bg-white text-gray-700" style={{ fontFamily: 'Cardo, Georgia, serif' }}>All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location} className="bg-white text-gray-700" style={{ fontFamily: 'Cardo, Georgia, serif' }}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 text-lg" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
              Showing {filteredJobs.length} of {jobOpenings.length} job openings
              {filteredJobs.length !== jobOpenings.length && (
                <span className="text-[#FFC600] font-semibold" style={{ fontFamily: 'Cardo, Georgia, serif' }}> (filtered from {jobOpenings.length} total)</span>
              )}
            </p>
          </div>

          {/* Job Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 group hover:border-[#FFC600] hover:shadow-[#FFC600]/20"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#FFC600] transition-colors duration-300 flex-1 pr-2" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
                      {job.title}
                    </h3>
                    <span className="bg-gradient-to-r from-[#FFC600]/10 to-[#FFC600]/20 text-[#FFC600] px-2 py-1 rounded-lg text-xs font-medium border border-[#FFC600]/30 whitespace-nowrap" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
                      {job.department}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
                    <span className="flex items-center">
                      <Building className="w-3 h-3 mr-1" />
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {job.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
                  {job.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-[#FFC600] mb-2 text-sm" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Requirements:</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.requirements && job.requirements.split(',').slice(0, 3).map((req, index) => (
                      <span key={index} className="bg-gray-50 text-gray-600 px-2 py-1 rounded-md text-xs border border-gray-100" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
                        {req.trim()}
                      </span>
                    ))}
                    {job.requirements && job.requirements.split(',').length > 3 && (
                      <span className="text-xs text-gray-400 px-2 py-1" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
                        +{job.requirements.split(',').length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
                    {new Date(job.createdAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <Button
                    onClick={() => handleApply(job)}
                    className="bg-[#FFC600] hover:bg-[#E6B200] text-[#2A374B] font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-[#FFC600] text-sm"
                    style={{ fontFamily: 'Cardo, Georgia, serif' }}
                  >
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2" style={{ fontFamily: 'Cardo, Georgia, serif' }}>No Openings Found</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
                Try adjusting your filters or check back later for new opportunities.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Life at IndoSup Section */}
      <section className="py-5 md:py-8 bg-[#3b4f69]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFC600] mb-6" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
              Life at IndoSup
            </h2>
            <div className="w-24 h-1 bg-[#FFC600] mx-auto"></div>
            <p className="text-lg text-[#F5F5F5] mt-6 max-w-2xl mx-auto" style={{ fontFamily: 'Cardo, Georgia, serif' }}>
              Join a dynamic team of innovators, builders, and problem-solvers who are transforming the construction industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Photo 1 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Collaborative Environment</h3>
                  <p className="text-sm" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Working together to solve complex challenges</p>
                </div>
              </div>
            </motion.div>

            {/* Team Photo 2 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Innovation Focus</h3>
                  <p className="text-sm" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Building the future of construction tech</p>
                </div>
              </div>
            </motion.div>

            {/* Team Photo 3 */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team celebration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Growth & Success</h3>
                  <p className="text-sm" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Celebrating achievements together</p>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-accent" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Apply for Position</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {selectedJob && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-accent" style={{ fontFamily: 'Cardo, Georgia, serif' }}>{selectedJob.title}</h4>
                  <p className="text-sm text-neutral-base" style={{ fontFamily: 'Cardo, Georgia, serif' }}>{selectedJob.department} • {selectedJob.location}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-accent mb-2" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                    style={{ fontFamily: 'Cardo, Georgia, serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent mb-2" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                    style={{ fontFamily: 'Cardo, Georgia, serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent mb-2" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your phone number"
                    style={{ fontFamily: 'Cardo, Georgia, serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent mb-2" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Resume *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Cardo, Georgia, serif' }}>Upload your resume</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                      required
                    />
                    <label
                      htmlFor="resume-upload"
                      className="inline-block bg-primary text-accent px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-primary/90 transition-colors"
                      style={{ fontFamily: 'Cardo, Georgia, serif' }}
                    >
                      Choose File
                    </label>
                    {formData.resume && (
                      <p className="text-sm text-primary mt-2" style={{ fontFamily: 'Cardo, Georgia, serif' }}>{formData.resume.name}</p>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-200 text-accent hover:bg-gray-300 font-semibold py-3 rounded-lg transition-colors"
                    style={{ fontFamily: 'Cardo, Georgia, serif' }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={applyMutation.isPending}
                    className="flex-1 bg-primary text-accent hover:bg-accent hover:text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Cardo, Georgia, serif' }}
                  >
                    {applyMutation.isPending ? (
                      <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    {applyMutation.isPending ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}