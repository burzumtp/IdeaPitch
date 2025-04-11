import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, signIn, auth } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const Navbar = async () => {
  const session = await auth();
  // console.log("user session", session);
  return (
    <>
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans ">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
          </Link>

          <div className="flex items-center gap-5">
            {session && session?.user ? (
              <>
                <Link href="/startup/create  ">
                  <span className="max-sm:hidden">Create</span>
                  <BadgePlus className="size-6 sm:hidden" />
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button type="submit">
                    <span className="max-sm:hidden">Logout</span>
                    <LogOut className="sm:hidden size-6" />
                  </button>
                </form>

                <Link href={`/user/${session?.id}`}>
                  <Avatar className="size-10">
                    <AvatarImage
                      src={session?.user?.image || ""}
                      alt={session?.user?.name || ""}
                    />

                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                  {/* <span>{session?.user?.name}</span> */}
                </Link>
              </>
            ) : (
              <>
                <form
                  action={async () => {
                    "use server";
                    await signIn("github");
                  }}
                >
                  <button type="submit">Login</button>
                </form>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
