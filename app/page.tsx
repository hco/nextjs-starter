import Link from "next/link";

import { bold } from "client";

export default async function Home() {
  const settings = await bold.settings();
  const videos = await bold.videos.list();
  const playlists = await bold.playlists.list();

  console.log("settings", settings);
  console.log("playlists", playlists);

  return (
    <main className="">
      <h1>Latest Videos</h1>
      <ul>
        {videos.data.map((vid) => (
          <li key={vid.id}>
            <Link href={`/v/${vid.id}`}>{vid.title}</Link>
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
    </main>
  );
}
