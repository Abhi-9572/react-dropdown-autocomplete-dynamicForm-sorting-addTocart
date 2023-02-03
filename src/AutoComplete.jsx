import React, { useState } from 'react'

const AutoComplete = () => {
    var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria"]
    const [searchCountry, setSearchCountry] = useState([])


    const handleChange = (e) => {
        if(!e.target.value)
        {
            setSearchCountry([])
        }
        else{
            let filterCountry=country_list.filter((val,index)=>
            {
                return val.toLowerCase().includes(e.target.value)
            })
            setSearchCountry(filterCountry)
        }
       
    }
    return (
        <>
        <input type="text" onChange={handleChange} />
        <div>
            {
                searchCountry.map((val,index)=>
                {
                    return <h4>{val}</h4>
                })
            }
        </div>
        </>
    )
}

export default AutoComplete