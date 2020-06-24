import React from "react";

import {Paper , TextField} from "@material-ui/core"

class SearchBar extends React.Component{

    state = {
        searchValue : "",
        searchModifier: ""
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({searchValue : event.target.value})
    }

    handleSubmit = (event) => {
        const { searchValue } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchValue);

        event.preventDefault(); //Prevents page refresh which is normal way fo resetting components

        console.log(searchValue);
    }

    render(){
        return(
            <Paper>
                <form onSubmit = {this.handleSubmit}>
                    <TextField fullWidth label = "Search.." onChange = {this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;