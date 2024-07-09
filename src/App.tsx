
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"
import PageLayout from "./layouts/PageLayout/PageLayout"
import ProfilePage from "./pages/ProfilePage/ProfilePage"

function App() {
  const { authUser } = useAuthState(auth);
  
  return (
    <PageLayout>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/:username" element={<ProfilePage />} />
     </Routes>
    </PageLayout>
  )
}

export default App
