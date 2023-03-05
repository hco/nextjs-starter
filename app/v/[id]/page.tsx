
import Link from "next/link";
import { Player } from 'components/player'

import { bold } from "../../../client";

export default async function ({ params }: any) {
  if(!params.id) return null;

  const video = await bold.videos.get(params.id);
  
  if (!video) return <p>loading</p>
  console.log(video)
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
