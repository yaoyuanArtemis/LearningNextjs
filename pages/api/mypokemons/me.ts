// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mock from "./mock.js";

type Data = {
  name: string;
  height: number;
  weight: number;
};

const pokemonList = [...mock];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("method:", req.method, "query:", req.query);
  switch (req.method) {
    case "POST":
      pokemonList.push(req.body);
      break;
    case "PUT":
      break;
    case "DELETE":
      break;
    default:
      break;
  }
  res.status(200).json({ name: "John Doe", weight: 70, height: 185 });
}
