import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        
        onFormSubmit(searchTerm);
    };

    return (
            <div className="ui segment search-bar">
                <form onSubmit={onSubmit} className="ui form">
                    <div className="field">
                        <label>Type search term and press enter:</label>
                        <input 
                            type='text' 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)}
                            />
                    </div>
                </form>
            </div>
        );
    
};

export default SearchBar;
