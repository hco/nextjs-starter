import Link from 'next/link'
import { bold } from "client";
import { VideoThumbnail } from 'components/video-thumbnail'

export const revalidate = 60;

export default async function Home() {
  const { data: settings } = await bold.settings();
  const videos = await bold.videos.list();


  return (
    <div className="max-w-screen-2xl mx-auto">
      <h2 className="font-bold text-3xl mb-5">Latest Videos</h2>
      <ul className="mb-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
        {videos.data.map((vid) => (
          <li key={vid.id}>
            <VideoThumbnail video={vid} />
          </li>
        ))}
      </ul>

      {settings.featured_playlists.map(pl => {
        return <>
          <h2 className="flex font-bold text-3xl mb-5 items-center">
            <Link href={`/pl/${pl.id}`}>{pl.title}</Link>
            <span className="font-normal text-base text-gray-400 ml-3 px-3 py-2 border-gray-800  border rounded-full">{pl.videos.length} Videos</span>
          </h2>
          <ul className="mb-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
            {pl.videos.map((vid) => (
              <li key={vid.id}>
                <VideoThumbnail video={vid} />
              </li>
            ))}
          </ul>
        </>
      })}
    </div>
  );
}

