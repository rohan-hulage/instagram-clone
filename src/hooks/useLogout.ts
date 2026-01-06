import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useAuthStore from '../store/authStore';

const useLogout = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const logoutUser = useAuthStore((state) => state.logout);
    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem("user-info");
            logoutUser();
        } catch (error) {
            console.error("Error logging out", error);
        }
    }

    return { handleLogout, loading, error };
}

export default useLogout;
