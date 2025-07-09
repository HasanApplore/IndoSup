import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [youtubeVideoId, setYoutubeVideoId] = useState('');

  // Extract YouTube video ID from URL
  const extractYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Set your demo video URL here
  useEffect(() => {
    // Using a specific construction/business demo video
    const demoVideoUrl = "https://www.youtube.com/watch?v=ScMzIvxBSi4"; // Construction industry demo video
    const videoId = extractYouTubeId(demoVideoUrl);
    if (videoId) {
      setYoutubeVideoId(videoId);
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-screen">
      {/* YouTube Video Background */}
      {youtubeVideoId ? (
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0&loop=1&playlist=${youtubeVideoId}&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`}
            title="IndoSup Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
          />
          {/* Video Overlay for better content readability */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        </div>
      ) : (
        // Fallback for when video ID is not available
        <div className="absolute inset-0 w-full h-full bg-accent">
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <motion.div
                className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ top: '10%', left: '10%' }}
              />
              <motion.div
                className="absolute w-64 h-64 bg-primary/15 rounded-full blur-2xl"
                animate={{
                  x: [0, -80, 0],
                  y: [0, 100, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 5
                }}
                style={{ top: '60%', right: '15%' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-5xl mx-auto content-spacing"
          >
            {/* Main Heading */}
            <motion.h1
              className="text-white text-shadow-lg mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Revolutionizing Construction Procurement
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="subtitle text-white/90 text-shadow-lg mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              End-to-End Digital Sourcing for Modern Infrastructure
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button
                className="btn-primary text-lg px-8 py-4 min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solutions
              </motion.button>
              <motion.button
                className="btn-secondary text-lg px-8 py-4 min-w-[200px] text-white border-white hover:bg-white hover:text-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}