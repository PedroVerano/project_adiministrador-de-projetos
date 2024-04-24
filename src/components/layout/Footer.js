import {FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <Link to='https://www.facebook.com/pedro.verano.73'  target="_blank"> <FaFacebook /> </Link>
                </li>
                <li>
                    <Link to='https://www.instagram.com/peeverano/'  target="_blank"> <FaInstagram /> </Link>   
                </li>
                <li>
                    <Link to=''  target="_blank"> <FaLinkedin /> </Link> 
                </li>
                <li>
                    <Link to='https://github.com/PedroVerano'  target="_blank"> <FaGithub /> </Link> 
                </li>
            </ul>
            <p className={styles.copy}>
                <span>Costs</span> &copy; 2021
            </p>
        </footer>
    )
}

export default Footer;