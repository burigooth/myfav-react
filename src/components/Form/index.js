import './Form.css';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [genre, setGenres] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    const whenSave = (e) => {
        e.preventDefault()
        props.filmSave({
            name: name,
            genre: genre,
            type: type,
            image: image,
        })

        setName('');
        setGenres('');
        setType('');
        setImage('');
    }

    return(
        <section className='form'>
            <h2> Preencha os dados abaixo. </h2>
            <form onSubmit={whenSave}>
            <Input
            mandatory={true}
            label='Nome'
            placeholder='Digite o nome do filme, série, anime ou jogo.'
            value={name}
            whenChanging={value => setName(value)}
            />

            <Input
            mandatory={true}
            label='Gênero'
            placeholder='Digite o gênero do filme, série, anime ou jogo.'
            value={genre}
            whenChanging={value => setGenres(value)}
            />

            <Input
            mandatory={true}
            label='Imagem'
            placeholder= 'Digite a URL da imagem do filme, série, anime ou jogo.'
            value={image}
            whenChanging={value => setImage(value)}
            />

            <Dropdown
            label="Tipo" 
            itens={props.types} 
            value={type}
            whenChanging={value => setType(value)}
            /> 

            <Button>
                Criar Card    
            </Button> 
            </form>
        </section>
    )
}

export default Form;