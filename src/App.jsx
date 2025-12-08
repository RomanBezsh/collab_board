import './App.css'
import { AuthPage } from "./pages/Auth/AuthPage.jsx";
import { RegisterPage } from "./pages/Register/RegisterPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Dashboard} from "./pages/Dashboard/Dashboard.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/sign-up" element={<RegisterPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
