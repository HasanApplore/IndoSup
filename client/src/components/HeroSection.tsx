import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [youtubeVideoId, setYoutubeVideoId] = useState('');
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

    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (iframeRef.current) {
        const player = new window.YT.Player(iframeRef.current, {
          host: 'https://www.youtube-nocookie.com',
          playerVars: {
            autoplay: 1,
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
            origin: 'https://indosup.com'
          },
          events: {
            onStateChange: (event) => {
              // When video ends, restart the loop immediately
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0);
                event.target.playVideo();
              }
              // Ensure continuous playback
              if (event.data === window.YT.PlayerState.PAUSED) {
                event.target.playVideo();
              }
            },
            onReady: (event) => {
              // Force autoplay when ready
              event.target.playVideo();
              event.target.setVolume(50); // Set moderate volume
            }
          }
        });
      }
    };

    return () => {
      // Cleanup
      if (window.YT && window.YT.Player) {
        window.onYouTubeIframeAPIReady = null;
      }
    };
  }, [youtubeVideoId]);

  return (
    <section className="relative w-full overflow-hidden h-screen">
      {/* CSS to hide YouTube suggestions and overlays */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .youtube-container iframe {
            pointer-events: none !important;
          }
          .youtube-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            pointer-events: none;
            z-index: 1;
          }
          /* Hide YouTube end screen elements */
          .ytp-endscreen-content,
          .ytp-ce-element,
          .ytp-cards-teaser,
          .ytp-pause-overlay,
          .ytp-suggested-action,
          .ytp-endscreen-previous,
          .ytp-endscreen-next {
            display: none !important;
            visibility: hidden !important;
          }
        `
      }} />
      {/* YouTube Video Background */}
      {youtubeVideoId ? (
        <div className="absolute inset-0 w-full h-full youtube-container">
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&start=0&end=10&enablejsapi=1&cc_load_policy=0&fs=0&disablekb=1&origin=https://indosup.com`}
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