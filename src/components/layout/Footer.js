import {FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return(
        <footer>
            <ul>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaGithub />
                </li>
            </ul>
            <p>
                <span>Costs</span> &copy; 2021
            </p>
        </footer>
    )
}

export default Footer;