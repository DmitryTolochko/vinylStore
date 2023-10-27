import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/back-arrow.svg';

class BackButton extends React.Component {
    render() {
        return (
            <Link to='javascript:history.back()'>
                <button className='back-button'><img alt='back' src={arrow}/>Назад</button>
            </Link> 
        )
    }
}

export default BackButton