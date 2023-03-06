import { bold } from "@/client";
import { VideoThumbnail } from "@/components/video-thumbnail";

export default async function ({ params }: any) {
  const { data: playlist } = await bold.playlists.get(params.id);
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">{playlist.title}</h2>
      <p className="mb-10 text-lg max-w-3xl">{playlist.description}</p>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
        {playlist.videos.map((vid: any) => (
          <li key={vid.id}>
            <VideoThumbnail video={vid} />
          </li>
        ))}
      </ul>
    </div>
  );
}
