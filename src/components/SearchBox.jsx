import React from "react";

const SearchBox = ({searchChange}) => (
    <div className="pa2" >
        <input onChange={searchChange} type="text" className="pa3 ba b--green bg-lightest-blue" placeholder="Search Robots"/>
    </div>
);
    
   
export default SearchBox;