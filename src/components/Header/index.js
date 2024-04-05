import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <header className='header' data-aos="fade-up" data-aos-duration="2500">
            <h1>MyFavorites<span>.</span></h1>
        </header>
    );
}

export default Header;