import Link from "next/link";
import Image from "next/image";
import { formatRelative } from 'date-fns'

import { bold } from "client";

export default async function Home() {
  const settings = await bold.settings();
  const videos = await bold.videos.list();

  console.log("settings", settings);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <h2 className="font-bold text-3xl mb-5">Latest Videos</h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
        {videos.data.map((vid) => (
          <li key={vid.id}>
            <VideoThumbnail video={vid} />
          </li>
        ))}
      </ul>

    </div>
  );
}

function VideoThumbnail({video}: {video: any}) {
  return <div className="aspect-video group relative ">
    <div className="aspect-video relative overflow-hidden">
      <Image src={video.thumbnail} alt={video.title} fill={true} className="object-cover" />      
    </div>
    <h3 className="mt-4 font-semibold text-lg">
      <Link href={`/v/${video.id}`}>
        <span className="absolute -inset-2.5 z-10"></span>
        <span>{video.title}</span>
      </Link>
    </h3>
    <p className="text-gray-500 text-sm">{formatRelative(new Date(video.published_at), new Date())}</p>
  </div>
}
