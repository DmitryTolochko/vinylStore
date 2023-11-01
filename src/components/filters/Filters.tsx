import { useState } from 'react';
import arrow from '../../images/arrow-v2.svg';
import uncheck from '../../images/choice-undone.svg';
import check from '../../images/choice-done.svg';

export default function Filters (props) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);
    const [genres, setGenres] = useState([] as string[]);

    const useFilters = () => {
        props.filterFunc(minPrice, maxPrice, genres);
    }

    const handleGenreCheck = (id: string) => {
        let el = document.getElementById(id);
        let newGenres = genres;
        if (genres.filter(e => e == id).length == 0) {
            newGenres.push(id);
            el.className = 'genre checked-genre';
        }
        else {
            newGenres = newGenres.filter(e => e != id);
            el.className = 'genre';
        }
        setGenres(newGenres);
    }

    return (
        <div className="filters">
            <h3>Фильтры</h3>
            <h4>Цена</h4>
            <div className="price-range">
                <input onChange={(e) => setMinPrice(e.target.value == '' ? 0 : parseInt(e.target.value))}/>-
                <input onChange={(e) => setMaxPrice(e.target.value == '' ? 10000000 : parseInt(e.target.value))}/>
            </div>
            <div className="price-range">
                <p>От</p>
                <p>До</p>
            </div>

            <h4>Жанр</h4>
            <ul className="genres">
                <a onClick={() => handleGenreCheck('rock')} id='rock' className='genre'>
                    Классический Рок
                    <img alt='check' src={uncheck}/>
                </a>
                <a onClick={() => handleGenreCheck('jazz')} id='jazz' className='genre'>
                    Джаз
                    <img alt='check' src={uncheck}/>
                </a>
                <a onClick={() => handleGenreCheck('electronic')} id='electronic' className='genre'>
                    Электроника
                    <img alt='check' src={uncheck}/>
                </a>
                <a onClick={() => handleGenreCheck('funk')} id='funk' className='genre'>
                    Фанк
                    <img alt='check' src={uncheck}/>
                </a>
                <a onClick={() => handleGenreCheck('pop')} id='pop' className='genre'>
                    Поп/Диско
                    <img alt='check' src={uncheck}/>
                </a>
            </ul>

            <button className="filters-button" onClick={useFilters}>Показать результаты<img alt='arrow' src={arrow}/></button>
        </div>
    )
}