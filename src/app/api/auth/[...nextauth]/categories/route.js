import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const Get = async () => {
    try{
        const categories = await prisma.category.findMany();

        return new NextResponse(JSON.stringify(categories, {stattus:200}));
    } catch (err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message:"something went going"}),{status:500}
        );
    }
};