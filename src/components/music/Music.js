import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useRef, useState } from "react"
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import styles from '../music/MusicStyles.css'


export const Music = ({music, profile}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [footerControl, setFooterControl] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const songPlayer = useRef()
    const progressBar = useRef()
    const animationRef = useRef()

    useEffect(()=>{
        if (music && songPlayer.current) {
            const seconds = Math.floor(songPlayer.current.duration)
            setDuration(seconds)
            progressBar.current.max = seconds
        }
    },[
        songPlayer.current?.loadedmetadata,
        songPlayer.current?.readyState
    ])

    const calcTime = (secs) => {
        const minutes = Math.floor(secs/60)
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(secs % 60)
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${returnedMinutes}:${returnedSeconds}`
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        setFooterControl(true)
        if (!prevValue) {
            songPlayer.current.play()
            animationRef = requestAnimationFrame(whilePlaying)
        } else {
            songPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = songPlayer.current.currentTime
        changePlayerCurrentTime()
        animationRef = requestAnimationFrame(whilePlaying)
    }

    const changeRange = () => {
        songPlayer.current.currentTime = progressBar.current.value
        changePlayerCurrentTime()
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value)
    }

    return(
        <>
            {
                music && profile
                    ?
                        <Box sx={{margin: "0 auto"}}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center"
                            }}>
                                <Box sx={{}}>
                                    <Button onClick={togglePlayPause}>
                                        {
                                            isPlaying
                                            ?
                                                <PlayCircleIcon sx={{color: "rgb(78, 206, 27)", width: 50, height: 50}}/>
                                            :
                                                <PauseCircleIcon sx={{color: "rgb(78, 206, 27)", width: 50, height: 50}}/>    
                                        }
                                    </Button>
                                </Box>
                                <Box>
                                    <Box>
                                        <Typography>{music.title}</Typography>
                                        <Typography>{music.genres}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{position: "absolute", left: "51%", bottom: 0, margin: "0 auto", transform: "translate(-50%, 0%)"}}>
                                {
                                    footerControl
                                        ?
                                        <footer>
                                            <Box sx={{borderTop: "1px black"}}>
                                                <audio controls preload="metadata">
                                                    <source src={`${music?.song}`} type="audio/mpeg"></source>
                                                </audio>
                                                {/* <Button onClick={togglePlayPause}>
                                                    {
                                                        isPlaying
                                                        ?
                                                            <PlayArrowIcon sx={{color: "bla"}}/>
                                                        :
                                                            <PauseIcon sx={{color: "bla"}}/>  
                                                    }
                                                </Button>
                                                <Box> */}
                                                    {/* current time */}
                                                    {
                                                        calcTime(currentTime)
                                                    }
                                                {/* </Box>
                                                <Box>
                                                    <input type="range"
                                                    className={styles.progressBar}
                                                    defaultValue="0"
                                                    ref={progressBar}
                                                    onChange={changeRange}/>
                                                </Box>
                                                <Box> */}
                                                    {/* song duration */}
                                                    {/* {
                                                        (duration && !isNaN(duration)) && calcTime(duration)    
                                                    }
                                                </Box> */}
                                            </Box>
                                        </footer>
                                        :
                                            ""
                                }
                            </Box>
                        </Box>
                    :
                        ""
            }
        </>
    )
}
