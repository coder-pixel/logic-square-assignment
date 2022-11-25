import React, { useContext, useEffect, useState } from 'react'
import { SiteContext } from '../ContextProvider'

const SortBy = () => {
    const { employees, setEmployees, isChecked, setIsChecked } = useContext(SiteContext)

    const handleOnChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className="custom-control custom-checkbox">
            <label>Sort By availablity: </label>
            <input type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default SortBy