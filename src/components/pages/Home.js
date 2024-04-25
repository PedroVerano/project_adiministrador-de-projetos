import styles from './Home.module.css';
import LogoPorco from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';
function Home () {
    return(
        <section className={styles.home_container}>
            <h1>
                Bem vindo ao <span>Coats</span>
            </h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to='/novoprojeto' text='Criar Projeto' />
            <img src={LogoPorco} alt="Cofrinho de porco com um homem cavalgando. Coats"></img>
        </section>
    )
}
export default Home;