import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Dashboard() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) redirect("/api/auth/signin");

  // Get all dashboard data in parallel for better performance
  const [formsCount, responseCount, recentForms] = await Promise.all([
    // Count user's forms
    prisma.form.count({
      where: { userId },
    }),
    // Count responses more efficiently
    prisma.formResponse.count({
      where: { form: { userId } },
    }),
    // Get recent forms
    prisma.form.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 5,
      include: {
        _count: {
          select: { responses: true },
        },
      },
    }),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">welcome, John</h1>
        <p className="text-gray-500 mt-1">manage your forms and responses</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Your Forms</h2>
          <p className="text-3xl font-bold mt-2">{formsCount}</p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms">View All Forms</Link>
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Total Responses</h2>
          <p className="text-3xl font-bold mt-2">{responseCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Create New</h2>
          <p className="text-gray-500 mt-2">Start building a new form</p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms/create">Create Form</Link>
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border">
        <h2 className="text-xl font-medium mb-4">Recent Forms</h2>
        {recentForms.length === 0 ? (
          <p>{`You haven't created any forms yet.`}</p>
        ) : (
          <div className="space-y-4">
            {recentForms.map((form) => (
              <div
                className="flex items-center justify-between border-b pb-4"
                key={form.id}
              >
                <div>
                  <h3 className="font-medium">{form.title}</h3>
                  <p className="text-sm text-gray-500">
                    {form._count.responses} responses · Created on{" "}
                    {new Date(form.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button>
                    <Link href={`/dashboard/forms/${form.id}`}>View</Link>
                  </Button>
                  <Button>
                    <Link href={`/dashboard/forms/${form.id}/responses`}>
                      Responses
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="space-y-4"></div>
      </div>
    </div>
  );
}
