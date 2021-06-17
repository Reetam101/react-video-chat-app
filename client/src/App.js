import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import VideoPlayer from './components/VideoPlayer'
import Notifications from './components/Notifications'
import Options from './components/Options'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    )
}

export default App
