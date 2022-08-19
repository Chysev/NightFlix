import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string
    id: string
}

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        id: "1",
        name: 'NightFlix'
    })
}