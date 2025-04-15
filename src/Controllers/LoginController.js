import { getAuth } from "firebase-admin/auth"

export const LoginS7V = async(req,res) => {
    try {
        const {email, password} = req.body


        const credentials = await getAuth().getUserByEmail(email, password)
        // el frontend en este caso se debe encargar de validar la contraseña🔴🔴
        if(!credentials){
            return res.status(400).json({message: "usuario no encontrado"})
        }
        res.status(200).json({message: "usuario logueado exitosamente"})
    } catch (error) {
        res.status(500).json({message: "error en el servidor" + error})
    }
}