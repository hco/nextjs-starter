import Link from "next/link";
import { Player } from "components/player";

import { bold } from "../../../client";

export const dynamic = 'force-dynamic';
export default async function ({ params }: any) {
  const video = await bold.videos.get(params.id);

  if (!video) return <p>loading</p>;
  return (
    <div>
      <p>
        <Link href="/">back</Link>
      </p>
      <h1>{video.data.title}</h1>
      <div>
        <Player video={video.data} />
      </div>
    </div>
  );
}
