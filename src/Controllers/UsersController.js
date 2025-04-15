import { db, auth } from "../Database/Firebase.js";

// FUNCION CON CONTROLADOR SOLAMENTE PARA LA PARTE DE REGISTRO

const UserLocal = async(email, password, name)=> {

    const credentiale = await auth.createUser({
        email,
        password,
        displayName: name
      });
    const IudUser = credentiale.uid

    const UserRef = db.collection('users').doc(IudUser)
    await UserRef.set({
        uid: IudUser,
        name,
        email,
        authProvider: "local",  
        isPremium: false,
        premiumSince: null,
        premiumUntil: null,
        subscriptionPlan: null,
        paymentProvider: null,
        paymentStatus: "inactive"
      });
    
      return IudUser;
    }

    const UserGoogle = async (uid, name, email) => {
        const userRef = db.collection("users").doc(uid);
      
        await userRef.set({
          uid,
          name,
          email,
          authProvider: "google",  
          isPremium: false,
          premiumSince: null,
          premiumUntil: null,
          subscriptionPlan: null,
          paymentProvider: null,
          paymentStatus: "inactive"
        });
      
        return uid;
      };



      export const UserRegister = async(req, res) => {
        try {
            const { name, email, password, uid, authProvider } = req.body;
            let IudUser

            if(authProvider === "local"){
                if(!password){
                    return res.status(400).json({message:" la contraseña es obligatoria"})
                }

                IudUser = await UserLocal(email, password, name)
            }
            else if (authProvider === "google"){
                if(!uid){
                    return res.status(400).json({message:" El uid es obligatorio"})
                }

                IudUser = await UserGoogle(uid, name, email)
            } else {
                return res.status(400).json({message: "Autenticacion no valida"})

            }

            res.status(200).json({message: "Usuario registrado correctamente"})
        } catch (error) {
            res.status(500).json({message: "error en el servidor" + error})
        }
      }

    // HASTA ACA ES☝️





