import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Clans from "./pages/Clans"
import Disciplinas from "./pages/Disciplinas"

const Rotas = () => {

    return (

        <BrowserRouter basename="/Ficha-Digital/">
            <Routes>
                <Route Component={Home} path="" />
                <Route Component={Clans} path="/clans" />
                <Route Component={Disciplinas} path="/Disciplinas" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas