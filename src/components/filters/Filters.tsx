import arrow from '../../images/arrow-v2.svg';

export default function Filters () {
    return (
        <div className="filters">
            <h3>Фильтры</h3>
            <h4>Цена</h4>
            <div className="price-range">
                <input/>-<input/>
            </div>
            <div className="price-range">
                <p>От</p>
                <p>До</p>
            </div>

            <h4>Жанр</h4>
            <ul className="genres">
                <a>Классический Рок<input type="checkbox"/></a>
                <a>Джаз<input type="checkbox"/></a>
                <a>Электроника<input type="checkbox"/></a>
                <a>Фанк<input type="checkbox"/></a>
                <a>Поп/Диско<input type="checkbox"/></a>
            </ul>

            <button className="filters-button">Показать результаты<img alt='arrow' src={arrow}/></button>
        </div>
    )
}