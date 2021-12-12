import { NextApiRequest, NextApiResponse } from 'next'
import bookFormData from './bookFormData.json'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('pedido de form: ', req.query)
    res.status(200).json(bookFormData)
}
