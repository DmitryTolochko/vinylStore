import Filters from "../../components/filters/Filters";
import VinylCard from "../../components/vinyl-card/VinylCard";
import defaultImage from '../../images/default-image.jpg';
import arrow from '../../images/arrow-down.svg'
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Catalogue () {
    const data = useLoaderData() as [];
    const [items, setItems] = useState(data as any);
    const [sortDescending, setSortDirection] = useState(true);
    const [isSorted, setSort] = useState(false);

    const handleSortByPrice = () => {
        const sortedItems = [...items].sort((a, b) => {
            if (a[10] > b[10]) {
                return 1;
            } 
            else if (a[10] < b[10]) {
                return -1;
            } 
            else {
                return 0;
            }
        });

        if (sortDescending) {
            sortedItems.reverse()
            setSortDirection(!sortDescending);
        }
        else {
            setSortDirection(!sortDescending);
        }

        setSort(true);
        setItems(sortedItems);
    };

    const filterFunc = (minPrice: number, maxPrice: number, genres: []) => {
        let filteredItems = data.filter(item => item[10] >= minPrice && item[10] <= maxPrice);
        if (genres.length != 0) {
            filteredItems = filteredItems.filter(item => genres.includes(item[8]));
        }
        
        setItems(filteredItems);
    }
    
    return (
        <div className="catalogue-wrapper">
            <h2>Каталог</h2>
            <div className="catalogue">
                <Filters filterFunc={filterFunc} />
                <div className="right-side-catalogue">
                    <span>
                        <h3>Результаты поиска</h3>
                        <button className={`price-button ${isSorted ? 'sort-on' : ''}`} 
                            onClick={handleSortByPrice}>
                                По цене
                                <img alt='arrow' className={`${sortDescending ? 'arrow-upside' : ''}`} src={arrow}/>
                        </button>
                    </span>
                    {items.length > 0 ? 
                        (<div className="vinyls">
                            {items.map(el => (
                                <div key ={el[0]}><VinylCard id={el[0]} image={defaultImage} artist={el[1]} album={el[2]} price={el[10] + ' Р.'}/></div>
                            ))}
                        </div>) :
                        (<div className="exception-catalogue">
                            <h2>Хмм, ничего не нашлось.</h2>
                            <p>Попробуйте изменить фильтры</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}   