import './Filters.css'
import {useState} from "react";


export default function Filters(){
    const [minPrice, setMinPrice] = useState(0)
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
}

return(
        <div>
            <div>
                <label htmlFor="price">Price</label>
                <input onChange={handleChangeMinPrice} min={'0'} max={'1000'} type="range" id={'price'}/>
                <span>{minPrice}</span>
            </div>
            <div>
<               label htmlFor="category">Category</label>
                <select id={'category'}>
                    <option value={'all'}>All</option>
                    <option value={'makeup'}>makeup</option>
                    <option value={'vegetables'}>vegetables</option>
                    <option value={'seafood'}>seafood</option>
                </select>
            </div>
        </div>

    )
}