



export function Dashboard() {
    return (
        <div>
            <p>Hello {localStorage.getItem("email")}</p>
        </div>
    )
}