import Filters from "../../components/filters/Filters";
import VinylCard from "../../components/vinyl-card/VinylCard";
import defaultImage from '../../images/default-image.jpg';
import arrow from '../../images/arrow-down.svg'

export default function Catalogue () {
    return (
        <div className="catalogue-wrapper">
            <h2>Каталог</h2>
            <div className="catalogue">
                <Filters/>
                <div className="right-side-catalogue">
                    <span>
                        <h3>Результаты поиска</h3>
                        <button className="price-button">По цене<img alt='arrow' src={arrow}/></button>
                    </span>

                    <div className="vinyls">
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                    </div>
                </div>
            </div>
        </div>
    )
}