import './Films.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Films = (props) => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className='film' data-aos="fade-down" data-aos-duration="2500">
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