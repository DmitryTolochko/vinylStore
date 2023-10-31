import BackButton from "../../components/back_button/BackButton";
import defaultImage from '../../images/default-image.jpg';

export default function ItemPage () {
    return (
        <div className="item-wrapper">
            <BackButton/>
            <div className="item">
                <img alt='cover' src={defaultImage}></img>
                <div className="item-text">
                    <h2>Madonna - Ray of light</h2>
                    <h3>3500 Р.</h3>
                    <span className="item-text-line">
                        <p>Состояние пластинки: </p>
                        <p>Mint</p>
                    </span>
                    <span className="item-text-line">
                        <p>Состояние обложки:  </p>
                        <p>Near Mint</p>
                    </span>
                    <span className="item-text-line">
                        <p>Лейбл: </p>
                        <p>Warner Bros.</p>
                    </span>
                    <span className="item-text-line">
                        <p>Страна:</p>
                        <p>Англия</p>
                    </span>
                    <span className="item-text-line">
                        <p>Год выпуска:</p>
                        <p>2010</p>
                    </span>
                    <span className="item-text-line">
                        <p>Жанр:</p>
                        <p>Поп</p>
                    </span>

                    <button className="cart-button-item">В корзину</button>
                </div>
            </div>

            <div className="small-pictures">
                <img alt='cover' src={defaultImage}></img>
                <img alt='cover' src={defaultImage}></img>
                <img alt='cover' src={defaultImage}></img>
                <img alt='cover' src={defaultImage}></img>
                <img alt='cover' src={defaultImage}></img>
                <img alt='cover' src={defaultImage}></img>
            </div>
        </div>
    )
}