import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";


const useLogin = () => {
    const [
        signInWithEmailAndPassword,
        ,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const loginUser = useAuthStore((state) => state.login);

    const login = async(inputs) => {
        if(!inputs.email || !inputs.password){
            alert("Please fill all the fields");
            return
        }

        try {
            const userData = await signInWithEmailAndPassword(inputs.email, inputs.password);

            if(userData) {
                const docRef = doc(firestore, "users", userData.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
                loginUser(JSON.stringify(docSnap.data()));
            }
            
        } catch (error) {
            alert(error);
        }
    }

    return {loading, error, login}


}

export default useLogin
