import {Header} from "../../components/Header/Header.jsx";


export function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <p>Hello {localStorage.getItem("email")}</p>
        </div>
    )
}