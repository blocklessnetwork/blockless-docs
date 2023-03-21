import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest): NextResponse | null {
	if (req.nextUrl.href.includes('/docs/_next/'))
		return NextResponse.rewrite(req.nextUrl.href.replace('/docs/_next/', '/_next/'))

	return null
}
