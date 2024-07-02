import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { AuthError } from 'firebase/auth';

interface SignupInputs {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

interface UseSignupReturn {
  loading: boolean;
  error: AuthError | undefined;
  signup: (inputs: SignupInputs) => Promise<boolean>;
}

const useSignup = (): UseSignupReturn => {
  const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);

  const signup = async (inputs: SignupInputs): Promise<boolean> => {
    if (!inputs.email || !inputs.password || !inputs.fullName || !inputs.username) {
      alert('Please fill all the fields');
      return false;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(inputs.email, inputs.password);
      if (userCredential) {
        const userDoc = doc(firestore, 'users', userCredential.user.uid);
        await setDoc(userDoc, {
          fullName: inputs.fullName,
          username: inputs.username,
          email: inputs.email,
          createdAt: new Date(),
        });
        return true;
      }
    } catch (error) {
      alert((error as AuthError).message);
      return false;
    }

    return false;
  };

  return { loading, error, signup };
};

export default useSignup;