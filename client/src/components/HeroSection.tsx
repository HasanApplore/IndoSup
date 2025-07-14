import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
  const [youtubeVideoId, setYoutubeVideoId] = useState('');
  const [player, setPlayer] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);

  // Extract YouTube video ID from URL
  const extractYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Set your demo video URL here
  useEffect(() => {
    // Using specified construction video
    const demoVideoUrl = "https://www.youtube.com/watch?v=4BzjUq921Y4"; // Construction video (0-6 seconds)
    const videoId = extractYouTubeId(demoVideoUrl);
    if (videoId) {
      setYoutubeVideoId(videoId);
    }
  }, []);

  // YouTube API integration for video control
  useEffect(() => {
    if (!youtubeVideoId) return;

    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Create player when API is ready
    const initializePlayer = () => {
      if (iframeRef.current && window.YT && window.YT.Player) {
        const ytPlayer = new window.YT.Player(iframeRef.current, {
          videoId: youtubeVideoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: youtubeVideoId,
            controls: 0,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            start: 0,
            end: 10,
            cc_load_policy: 0,
            fs: 0,
            disablekb: 1,
            origin: window.location.origin,
            widget_referrer: window.location.origin
          },
          events: {
            onStateChange: (event) => {
              // When video ends, restart the loop immediately
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
            },
            onReady: (event) => {
              // Force autoplay when ready
              setPlayer(event.target);
              // Ensure video starts playing immediately with multiple attempts
              const forcePlay = () => {
                try {
                  event.target.mute(); // Ensure muted for autoplay
                  event.target.playVideo();
                  event.target.seekTo(0); // Start from beginning
                } catch (error) {
                  console.log('Autoplay attempt failed, retrying...');
                  setTimeout(forcePlay, 500);
                }
              };
              
              // Multiple autoplay attempts for better reliability
              setTimeout(forcePlay, 100);
              setTimeout(forcePlay, 500);
              setTimeout(forcePlay, 1000);
              setTimeout(forcePlay, 2000);
            }
          }
        });
      }
    };

    // Initialize player immediately if API is ready, otherwise wait for it
    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      // Cleanup
      if (window.YT && window.YT.Player) {
        window.onYouTubeIframeAPIReady = null;
      }
    };
  }, [youtubeVideoId]);

  return (
    <section className="relative w-full overflow-hidden h-screen">
      {/* YouTube Video Background */}
      {youtubeVideoId ? (
        <div 
          className="absolute inset-0 w-full h-full cursor-pointer group"
          onClick={() => {
            if (player) {
              if (isMuted) {
                player.unMute();
                player.setVolume(70);
                setIsMuted(false);
              } else {
                player.mute();
                setIsMuted(true);
              }
              player.playVideo();
            }
          }}
        >
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&start=0&end=10&enablejsapi=1&cc_load_policy=0&fs=0&disablekb=1&origin=${encodeURIComponent(window.location.origin)}&widget_referrer=${encodeURIComponent(window.location.origin)}`}
            title="IndoSup Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          {/* Overlay to hide any YouTube branding or suggestions */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Hide YouTube logo/branding in bottom right */}
            <div className="absolute bottom-0 right-0 w-24 h-12 bg-transparent z-10"></div>
            {/* Hide any potential suggestions overlay */}
            <div className="absolute inset-0 bg-transparent z-0"></div>
          </div>
          
          {/* Sound Toggle Indicator */}
          <div className="absolute top-8 right-8 z-20 pointer-events-none">
            <motion.div
              className="bg-black/50 backdrop-blur-sm rounded-full p-3 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </motion.div>
          </div>
          
          {/* Click to Enable Sound Notice */}
          {isMuted && (
            <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
              <motion.div
                className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <VolumeX className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Click to enable sound</span>
              </motion.div>
            </div>
          )}
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