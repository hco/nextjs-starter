import { bold } from "client";
import { VideoThumbnail } from 'components/video-thumbnail'

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

