import React from 'react';
import {Paper} from '@material-ui/core';
import {TextField,Button} from '@material-ui/core';
import ApiLogin from './ApiLogin';


const Signin = () => {
   
    return(
        <>
        <Paper elevation={3} className = "signinPaper">
        <ApiLogin />
        <Paper className="signin" id="paper">
        <form>
        <TextField className="myinput" fullWidth={true} label="Username" variant="standard" required={true} />
        <TextField type="password" className="myinput" fullWidth={true} label="password" variant="standard" required={true} />
        <Button className="myinput" fullWidth={true} variant="outlined"  color="secondary" href="/home">login</Button>
        </form>
        </Paper>
        </Paper>
        </>
    );
}

export default Signin;