import React from "react";

import { Grid } from "@material-ui/core";

import {SearchBar, VideoDetails, VideoList} from './components';
import youtube from "./api/youtube";

class App extends React.Component{

    state = {
        videos : [],
        selectedVideo : null,
    }

    componentDidMount(){
        this.handleSubmit()
    }

    handleSubmit = async (searchValue) => { //async stops execution of code until something is fetched
        const response = await youtube.get('search',{    
            params: {
                part: 'snippet',
                maxResults: 10,
                key: "AIzaSyBIPwQMJDrImIFN0GNAvrhmePeLVYJTos4",
                q : searchValue
        }}) //q = query is 
        // console.log(response.data.items[0])

        this.setState({videos : response.data.items, selectedVideo: response.data.items[0]})

    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo : video})
    }

    render(){

        const { selectedVideo ,videos } = this.state;

        console.log(selectedVideo)

        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs = {12}>
                            <SearchBar onFormSubmit = {this.handleSubmit} />
                        </Grid>
                        <Grid item xs = {8}>
                            <VideoDetails video = {selectedVideo} />
                        </Grid>
                        <Grid item xs = {4}>
                            <VideoList videos = {videos} onVideoSelect = {this.onVideoSelect} /> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

// const App () => {
//     return (<h1>Hello World</h1>)
// }

export default App;