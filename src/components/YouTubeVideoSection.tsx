import React, { useState } from 'react';
import { Play } from 'lucide-react';

const YOUTUBE_ID = 'cr1b_0xommY';

const YouTubeVideoSection = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const mutedSrc = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&showinfo=0&rel=0&modestbranding=1`;
  const unmutedSrc = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`;

  return (
    <section className="bg-background">
      <div className="relative aspect-video w-full overflow-hidden">
        <iframe
          src={showOverlay ? mutedSrc : unmutedSrc}
          title="EC STEM Video"
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        />
        {showOverlay && (
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500 z-10"
            onClick={() => setShowOverlay(false)}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
              <Play className="h-10 w-10 text-white fill-white ml-1" />
            </div>
            <p className="text-white text-xl md:text-2xl font-semibold tracking-wide">
              Watch Our Story
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeVideoSection;
