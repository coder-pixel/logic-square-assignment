import React, { useContext, useEffect } from 'react'
import { SiteContext } from '../ContextProvider'

const SearchBar = () => {
    const {searchVal, setSearchVal} = useContext(SiteContext)   

    return (
        <div className="container-fluid">
            <input type="text" className="form-control-lg w-100 my-3" id="" placeholder="Enter"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
            />
        </div>
    )
}

export default SearchBar