import { Link } from "react-router-dom";
import BackButton from "../../components/back_button/BackButton";
import arrow from '../../images/right-arrow.svg';

export default function Page404 () {
    return (
        <div className="page-n-wrapper">
            <BackButton/>
            <div className="page-n">
                <h2>Упс! Такой страницы мы не нашли!</h2>
                <p>Попробуйте перейти на любую другую доступную страницу</p>
                <Link to='/catalogue'  className='main-button'>Перейти в каталог<img alt='arrow' src={arrow}></img></Link>
            </div>
        </div>
    )
}