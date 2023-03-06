"use client";
import MuxPlayer from "@mux/mux-player-react";
import { bold } from "client";
import { useEffect } from "react";

export function Player({
  video,
  autoPlay,
}: {
  video: any;
  autoPlay?: boolean;
}) {
  useEffect(() => {
    bold.trackPageView(video.title);
  }, []);
  return (
    <MuxPlayer
      autoPlay={autoPlay}
      playbackId={video.playback_id}
      onTimeUpdate={(e) => bold.trackEvent(video, e)}
      onPlay={(e) => bold.trackEvent(video, e)}
      onPause={(e) => bold.trackEvent(video, e)}
      onLoadedMetadata={(e) => bold.trackEvent(video, e)}
    />
  );
}
