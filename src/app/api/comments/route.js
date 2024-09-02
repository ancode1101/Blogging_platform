import { getAuthSession } from "@/utils/auth";  // i am using the [] bracket for my dynamic routing 
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// my post comments
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({   // See my scema part
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

//  this is for creating a comment or writing a comment
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
