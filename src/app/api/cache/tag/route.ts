import { revalidateTag } from "next/cache"

export async function POST(request: Request) {
  const body = await request.json()

  const { tag, token } = body
  if (!tag || !token) {
    return Response.json({ error: 'Missing tag or token'}, { status: 400 })
  }

  if (token !== process.env.CACHE_TOKEN) {
    return Response.json({ error: 'Unauthorized'}, { status: 401 })
  }

  revalidateTag(tag)

  return Response.json({ success: true}, { status: 200 })
}
