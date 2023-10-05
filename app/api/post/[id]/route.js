import prisma from "../../../../prisma/client";
import postSchema from "../schema";
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {

    const post = await prisma.post.findUnique({ where: { id: params.id } });

    return NextResponse.json(post);

};

export const DELETE = async (req, { params }) => {

    const deletePost = await prisma.post.delete({ where: { id: params.id } });

    return NextResponse.json(deletePost);
};

export const PUT = async (req, { params }) => {




    try {
        const body = await req.json()

        const validation = postSchema.safeParse(body)



        if (validation.success) {

            const { title, content, url } = validation.data;


            const updatedPost = await prisma.post.update({
                where: { id: params.id },
                data: {
                    content: content,
                    url: url,
                    title: title,
                }
            });

            return NextResponse.json({ message: updatedPost }, { status: 200, });
        } else {
            // @ts-ignore
            return NextResponse.json({ message: validation.error.errors }, { status: 400, });
        }


    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400, });

    }
}