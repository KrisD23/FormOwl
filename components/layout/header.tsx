import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { auth, signOut } from "@/auth";

const Header = async () => {
  const session = await auth();

  return (
    <header className="bg-background border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-2xl">
            Form Builder
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-3 ">
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/forms"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {" "}
                  My Forms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/dashboard/forms/create">Create Form</Link>
          </Button>
          {session?.user ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <Button type="submit" variant="ghost">
                Sign Out
              </Button>
            </form>
          ) : (
            <Button asChild>
              <Link href="/api/auth/signin">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
