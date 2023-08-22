"use client"
import { useEffect, useState } from "react"
import { useRouter, useParams } from 'next/navigation'
import { Alerta } from "@/components/Alerta"

const HomePage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const router = useRouter()
    const { id } = useParams()
    const [alerta, setAlerta] = useState({ msg: '', error: false })


    useEffect(() => {
        const getTask = async () => {
            if (id) {
                const res = await fetch(`/api/taks/${id}`)
                const data = await res.json()
                setTitle(data?.title)
                setDescription(data?.description)
                return
            }
        }
        getTask()

    }, [])


    const handleSubmit = async e => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value

        if ([title, description].includes("")) return setAlerta({
            msg: 'Todos los campos son obligatorios',
            error: true
        })

        if (id) {
            await fetch(`/api/taks/${id}`, {
                method: "PUT",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            router.refresh()
            router.push('/')
            return
        }

        try {
            await fetch('/api/taks', {
                method: "POST",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setAlerta({
                msg: 'Tarea guardada correctamente',
                error: false
            })
            router.refresh()
            router.push('/')

        } catch (error) {
            console.log(error.message)
        }



    }

    return (
        <main className="h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-3 container mx-auto px-5">
            <h1 className="text-3xl font-bold">{id ? 'Editar tarea' : 'Crea una nueva tarea'}</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-slate-800 p-10 rounded-md shadow md:w-2/5 space-y-3"
            >
                {alerta?.msg && <Alerta msg={alerta.msg} error={alerta.error} />}
                <div>
                    <label htmlFor="title" className="text-gray-200 font-bold block mb-1">Titulo de la tarea</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full border-2 outline-none p-2 rounded-md shadow text-gray-600"
                        placeholder="Titulo"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                </div>
                <div>
                    <label htmlFor="description" className="text-gray-200 font-bold block mb-1">Descripción de la tarea</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        className="w-full border-2 outline-none p-2 rounded-md shadow text-gray-600"
                        placeholder="Descripción"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                </div>

                <div className="flex justify-between">
                    <input
                        className="px-3 py-1 bg-green-400 hover:bg-green-500 transition-colors text-white text-xs font-bold uppercase cursor-pointer rounded-md"
                        type="submit"
                        value={id ? 'Guardar' : 'Crear'}

                    />
                    {
                        id && (
                            <button
                                type="button"
                                className="px-3 py-1 bg-red-400 hover:bg-red-500 transition-colors text-white text-xs font-bold uppercase cursor-pointer rounded-md"
                                onClick={() => {
                                    fetch(`/api/taks/${id}`, {
                                        method: 'DELETE'
                                    })
                                    router.refresh()
                                    router.push('/')
                                }}
                            >
                                Eliminar
                            </button>
                        )
                    }
                </div>
            </form>
        </main>
    )
}

export default HomePage