import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';
import "../firebase/firebase"

interface LoginInputs {
  email: string;
  password: string;
}

interface UseLoginReturn {
  loading: boolean;
  error: firebase.auth.AuthError | undefined;
  login: (inputs: LoginInputs) => Promise<boolean>;
}

const useLogin = (): UseLoginReturn => {
  const [
    signInWithEmailAndPassword,
    ,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const loginUser = useAuthStore((state) => state.login);

  const login = async (inputs: LoginInputs): Promise<boolean> => {
    if (!inputs.email || !inputs.password) {
      alert('Please fill all the fields');
      return false;
    }

    try {
      const userData = await signInWithEmailAndPassword(inputs.email, inputs.password);

      if (userData) {
        const docRef = doc(firestore, 'users', userData.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem('user-info', JSON.stringify(docSnap.data()));
        loginUser(JSON.stringify(docSnap.data()));
        return true;
      }
    } catch (error) {
      alert((error as Error).message);
      return false;
    }

    return false;
  };

  return { loading, error, login };
};

export default useLogin;