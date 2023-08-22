import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return (
        <div className='h-[calc(100vh-7rem)] flex flex-col items-center justify-center '>
            <h1 className='text-2xl font-bold'>página no encontrada</h1>
            <Link className='text-sm hover:underline text-gray-300 font-bold' href={'/'}>Volver</Link>


        </div>
    )
}

export default notFound