import React from 'react'

export const Alerta = ({ msg, error }) => {
    return (
        <div
            className={`${error ? ' text-red-400 ' : 'text-green-400'} p-2 text-center font-bold text-sm flex flex-col items-center justify-center gap-2`}
        >
            {
                error ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                )
                    : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    )
            }


            <p>{msg}</p>
        </div>
    )
}
