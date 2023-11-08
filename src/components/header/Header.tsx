import search from '../../images/search_icon.svg';
import phone from '../../images/phone_icon.svg';
import menu from '../../images/menu_icon.svg';
import { useEffect, useState } from 'react';
import Menu from '../menu/Menu';
import VinylCardSmall from '../vinyl-card/VinylCardSmall';
import defaultImage from '../../images/default-image.jpg';
import { Outlet, useLoaderData } from "react-router-dom";

export default function Header () {
    const data = useLoaderData() as [string, any][];
    const [menuVisibility, setVisibility] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleMenuButtonClick = () => {
        setVisibility((menuVisibility) => !menuVisibility);
    };

    useEffect(() => {
        setSearchResult(searchResult => searchResult = []);
        if (searchQuery !== '') {
            let filteredByArtist = data.filter(e => e[1].toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 || (searchQuery.toLowerCase().includes(e[1].toLowerCase())));
            let filteredByAlbum = data.filter(e => e[2].toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 || (searchQuery.toLowerCase().includes(e[2].toLowerCase())));
            let result = filteredByAlbum.concat(filteredByArtist);
            
            for (var i = 0; i < result.length; ++i) {
                for (var j = i + 1; j < result.length; ++j) {
                    if (result[i] === result[j])
                        result.splice(j--, 1);
                }
            }
            
            setSearchResult(searchResult => searchResult = result);
        }
    }, [searchQuery])

    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                    <button className='menu-button' onClick={handleMenuButtonClick}><img alt='menu' src={menu}></img>Меню</button>
                    <input className="search" placeholder='Поиск' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button type='submit' className='search-button'><img alt='search' src={search}></img></button>
                    <p className="shop-name">VINYL IS THE ANSWER</p>
                    <img alt='phone' src={phone} className='phone'></img>
                    <p>+7 990 999 99 99</p>
                </div>
            </div>
            <Menu menuVisibility={menuVisibility}/>

            {searchResult.length == 0 ? 
            (<></>) :
            ( 
            <div className={`search-result-wrapper ${menuVisibility ? 'up-search' : ''}`}>
                <div className='search-result'>
                    <h2>Результаты запроса</h2>
                    <div className='search-result-list'>
                        {searchResult.slice(0, 6).map(el => (
                            <div key ={el[0]}>
                                <VinylCardSmall id={el[0]} image={defaultImage} artist={el[1]} album={el[2]} price={el[10] + ' Р.'}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>)}

            <Outlet/>
        </>
    )
}