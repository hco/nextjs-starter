import Link from "next/link";

import { bold } from "client";
import Image from "next/image";

export default async function Home() {
  const settings = await bold.settings();
  const videos = await bold.videos.list();
  const playlists = await bold.playlists.list();

  console.log("settings", settings);
  console.log("playlists", playlists);

  return (
    <div className="">
      <h2 className="font-bold text-3xl mb-5">Latest Videos</h2>
      <ul className="grid grid-cols-4 gap-10">
        {videos.data.map((vid) => (
          <li key={vid.id}>
            <VideoThumbnail video={vid} />
          </li>
        ))}
      </ul>
      <h1>Playlists</h1>
      <ul>
        {playlists.data.map((pl) => (
          <li>
            <Link href={`/pl/${pl.id}`}>{pl.title}</Link>
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
    <p className="text-gray-500 text-sm">{video.published_at}</p>
  </div>
}
