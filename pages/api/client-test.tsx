import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "123@ddd.com",
      name: "user1",
    },
  });

  res.json({
    ok: true,
  });
}
