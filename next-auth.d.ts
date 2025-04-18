// declare module "next-auth" {
//   interface Session {
//     id: string;
//   }
//   interface JWT {
//     id: string;
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";
import "next-auth/jwt";

// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       /** The user's postal address. */
//       address: string;
//     } & DefaultSession["user"];
//   }
// }

declare module "next-auth" {
  interface Session {
    id: string; // 👈 Add this line
    user: {
      address: string;
    } & DefaultSession["user"];
  }
}

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin";
  }
}
