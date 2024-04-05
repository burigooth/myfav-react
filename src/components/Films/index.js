import './Films.css';

const Films = (props) => {
    return (
        <div className='film'>
            <div className='image'>
            <img src={props.imagem} alt={props.nome}/> 
            </div>

            <div className='infos'>
                <h4>{props.name}</h4>
                <h5>{props.genre}</h5>
            </div>
        </div>
    );
}


export default Films;