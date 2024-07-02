import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {doc, setDoc} from 'firebase/firestore';

const useSignup = () => {
    
    const [
        createUserWithEmailAndPassword,
        loading,
        ,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
 
    const signup = async (inputs) => {
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
            alert("Please fill al the fields");
            return
        }
        

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser && error){
                alert(error);
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
          console.log(error);
        }
    }   
      
  return {loading, error, signup}
}

export default useSignup