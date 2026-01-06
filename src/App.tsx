import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayout from "./layouts/PageLayout/PageLayout"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"

function App() {
  const [authUser, loading] = useAuthState(auth);

  if (loading) {
    return (
      <PageLayout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          {/* Simple CSS Spinner if no component exists */}
          <div className="spinner" style={{
            border: '4px solid rgba(0, 0, 0, 0.1)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            borderLeftColor: '#09f',
            animation: 'spin 1s ease infinite'
          }}></div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
