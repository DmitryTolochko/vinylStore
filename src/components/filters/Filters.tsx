import { useState } from 'react';
import arrow from '../../images/arrow-v2.svg';
import uncheck from '../../images/choice-undone.svg';
import check from '../../images/choice-done.svg';

export default function Filters (props) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);
    const [genres, setGenres] = useState([] as string[]);
    const allGenres = {
        'rock': 'Классический Рок', 
        'jazz': 'Джаз', 
        'electronic': 'Электроника', 
        'funk': 'Фанк', 
        'pop': 'Поп/Диско'
    };

    const useFilters = () => {
        props.filterFunc(minPrice, maxPrice, genres);
    }


    const handleGenreCheck = (id: string) => {
        setGenres(prevGenres => {
            if (prevGenres.includes(id)) {
                return prevGenres.filter(genre => genre !== id);
            } else {
                return [...prevGenres, id];
            }
        });
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
                {Object.keys(allGenres).map(el => 
                    <li key={el}>
                        <a className={(genres.includes(el) ? 'genre checked-genre' : 'genre')} 
                        onClick={() => handleGenreCheck(el)} id={el}>
                            {allGenres[el]}
                            <img alt='check' src={genres.includes(el) ? check : uncheck}/>
                        </a>
                    </li>
                )}

            </ul>

            <button className="filters-button" onClick={useFilters}>Показать результаты<img alt='arrow' src={arrow}/></button>
        </div>
    )
}