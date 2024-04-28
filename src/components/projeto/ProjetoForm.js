import Input from '../form/Input';
import styles from './ProjetoForm.module.css';

function ProjetoForm() {
    return(
        <div className={styles.form}>
            <Input 
                type='text' 
                name='name' 
                text='Nome do projeto'
                placeholder='Insira o nome do projeto' />
            <Input 
                type='number' 
                name='budget' 
                text='Orçamento do projeto'
                placeholder='Insira o orçamento do projeto' />
        </div>
    )
}

export default ProjetoForm;