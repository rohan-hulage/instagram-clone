import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"

function App() {
  const { authUser } = useAuthState(auth);
  
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
     </Routes>
    </>
  )
}

export default App
