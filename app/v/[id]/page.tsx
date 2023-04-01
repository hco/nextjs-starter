import { bold } from "@/client";
import { VideoDetail } from "@/components/video-detail";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function ({ params }: any) {
  const { data: video } = await bold.videos.get(params.id);

  if (!video) return <p>loading</p>;

  return <VideoDetail video={video} />;
}
