import FormList from "@/components/form/form-list";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function FormPage() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) redirect("/api/auth/signin");

  const forms = await prisma.form.findMany({
    where: {
      userId: userId,
    },
    include: {
      _count: {
        select: {
          responses: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Forms</h1>
        <p className="text-gray-500 mt-1">Create and manage your forms</p>
      </div>

      <FormList forms={forms} />
    </div>
  );
}
