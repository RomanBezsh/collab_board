import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/Auth/AuthPage.jsx";
import { RegisterPage } from "./pages/Register/RegisterPage.jsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.jsx";
import { Notifications } from "./pages/Notifications/Notifications.jsx";
import { Layout } from "./components/Layout/Layout.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                    <Route path="/sign-up" element={<RegisterPage />} />


                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/notifications" element={<Notifications />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;