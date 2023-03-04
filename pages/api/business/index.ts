import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
  console.log('hiii')
  const { name, owner } = req.body
  const session = await getSession({ req })

  console.log('sss', session)
  /*
  const result = await prisma.business.create({
    data: {
      name,
      owner: { connect: { email: session?.user?.email } },
    },
  })
  */

  res.json('')
}