"use client";
import { formatRelative } from "date-fns";
import { Player } from "components/player";
import { Transcript } from "@/components/transcript";
import { useCallback, useEffect, useRef, useState } from "react";

type VideoDetailProps = {
  video: any;
};

export function VideoDetail({ video }: VideoDetailProps) {
  const playerRef = useRef<HTMLVideoElement>(null)
  // const currentTimeRef = useRef<number>(0)
  // const transcriptRef = useRef(null)
  // const [currentPlayheadTime, setCurrentPlayheadTime] = useState<number>(0);
  // const [currentTime, setCurrentTime] = useState<number | undefined>();

  // const playerRef = useCallback((player:any) => {
  //  const onTimeUpdate = () => {
  //      console.log('timeupdate', player.current.currentTime);
  //  }
  //  if(player?.current) player.current.addEventListener("timeupdate", onTimeUpdate);
    
  // }, [])
  
  console.log('playerRef', playerRef)

  //useEffect(() => {

  //  const onTimeUpdate = () => {
  //    if (playerRef?.current) {
  //      console.log('timeupdate', playerRef.current.currentTime);
  //    }
  //  }
  //  if (playerRef?.current) playerRef.current.addEventListener("timeupdate", onTimeUpdate);

  //  return () => playerRef.current.removeEventListener('timeupdate', onTimeUpdate)
  //}, [playerRef])
  ////
  // const transcript = `http://uploads.eu1.boldvideo.io/${video.captions}`;
  // const transcript = `https://s3.eu-central-1.amazonaws.com/uploads.eu1.boldvideo.io/${video.captions}`;
  // https://s3.eu-central-1.amazonaws.com/uploads.eu1.boldvideo.io/captions/bt_bold-demo/49af9fc4-bab9-4203-89a1-963c7030f0c6-FOwOVQD0sL8ri5FT.vtt
  const handleCueClick = (time:number) => {
    if (playerRef?.current) playerRef.current.currentTime = time;
  }


  console.log('video', video)
  return (
    <div className="flex flex-col">
      <div className="relative -mx-5 md:-mx-10 -mt-5 md:-mt-10 mb-5 md:mb-10 flex justify-center bg-black w-screen aspect-video max-h-[calc(100vh-240px)]">
        <Player
          video={video}
          autoPlay={true}
          ref={playerRef}
        />
      </div>
      <div className="md:max-w-4xl mx-auto px-5 md:px-10">
        <h1 className="text-3xl md:text-[42px] font-extrabold mb-4 leading-tight">
          {video.title}
        </h1>
        <p className="text-gray-600 text-xl mb-4">
          {formatRelative(new Date(video.published_at), new Date())}
        </p>
        <p className="text-[21px] mb-12">{video.description}</p>
        <hr className="mb-12 border-gray-700" />

        {video.transcript ? (
          <Transcript
            url={video.transcript.json.url}
            playerRef={playerRef}
            onCueClick={handleCueClick}
          />
        ) : null}
      </div>
    </div>
  );
}
