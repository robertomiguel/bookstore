import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=quilting'
    )
    res.status(200).json(await data.json())
}
