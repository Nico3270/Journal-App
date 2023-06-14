import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result); //Obtener las credenciales
        const user = result.user;
        const {email, displayName, photoURL, uid } = user;
        return {
            ok:true,
            displayName, email, photoURL, uid
        }
        
    } catch (error) {
        console.log(error);
        const errorMessage = error.message;
        return {ok:false, errorMessage}
    }
}