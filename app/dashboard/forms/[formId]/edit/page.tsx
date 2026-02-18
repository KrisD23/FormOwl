import FormBuilder from "@/components/form/form-builder";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function EditFormPage({
  params,
}: {
  params: Promise<{ formId: string }>;
}) {
  const session = await auth();
  const userId = session?.user?.id;
  const { formId } = await params;

  if (!userId) redirect("/api/auth/signin");

  const form = await prisma.form.findUnique({
    where: {
      id: formId,
    },
    include: {
      questions: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!form) {
    redirect("/dashboard/forms");
  }

  if (form.userId !== userId) {
    redirect("/dashboard/forms");
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Edit Form</h1>
        <p className="text-gray-500 mt-1">
          Update your form details and questions
        </p>
      </div>

      <FormBuilder
        initialData={{
          ...form,
          description: form.description || "",
        }}
        isEditing
      />
    </div>
  );
}
