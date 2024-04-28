import ProjetoForm from '../projeto/ProjetoForm';
import styles from './NovoProjeto.module.css'
function NovoProjeto () {
    return(
        <div className={styles.container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois então adicionar os serviços</p>
            <ProjetoForm btnText='Criar Projeto' />
        </div>
    )
}

export default NovoProjeto;