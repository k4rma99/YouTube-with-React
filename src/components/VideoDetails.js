import React from "react"

import {Paper , Typography } from "@material-ui/core"

const VideoDetails = ({ video }) => {
    
    // console.log("In Video Details")
    // console.log(video)
    if (!video) return <div>Loading...</div>
    // console.log(video.id.videoId)
    const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    // console.log(vidSrc)
    
    return(
        // Empty div
        <React.Fragment>  
            <Paper elevation = {6} style = {{height : '70%'}}>
                <iframe frameBorder = '0'  height = '100%'  width = '100%' title = "Player" src = {vidSrc} />
            </Paper>
            <Paper elevation = {6} style = {{padding : '15px'}}>
                <Typography variant = "subtitle1">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant = "subtitle2">{video.snippet.channelTitle}</Typography>
                <Typography variant = "subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetails;