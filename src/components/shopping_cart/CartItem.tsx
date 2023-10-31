import defaultImage from '../../images/default-image.jpg';
import del from '../../images/delete-icon.svg';

export default function CartItem () {
    return (
        <div className="cart-item">
            <img alt='cover' src={defaultImage}></img>
            <span>
                <p>Madonna</p>
                <p>Ray of light</p>
                <p>3500 Р.</p>
            </span>
           <button><img alt='delete' src={del}></img></button>
        </div>
    )
}