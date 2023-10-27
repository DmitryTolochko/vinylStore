import map from '../../images/maps.jpg';
import vk from '../../images/vk_icon.png';
import youtube from '../../images/youtube_icon.png';
import tg from '../../images/tg_icon.png';

export default function Footer () {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <h2 className="footer-h">Где мы находимся?</h2>
                <img alt='map' src={map} className='footer-map'></img>
                <span className='footer-text'>
                    <span>
                        <h3>Адрес:</h3>
                        <p>г.Екатеринбург ул. Малышева, 36</p>
                    </span>
                    <span>
                        <h3>Телефон:</h3>
                        <p>+7 990 999 99 99</p>
                    </span>
                    <span>
                        <h3>Почта:</h3>
                        <p>VinylIsTheAnswer@gmail.com</p>
                    </span>
                   
                    <h3>Соцсети:</h3>

                    <div className='ground-wrapper'>
                        <div className='ground'>
                            <a><img alt='vk' src={vk}></img></a>
                            <a><img alt='youtube' src={youtube}></img></a>
                            <a><img alt='tg' src={tg}></img></a>
                        </div>
                        <p className='shop-name-footer'>VINYL IS THE ANSWER</p>
                    </div>
                </span>
                
            </div>
        </div>
    )
}