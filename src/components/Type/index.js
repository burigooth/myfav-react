import Films from '../Films';
import './Type.css';


const Type = (props) => {
    return (
        props.films.length > 0 && <section className='type'>
            <h2></h2>
            <h3>{props.name}</h3>
            <div className='films'>
                {props.films.map(film => <Films key={film.name} name={film.name} genre={film.genre} imagem={film.image} />)}
            </div>
        </section>
     );
    }

export default Type;