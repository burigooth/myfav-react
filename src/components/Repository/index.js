import './Repo.css';
import { Github } from 'lucide-react';

const Repository = () => {
    return (
        <div className='container'>
            <a href='https://github.com/burigooth/myfav-react.git' target='_blank'>
                <div className='repository'>
                    <Github className='github' color='white'/>
                </div>
            </a>
        </div>
    )
};

export default Repository;
