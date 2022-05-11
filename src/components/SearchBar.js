import React from "react";

class SearchBar extends React.Component {
    state = { searchTerm: '' };
    onInput = event => {
        this.setState({ searchTerm: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Type search term and press enter:</label>
                        <input 
                            type='text' 
                            value={this.state.searchTerm} 
                            onChange={this.onInput}
                            />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;
