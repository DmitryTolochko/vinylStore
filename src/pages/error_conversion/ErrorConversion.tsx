import { Link, useParams } from "react-router-dom";
import BackButton from "../../components/back_button/BackButton";
import arrow from '../../images/right-arrow.svg';

export default function ErrorConversion () {
    return (
        <div className="page-n-wrapper">
            <BackButton/>
            <div className="page-n">
                <h2>Упс! Что-то пошло не так...</h2>
                <p>Попробуйте сделать заказ еще раз чуть позже</p>
                <Link to='/catalogue'  className='main-button'>Перейти в каталог<img alt='arrow' src={arrow}></img></Link>
            </div>
        </div>
    )
}