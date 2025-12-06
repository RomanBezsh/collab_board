import './App.css'
import { AuthPage } from "./pages/Auth/AuthPage.jsx";
import { RegisterPage } from "./pages/Register/RegisterPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
