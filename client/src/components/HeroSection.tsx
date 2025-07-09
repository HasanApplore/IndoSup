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
    // Using a construction and architecture video
    const demoVideoUrl = "https://www.youtube.com/watch?v=G3ja6Hn8ps4"; // Construction and architecture video
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
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0&loop=1&playlist=${youtubeVideoId}&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`}
            title="IndoSup Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
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
    </section>
  );
}