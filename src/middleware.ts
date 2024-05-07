import { NextResponse } from "next/server";
import { auth } from "./auth";
import { SIGNIN_REDIRECT, authRoutes, publicRoutes } from "./routes";

export default auth((req) => {
    const { nextUrl, } = req
    const isLoggedIn = !!req.auth
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if(isAuthRoute) {
        if(isLoggedIn) {
            return NextResponse.redirect(new URL(SIGNIN_REDIRECT, nextUrl))
        }
        return undefined
    }
    
    if(!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname
        if(nextUrl.search) {
            callbackUrl += nextUrl.search
        }

        const encodedUrl = encodeURIComponent(callbackUrl)

        return NextResponse.redirect(new URL(`/signin?callbackUrl=${encodedUrl}`, nextUrl))
    }
    return undefined
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};