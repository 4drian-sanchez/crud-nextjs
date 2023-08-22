"use client"
import { useRouter } from "next/navigation"

export const Tasks = ({ task: { title, description, createAt, id } }) => {
    const router = useRouter()

    return (
        <div
            className="py-3 px-5 rounded-md bg-slate-800 hover:bg-slate-600 transition-colors cursor-pointer"
            onClick={() => router.push(`/tasks/edit/${id}`)}
        >
            <h2 className="text-center text-xl font-bold text-gray-200 mb-2 uppercase">{title}</h2>
            <p className="text-lg font-bold text-gray-300 ">{description}</p>
            <p className="mt-5 text-xs text-end font-bold text-gray-300 ">{new Date(createAt).toLocaleDateString()}</p>
        </div>
    )
}
