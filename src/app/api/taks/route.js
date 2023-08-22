import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async () => {
  const result = await prisma.taks.findMany();
  return NextResponse.json(result);
};

export const POST = async (req, { params }) => {
  const { title, description } = await req.json();

  //Creando nota y guardando en la base de datos
  const newTask = await prisma.taks.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newTask);
};
