import React from 'react';
import style from './search.module.css'
import ReactDadataBox from 'react-dadata-box';

const Search = (props) => {
    return (
        <div className={style.div_search}>
            <ReactDadataBox placeholder='Search...'/>
        </div>
    );
};


export default Search;
