import { authMiddleware } from "@clerk/nextjs";


//,iddleware protect our application

export default authMiddleware({
    publicRoutes : ["/api/uploadthing"]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};