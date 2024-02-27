import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, owner } = body

    if (!name) {
      return new NextResponse("Name is required", { status: 400 })
    }

    const business = await prisma.business.create({
      data: {
        name,
        owner: {
          connect: { email: owner.email },
        },
      }
    })

    return NextResponse.json(business)
  } catch (err) {
    console.error('API: Bussiness#POST', err)
    return new NextResponse('Internal error', { status: 500 })
  }
}
