import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  poster: string;
}

export default function VideoPlayer({ url, poster }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative w-full h-full">
      <ReactPlayer
        url={url}
        playing={playing}
        muted={muted}
        width="100%"
        height="100%"
        light={poster}
        controls={true}
        playsinline
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
              playsinline: 1,
              iv_load_policy: 3,
              origin: window.location.origin
            }
          }
        }}
      />
      
      {/* Custom Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        <button
          onClick={() => setPlaying(!playing)}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button
          onClick={() => setMuted(!muted)}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}