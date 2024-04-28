import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjetoForm.module.css';

function ProjetoForm({btnText}) {
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
            
            <Select name='categotia_id' text='Selecione a categoria' />
            <SubmitButton text={btnText}/>
        </div>
    )
}

export default ProjetoForm;