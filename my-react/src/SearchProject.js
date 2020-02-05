import React from 'react';

const SearchProject=({searchChange})=>{
    return(<div>
        <input  type ='search'placeholder="Search for skills"
        onChange={searchChange}
        />
        
    </div>
    );
}

export default SearchProject;