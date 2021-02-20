import React, {useEffect, useState} from "react";
import './Search.css';
import cn from 'classnames'
import ReactDadataBox from "react-dadata-box";
import {choose, getWeatherInCity} from "../../../Redux/weatherCitySlice";
import {connect, useDispatch} from "react-redux";


function Search(props) {

    const [suggestionOpen, setSuggestionOpen] = useState('')

    const {className, isDarkMode, choose, ...input} = props;
    const token = '9e301eb40c65b7139ac2be7fec19e0d4bdc53eac'

    const query = {
        locations: [{"country": "*"}],
        from_bound: {value: "city"},
        restrict_value: false,
        to_bound: {value: "settlement"}
    }

    const dispatch = useDispatch()
    const localChoose = (e) => {
        if (!(e.value === '')) {
            dispatch(choose(e))
        }
    }
    return (<ReactDadataBox payloadModifier={query}
                            token={token}
                            type={'address'}
                            allowClear={false}
                            showNote={false}
                            allowCustomValue={true}
                            className={cn({
                                // "Search__input":true,
                                "Search": true,
                                "Search--darkMode": isDarkMode,
                                "Search--disabled": props.disabled,
                            }, className)}
                            placeholder='Search...'
                            onChange={(e) => {
                                setSuggestionOpen('')
                                localChoose(e)
                            }}
                            customStyles={{
                                'react-dadata__suggestion': 'custom-suggestion',
                                'react-dadata__suggestions': 'position-suggestions',
                            }}
                            customInput={({onChange, value, ...props}) => (
                                <input
                                    {...props}
                                    autoComplete="on"
                                    className={'Search__input'}
                                    type="search"
                                    onChange={e => {
                                        setSuggestionOpen(e.target.value)
                                        onChange(e)
                                    }}
                                    placeholder='Search...'
                                    value={suggestionOpen}
                                    {...input}
                                />
                            )}/>

    )
}

export default connect(null, {choose})(Search)
