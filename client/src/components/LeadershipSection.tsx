import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Mr. Rajesh Kumar",
      title: "Chief Executive Officer",
      experience: "25+ years in construction industry",
      background: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      name: "Ms. Priya Sharma",
      title: "Chief Technology Officer",
      experience: "20+ years in digital transformation",
      background: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      name: "Mr. Amit Patel",
      title: "Head of Operations",
      experience: "18+ years in supply chain management",
      background: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      name: "Ms. Sunita Reddy",
      title: "Head of Business Development",
      experience: "15+ years in strategic partnerships",
      background: "bg-gradient-to-br from-orange-50 to-orange-100"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Our Leadership Team
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-base max-w-2xl mx-auto">
            Meet the visionary leaders driving innovation in construction procurement
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${leader.background} rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-white/50`}
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <User className="w-10 h-10 text-accent" />
              </div>
              
              <h3 className="text-lg font-bold text-accent mb-2 border-b-2 border-primary/30 pb-1 inline-block">
                {leader.name}
              </h3>
              
              <p className="text-sm font-semibold text-accent/80 mb-3">
                {leader.title}
              </p>
              
              <p className="text-xs text-neutral-base">
                {leader.experience}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}