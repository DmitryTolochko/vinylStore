import { Link, useParams } from "react-router-dom";
import BackButton from "../../components/back_button/BackButton";
import arrow from '../../images/right-arrow.svg';

export default function ConversionPage () {
    const params = useParams();
    return (
        <div className="page-n-wrapper">
            <BackButton/>
            <div className="page-n">
                <h2>Спасибо за заказ!</h2>
                <p>Номер вашего заказа: {params.id}</p>
                <Link to='/catalogue'  className='main-button'>Перейти в каталог<img alt='arrow' src={arrow}></img></Link>
            </div>
        </div>
    )
}