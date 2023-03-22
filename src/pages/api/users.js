import {getUsers} from "@/database/users";

export default async function handler(req, res) {
    const result = await getUsers()
    console.log(result)
    res.status(200).json(result)
}