import { Link,Outlet } from "react-router-dom"

function HomePage(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Tela inicial</Link></li>
                    <li><Link to="/musica">Abrir músicas</Link></li>
                    <li><Link to="/playlist">Abrir playlist</Link></li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}
export default HomePage