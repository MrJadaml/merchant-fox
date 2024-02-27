import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaClient, User as PrismaUser } from '@prisma/client'

const prisma = new PrismaClient();

interface User extends PrismaUser {}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    })
  ],
  callbacks: {
    async signIn(google) {
      const { user }: { user: PrismaUser } = google
      const { email, name, image } = user

      if (!email) {
        console.error('Email is missing in the user object:', user)
        return false
      }

      await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
          email,
          name,
          image,
        },
      })

      return true
    },
  },
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
