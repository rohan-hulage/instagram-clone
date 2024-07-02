import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {doc, setDoc} from 'firebase/firestore';
import useShowToast from "./useShowToast";

const useSignup = () => {
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const showToast = useShowToast();  

    const signup = async (inputs: { email: string; password: string; username: string; fullName: string; }) => {
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
            showToast("Error", "Please fill the all the fields.", "error");
            return;
        }
        

        try {
            const newUser = await createUserWithEmailAndPassword (inputs.email, inputs.password);
            if(!newUser && error){
                showToast("Error", "Already used", "error");
                return
            }
            if(newUser){
                const userDoc = {
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullName:inputs.fullName,
                    bio:"",
                    profilePictureURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now()
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
            }
        } catch (error) {
            showToast("Error", "error", "error");
        }
    }   
      
  return {loading, error, signup}
}

export default useSignup
