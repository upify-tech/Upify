import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../CSS/AuthStyles/auth.css';
import "../../../CSS/HomePage/WelcomeNote.css";
import { useState } from 'react';
import { Paper, Container } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField, Button, MenuItem, Select, InputLabel, Checkbox, ListItemText, Input } from '@material-ui/core';
import NavbarLogin from '../NavbarLogin';
import Footer from '../../Footer';
// import {Jumbotron,Container} from 'react-bootstrap';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import SearchField from 'react-search-field';




const UploadWebinars = () => {
    const [register, setRegister] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
        interests: [],
    });

    const [submit, setSubmit] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
        interests: [],
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegister((prev) => {
            return ({
                ...prev,
                [name]: value
            });
        })
    };

    const isMatching = () => {
        if (register.password === register.cpassword) {
            setSubmit(register);
            setRegister({
                webinartitle: "",
                speaker: "",
                location: "",
                intendedaudience: "",
                // minExp: "",
                // maxExp: "",
                email: "",
                password: "",
                cpassword: "",
                interests: []
            })
        } else {
            alert('password not matching');
        }
    }
    const submitFunc = (event) => {
        event.preventDefault();
        isMatching();
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const domain = [
        'Data Science',
        'Blockchan',
        'Cyber Security',
        'Cloud Computing',
        'Programming'
    ];

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: "30rem",
            alignContent: "Left"
        },
        selectEmpty: {
            marginLeft: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    //   function SimpleSelect() {
    //     const classes = useStyles();
    //     // const [age, setAge] = React.useState('');

    //     // const handleChange = (event) => {
    //     //   setAge(event.target.value);
    //     };
    const [value, setValue] = React.useState('female');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <NavbarLogin/>
            <h2>{`${submit.username} ${submit.email} ${submit.password} ${submit.cpassword} ${submit.interests}`}</h2>
            <Container maxWidth="sm" className="upload-container">
                <Paper elevation={3} className="signupPaper">
                    <Paper className="signin" id="paper">
                        <form onSubmit={submitFunc} id="myform">
                            <TextField className="myinput" name="webinartitle" value={register.webinartitle} onChange={handleChange} fullWidth={true} label="WebinarTitle" variant="standard" required={true} />
                            <TextField className="myinput" name="speaker" value={register.speaker} onChange={handleChange} fullWidth={true} label="Speaker Name" variant="standard" required={true} />
                            <TextField className="myinput" name="intendedaudience" value={register.intendedaudience} onChange={handleChange} fullWidth={true} label="Intended audience" variant="standard" required={true} />
                            {/* <TextField className="myinput" name="addskills" value={register.addskills} onChange={handleChange} fullWidth={true} label="Additional Skills" variant="standard" required={true} /> */}

                            {/* <InputLabel style={{ textAlign: "left" }}>Experience</InputLabel>
                            <FormControl className={classes.formControl} fullWidth={true} >
                                <InputLabel id="demo-simple-select-label">Min Exp</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}
                                    name="minExp"
                                    value={register.minExp}

                                >
                                    <MenuItem value={0}>Zero</MenuItem>
                                    <MenuItem value={1}>One Year</MenuItem>
                                    <MenuItem value={2}>Two Year</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl} fullWidth={true} >
                                <InputLabel id="demo-simple-select-helper-label">Max Exp</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={register.maxExp}
                                    name="maxExp"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={0}>Zero</MenuItem>
                                    <MenuItem value={1}>One Year</MenuItem>
                                    <MenuItem value={2}>Two Year</MenuItem>
                                </Select>
                            </FormControl> */}

                                {/* <FormHelperText>Some important helper text</FormHelperText> */}

                            {/* <InputLabel id="demo-simple-select-label" style={{textAlign:"left"}} fullWidth={true}>CTC</InputLabel> */}
                            <br />
                            <br/>
                            <FormControl component="fieldset" fullWidth={true} style={{ alignItems: "left" }}>
                                <FormLabel component="legend" style={{ textAlign: "left" }}>webinar mode</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
                                    <FormControlLabel value="offline" control={<Radio />} label="Offline" />
                                    <FormControlLabel value="Online" control={<Radio />} label="Online" />
                                    {/* <FormControlLabel value="_." control={<Radio />} label="." /> */}
                                    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                                </RadioGroup>
                            </FormControl>

                            <TextField className="myinput" name="location" value={register.location} onChange={handleChange} fullWidth={true} label="Location if offline" variant="standard" required={false} />

                            <TextField className="myinput" name="Speaker_Bio" value={register.qualification} onChange={handleChange} fullWidth={true} label="Brief Information About Speaker" variant="standard" required={true} />
                            <TextField className="myinput" name="Webinar_Description" value={register.description} onChange={handleChange} fullWidth={true} label="Webinar Description" variant="standard" required={true} />
                            <TextField className="myinput" name="Registration_link" value={register.registrationlink} onChange={handleChange} fullWidth={true} label="Registration Link" variant="standard" required={true} />
                            {/* <TextField className="myinput" name="Company_Name" value={register.company_name} onChange={handleChange} fullWidth={true} label="Company Hiring For
                            /Company Name" variant="standard" required={true} /> */}


                            <form className={classes.container} noValidate>
                                <TextField style={{ alignItems: "left" }}
                                    id="date"
                                    label="Webinar Date"
                                    type="date"
                                    defaultValue="2021-01-01"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <TextField
                                    id="time"
                                    label="Webinar Time"
                                    type="time"
                                    defaultValue="12:00"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </form>

                            {/* 
                <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={register.experience}
          
          onChange={handleChange}
          autoWidth
             >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
                            {/* <TextField type="email" className="myinput" name="email" value={register.email} onChange={handleChange} fullWidth={true} label="Email" variant="standard" required={true} />
                <TextField type="password" className="myinput" name="password" value={register.password} onChange={handleChange} fullWidth={true} label="password" variant="standard" required={true} />
                <TextField type="password" className="myinput" name="cpassword" value={register.cpassword} onChange={handleChange} fullWidth={true} label="confirm password" variant="standard" required={true} />
                <InputLabel style={{textAlign:"left"}}>Interest</InputLabel>
                <Select
                  fullWidth={true}
                  multiple
                  name="interests"
                  value={register.interests}
                  onChange={handleChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                  renderValue={(selected) => selected.join(' | ')}
                >
                {domain.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={register.interests.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
                </Select> */}
                            <Button className="myinput" type="submit" fullWidth={true} variant="outlined" color="secondary" href="/home">submit</Button>
                        </form>
                    </Paper>
                </Paper>
            </Container>
            <Footer/>
        </>
    );
}

export default UploadWebinars;