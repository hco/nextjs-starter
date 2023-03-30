"use client";
import MuxPlayer from "@mux/mux-player-react";
import { bold } from "client";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export const Player = forwardRef(function Player(
  {
    video,
    autoPlay,
    onTimeUpdate,
    currentTime,
  }: {
    video: any;
    autoPlay?: boolean;
    onTimeUpdate?: (e: Event) => void;
    currentTime?: number;
  },
  ref
) {
  // const [scrollTop, setScrollTop] = useState<number>(0);
  const playerRef = useRef(null);
  const prevScrollY = useRef(0);
  const [isOutOfView, setIsOutOfView] = useState<boolean>(false);
  useImperativeHandle(ref, () => playerRef.current);

  useEffect(() => {
    bold.trackPageView(video.title);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > window.innerHeight * 0.7 && !isOutOfView) {
        setIsOutOfView(true);
      }
      if (currentScrollY < window.innerHeight * 0.7 && isOutOfView) {
        setIsOutOfView(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOutOfView]);

  const handleTimeUpdate = (e: Event) => {
    bold.trackEvent(video, e);
    if (onTimeUpdate) onTimeUpdate(e);
  };

  return (
    <>
      <div className={isOutOfView ? "fixed bottom-0 right-0 w-1/3" : ""}>
        <MuxPlayer
          autoPlay={autoPlay}
          playbackId={video.playback_id}
          onTimeUpdate={handleTimeUpdate}
          onPlay={(e) => bold.trackEvent(video, e)}
          onPause={(e) => bold.trackEvent(video, e)}
          onLoadedMetadata={(e) => bold.trackEvent(video, e)}
          currentTime={currentTime}
          ref={playerRef}
          className="h-full"
        />
      </div>
    </>
  );
});
