import Header from "@/components/layout/header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session?.user) redirect("/api/auth/signin");

  return (
    <div className=" min-h-screenflex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4">{children}</main>
    </div>
  );
};

export default layout;
