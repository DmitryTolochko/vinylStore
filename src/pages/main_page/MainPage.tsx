import ConditionBox from '../../components/condition_box/ConditionBox';
import cover from '../../images/main-cover.jpg';
import arrow from '../../images/right-arrow.svg';
import MT from '../../images/mint.jpg';
import VinylCard from '../../components/vinyl-card/VinylCard';
import defaultImage from '../../images/default-image.jpg';
import { Link } from 'react-router-dom';

export default function MainPage () {
    return (
        <div className='main-wrapper'>
            <div className="main">
                <span className="main-text">
                    <h1>Найдите свой звук с нами!</h1>
                    <p>Лучший выбор виниловых пластинок онлайн</p>
                    <Link to='/catalogue'  className='main-button'>Перейти в каталог<img alt='arrow' src={arrow}></img></Link>
                </span>
                <img alt='cover' src={cover}></img>
            </div>

            <div className='new-albums-wrapper'>
                <div className='new-albums'>
                    <h2>Новинки</h2>
                    <div className='cond-boxes'>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                        <VinylCard image={defaultImage} artist='Madonna' album='Ray of light' price='3500Р.'/>
                    </div>
                </div>
            </div>

            <div className='vinyl-classification'>
                <h2>Как оценить винил?</h2>
                <span className='classif-text'>
                    <p>Существует система оценки виниловых пластинок, 
                        представляющая из себя буквенные обозначения.</p>

                    <p>Эта система применима отдельно к самой пластинке и к конверту</p>
                </span>

                <div className='cond-boxes'>
                    <ConditionBox image={MT} title={'Mint (MT) '} text={'Пластинка или конверт в идеальном состоянии, без дефектов и видимых следов эксплуатации.'}/>
                    <ConditionBox image={MT} title={'Mint (MT) '} text={'Пластинка или конверт в идеальном состоянии, без дефектов и видимых следов эксплуатации.'}/>
                    <ConditionBox image={MT} title={'Mint (MT) '} text={'Пластинка или конверт в идеальном состоянии, без дефектов и видимых следов эксплуатации.'}/>
                    <ConditionBox image={MT} title={'Mint (MT) '} text={'Пластинка или конверт в идеальном состоянии, без дефектов и видимых следов эксплуатации.'}/>
                    <ConditionBox image={MT} title={'Mint (MT) '} text={'Пластинка или конверт в идеальном состоянии, без дефектов и видимых следов эксплуатации.'}/>
                    <ConditionBox image={MT} title={'Mint (MT) '} text={'Пластинка или конверт в идеальном состоянии, без дефектов и видимых следов эксплуатации.'}/>
                    <ConditionBox image={MT} title={'Mint (MT) '} text={'Пластинка или конверт в идеальном состоянии, без дефектов и видимых следов эксплуатации.'}/>
                    <ConditionBox image={MT} title={'Mint (MT) '} text={'Пластинка или конверт в идеальном состоянии, без дефектов и видимых следов эксплуатации.'}/>
                </div>

                <p className='additional-main'>Мы принимаем и продаем только виниловые пластинки в состоянии от MT до VG. 
                        Если у вас есть пластинки, которые вы хотели бы продать нам, напишите к нам 
                        на почту или позвоните по телефону</p>
            </div>
        </div>
    )
}