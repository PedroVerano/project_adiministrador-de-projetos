import { Link } from "react-router-dom";

import Container from "./Container";

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'


function Navbar() {
    return(
        <nav>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="logo de moeda"></img>
                </Link>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/empresa">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/novoprojeto">Novo Projeto</Link>
                    </li>           
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;