import axios, { Method } from 'axios'

const PUBLIC_URL = 'http://localhost:3000' // 'https://bookstore-eta.vercel.app'

export const BASE_URL = `${PUBLIC_URL}/api/v1`

const BASE_HEADER = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
}

export const connection = async (
    data: object,
    method: Method,
    routePath: string
) =>
    (
        await axios({
            method,
            url: `${BASE_URL + routePath}`,
            data: method !== 'GET' ? data : undefined,
            headers: BASE_HEADER,
            params: method === 'GET' ? data : undefined,
        })
    ).data
