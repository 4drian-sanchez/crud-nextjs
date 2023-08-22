import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (req, { params: { id } }) => {
  const task = await prisma.taks.findUnique({
    where: { id: +id },
  });
  return NextResponse.json(task);
};

export const PUT = async (req, { params: { id } }) => {
  const data = await req.json();
  const taskUpdate = await prisma.taks.update({
    where: { id: +id },
    data: data,
  });

  return NextResponse.json(taskUpdate);
};

export const DELETE = async (req, { params: { id } }) => {
  const taskEliminado = await prisma.taks.delete({
    where: { id: +id },
  });
  return NextResponse.json(taskEliminado);
};
