"use client";
import MuxPlayer from "@mux/mux-player-react";
import { bold } from "client";
import { useEffect } from "react";

export function Player({ video }: { video: any }) {
  useEffect(() => {
    bold.trackPageView(video.title);
  }, []);
  return (
    <MuxPlayer
      playbackId={video.playback_id}
      onTimeUpdate={(e) => bold.trackEvent(video, e)}
      onPlay={(e) => bold.trackEvent(video, e)}
      onPause={(e) => bold.trackEvent(video, e)}
      onLoadedMetadata={(e) => bold.trackEvent(video, e)}
    />
  );
}
