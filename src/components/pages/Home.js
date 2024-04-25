import styles from './Home.module.css';
import LogoPorco from '../../img/savings.svg'
function Home () {
    return(
        <section>
            <h1>
                Bem vindo ao <span>Coats</span>
            </h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <a href="/">Criar Projeto</a>
            <img src={LogoPorco} alt="Cofrinho de porco com um homem cavalgando. Coats"></img>
        </section>
    )
}
export default Home;