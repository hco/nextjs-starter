import Link from "next/link";
import { bold } from "../../../client";

export default async function ({ params }: any) {
  if (!params.id) return null;

  const { data: playlist } = await bold.playlists.get(params.id);

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
