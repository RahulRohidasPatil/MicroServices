import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { cookies } from "next/headers"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const accessToken = await fetch(`${process.env.BACKEND_URL}/auth/signIn`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: user.name, email: user.email, image: user.image })
        }).then(response => response.text())
        cookies().set('accessToken', accessToken)
        return true
      } catch (error) {
        console.log(`signIn callback: ${(error as Error).message}`)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }