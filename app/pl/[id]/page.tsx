import Link from "next/link";
import { bold } from "../../../client";

export const dynamic = "force-dynamic";
export default async function ({ params }: any) {
  const { data: playlist } = await bold.playlists.get(params.id);

  if (!playlist) return <p>loading</p>;

  return (
    <div>
      <p>
        <Link href="/">back</Link>
      </p>
      <h1>{playlist.title}</h1>
      <ul>
        {playlist.videos.map((vid) => {
          return (
            <li>
              <Link href={`/v/${vid.id}`}>{vid.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
