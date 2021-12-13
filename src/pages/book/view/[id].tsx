import React from 'react'
import { useRouter } from 'next/router'

const Book = () => {
    const route = useRouter()
    return (
        <div>
            <h1>Ver Book con ID: {route.query.id}</h1>
            <h2>No implementado</h2>
        </div>
    )
}

export default Book
