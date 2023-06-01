// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { runBuilderIOCommand } from '@/test'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const builders=await runBuilderIOCommand('npm run builder -h');
  console.log(builders)
  res.status(200).json({ name: 'John Doe' })
}
