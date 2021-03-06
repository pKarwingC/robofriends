import React from "react";

const SearchBox = ({searchchange})=> {
    return (
        <div className="pa2">
            <input 
                onChange={searchchange}
                className="pa3 ba b--green bg-lightest-blue" 
                type="text" 
                placeholder="Please enter the name">
            </input>
        </div>
    )
}

export default SearchBox