import React, { useEffect, useState } from 'react'
import "./Dropdown.css"

const DropDown = ({ placeholder, options }) => {

    const [selectedValue, setSelectedValue] = useState(null)
    const [show, setShow] = useState(false)
    // useEffect(() => {
    //     const hanndler = () => setShow(false)

    //     window.addEventListener("click", hanndler)

    //     return
    // })

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue.label
        }
        return placeholder;
    }

    const handleInputClick = () => {
        setShow(!show)
    }

    const onItemClick = (val) => {
        setSelectedValue(val)
        setShow(false)
    }

    return (
        <>
            <div className="dropdown-container" >
                <div className="dropdown-input" onClick={handleInputClick}>
                    <div className="dropdown-selected-value">
                        {getDisplay()}
                    </div>
                </div>
            </div>
            {show &&
                options.map((val, index) => {
                    return <div onClick={() => onItemClick(val)}>{val.label}</div>
                })
            }
        </>
    )
}

export default DropDown