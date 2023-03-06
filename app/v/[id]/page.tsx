import { Player } from "components/player";

import { bold } from "../../../client";
import { formatRelative } from "date-fns";

export const dynamic = "force-dynamic";

export default async function ({ params }: any) {
  const { data: video } = await bold.videos.get(params.id);

  console.log('video', video)

  if (!video) return <p>loading</p>;

  return (
    <div className="flex flex-col">
      <div className="relative -mx-5 md:-mx-10 -mt-5 md:-mt-10 mb-5 md:mb-10 flex justify-center max-h-[calc(100vh-240px)]">
        <Player video={video} autoPlay={true} />
      </div>
      <div className="md:max-w-4xl mx-auto px-5 md:px-10">
        <h1 className="text-3xl md:text-[42px] font-extrabold mb-4 leading-tight">
          {video.title}
        </h1>
        <p className="text-gray-600 text-xl mb-4">
          {formatRelative(new Date(video.published_at), new Date())}
        </p>
        <p className="text-xl mb-10">{video.description}</p>
      </div>
    </div>
  );
}
