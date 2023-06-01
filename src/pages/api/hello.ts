// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { runBuilderIOCommand } from '@/test'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: any,
  hello:any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("CALLED")
  const builders=await runBuilderIOCommand('builder -h');
  console.log(builders)
  res.status(200).json({ name : builders ,
                          hello:'Hello'})
}
