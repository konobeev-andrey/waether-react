import React, {useEffect, useState} from 'react';

const Item = (props) => {
    const [icon, setIcon] = useState('')
    useEffect(() => {
        import (`../../image/IconWeather/${props.iconCode}.png`).then((icon) => setIcon(icon.default))
    }, [props.iconCode])

    return (
        <div className="item">
            <p className='item__time'>{props.time}</p>
            <div className="wrapperImg"><img src={icon} alt="Icon"/></div>
            <p className='item__temperature'>{props.temp}°</p>
        </div>
    )
}

export default Item;