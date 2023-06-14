import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { ArrowForwardIos } from "@mui/icons-material";

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

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {
        const respuesta = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = respuesta.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName});
        return {ok:true, uid, photoURL, email, displayName};
    } catch (error) {
        // console.log(error);

        return {ok:false, errorMessage:error.message}
    }
}

export const loginWithEmailPasword = async ({email, password}) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName} = result.user;
        return {
            ok:true,
            uid, photoURL, displayName
        }
    } catch (error) {
        console.log(error);
        return {ok:false, errorMessage:error.message};
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}