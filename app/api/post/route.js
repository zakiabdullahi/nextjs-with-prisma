import { NextRequest, NextResponse } from 'next/server'
import postSchema from './schema'
import prisma from '../../../prisma/client'

export const GET = async () => {

    const postsInfo = await prisma.post.findMany();
    return NextResponse.json(postsInfo);

};

export async function POST(request) {

    try {
        const body = await request.json()

        const validation = postSchema.safeParse(body)


        if (validation.success) {

            const newPost = await prisma.post.create({
                data: {
                    title: validation.data.title,
                    content: validation.data.content,
                    url: validation.data.url
                }
            })


            return NextResponse.json({
                message: newPost
            }, {
                status: 200
            })

        } else {


            // @ts-ignore

            return NextResponse.json({ message: validation.error.errors }, { status: 400, });

        }


    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400, });

    }





}