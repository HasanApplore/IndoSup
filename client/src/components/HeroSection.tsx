import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// YouTube API types
declare global {
  interface Window {
    YT: {
      Player: any;
      PlayerState: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function HeroSection() {
  const [youtubeVideoId, setYoutubeVideoId] = useState('');
  const [player, setPlayer] = useState<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract YouTube video ID from URL
  const extractYouTubeId = (url: string) => {
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
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
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
            onStateChange: (event: any) => {
              // When video ends, restart the loop immediately
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
            },
            onReady: (event: any) => {
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
      (window as any).onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      // Cleanup
      if (window.YT && window.YT.Player) {
        (window as any).onYouTubeIframeAPIReady = null;
      }
    };
  }, [youtubeVideoId]);

  return (
    <section className="relative w-full overflow-hidden h-screen">
      {/* YouTube Video Background */}
      {youtubeVideoId ? (
        <div 
          className="absolute inset-0 w-full h-full cursor-pointer"
          onClick={() => {
            if (player && player.playVideo) {
              player.playVideo();
              player.playVideo(); // Double call for better reliability
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