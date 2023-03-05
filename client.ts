import { createClient } from "@/../bold-js/dist";

export const bold = createClient(
  process.env.NEXT_PUBLIC_BOLD_API_KEY as string
);
