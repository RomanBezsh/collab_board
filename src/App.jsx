import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/Auth/AuthPage.jsx";
import { RegisterPage } from "./pages/Register/RegisterPage.jsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.jsx";
import { Layout } from "./components/Layout/Layout.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    /* Страницы БЕЗ хедера */
                    <Route path="/" element={<AuthPage />} />
                    <Route path="/sign-up" element={<RegisterPage />} />

                    /* Страницы С хедером */
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />

                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;