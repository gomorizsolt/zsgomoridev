import type { NextApiRequest, NextApiResponse } from "next";
import { getViews } from "lib/views";

type ResponseData = {
  views?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { slug } = req.query;

  try {
    const views = await getViews(slug as string);

    return res.status(200).json({ views });
  } catch (error) {
    console.error(`Error while retrieving views: ${slug}`, error);

    return res.status(500);
  }
}
