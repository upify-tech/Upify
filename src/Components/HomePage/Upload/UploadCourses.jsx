import React from 'react';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import {Jumbotron,Container} from 'react-bootstrap';
// import SearchField from 'react-search-field';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Paper, Container } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField, Button, MenuItem, Select, InputLabel, Checkbox, ListItemText, Input } from '@material-ui/core';
import "../../../CSS/HomePage/WelcomeNote.css";
import '../../../CSS/AuthStyles/auth.css';
import "../../../CSS/Upload.css";
import NavbarLogin from '../NavbarLogin';
import Footer from '../../Footer';
import axios from 'axios'


const UploadCourses = () => {
    const [register, setRegister] = useState({
        title: "",
        tutor_name: "",
        about_tutor: "",
        domain: "",
        description: "",
        prerequisites: "",
        duration: "",
        paid_unpaid: "",
        amount:"",
        link: "",
    });

    const [submit, setSubmit] = useState({
        title: "",
        tutor_name: "",
        about_tutor: "",
        domain: "",
        description: "",
        prerequisites: "",
        duration: "",
        paid_unpaid: "",
        amount:"",
        link: "",
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
                title: "",
                tutor_name: "",
                about_tutor: "",
                domain: "",
                description: "",
                prerequisites: "",
                duration: "",
                paid_unpaid: "",
                amount:"",
                link: "",
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
        setSubmit(register)
        axios({
          url:"/uploadcourses",
          method:'POST',
          data:register
        }).then(()=>{
          console.log("sucess")
        }).catch((er)=>{
          console.log(register)
          console.log("Error123")
        })
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
        console.log(event.target.value);
    };
    return (
        <>
            <NavbarLogin />
            <h2 className="center upload-heading" >Upload Course</h2>
            {/* <h2>{`${submit.username} ${submit.email} ${submit.password} ${submit.cpassword} ${submit.interests}`}</h2> */}
            <Container maxWidth="sm" className="upload-container">
                <Paper elevation={3} className="signupPaper">
                    <Paper className="signin" id="paper">
                        <form onSubmit={submitFunc} id="myform">
                            <TextField className="myinput" name="title" value={register.title} onChange={handleChange} fullWidth={true} label="Course Title" variant="standard" required={true} />
                            <TextField className="myinput" name="description" value={register.description} onChange={handleChange} fullWidth={true} label="Course Description" variant="standard" required={true} />
                            <br />
                            <InputLabel style={{ textAlign: "left" }}>Select Domain</InputLabel>
                            <FormControl className={classes.formControl} fullWidth={true} >
                                <InputLabel id="demo-simple-select-label">Domain</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}
                                    name="domain"
                                    value={register.domain}

                                >
                                    <MenuItem value={0}>Data Science</MenuItem>
                                    <MenuItem value={1}>Blockchan</MenuItem>
                                    <MenuItem value={2}>Cyber Security</MenuItem>
                                    <MenuItem value={3}>Cloud Computing</MenuItem>
                                    <MenuItem value={4}>Programming</MenuItem>
                                </Select>
                            </FormControl>
                            {/* <FormControl className={classes.formControl} fullWidth={true} >
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
                            <TextField className="myinput" name="prerequisites" value={register.prerequisites} onChange={handleChange} fullWidth={true} label="Prerequisites" variant="standard" required={true} />
                            <TextField className="myinput" name="tutor_name" value={register.tutor_name} onChange={handleChange} fullWidth={true} label="Name Of Tutor" variant="standard" required={true} />
                            <TextField className="myinput" name="duration" value={register.duration} onChange={handleChange} fullWidth={true} label="Course Duration" variant="standard" required={true} />
                            {/* <TextField className="myinput" name="location" value={register.location} onChange={handleChange} fullWidth={true} label="Locations(s)" variant="standard" required={true} /> */}
                            {/* <TextField className="myinput" name="intendedstudents" value={register.intendedstudents} onChange={handleChange} fullWidth={true} label="Intended students" variant="standard" required={true} /> */}
                            {/* <TextField className="myinput" name="addskills" value={register.addskills} onChange={handleChange} fullWidth={true} label="Additional Skills" variant="standard" required={true} /> */}

                            {/* <FormHelperText>Some important helper text</FormHelperText> */}

                            {/* <InputLabel id="demo-simple-select-label" style={{textAlign:"left"}} fullWidth={true}>CTC</InputLabel> */}
                            <br />
                            <br />
                            <FormControl component="fieldset" fullWidth={true} style={{ alignItems: "left" }}>
                                <FormLabel component="legend" style={{ textAlign: "left" }}>Fee Struture</FormLabel>
                                <RadioGroup aria-label="gender" name="paid_unpaid" value={value} onChange={handleChangeRadio}>
                                    <FormControlLabel value="paid" control={<Radio />} label="Paid" />
                                    <FormControlLabel value="unpaid" control={<Radio />} label="Un Paid" />
                                    {/* <FormControlLabel value="_." control={<Radio />} label="." /> */}
                                </RadioGroup>
                            </FormControl>

                            {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}

                            <TextField className="myinput" name="amount" value={register.amount} onChange={handleChange} fullWidth={true} label="Amount" variant="standard" required={false} />
                            <TextField className="myinput" name="link" value={register.link} onChange={handleChange} fullWidth={true} label="Registration Link" variant="standard" required={true} />

                            {/* <form className={classes.container} noValidate>
                                <TextField style={{ alignItems: "left" }}
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <TextField
                                    id="time"
                                    label="Alarm clock"
                                    type="time"
                                    defaultValue="07:30"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </form> */}



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
                            </Select>
                            <TextField type="email" className="myinput" name="email" value={register.email} onChange={handleChange} fullWidth={true} label="Email" variant="standard" required={true} />
                            <TextField type="password" className="myinput" name="password" value={register.password} onChange={handleChange} fullWidth={true} label="password" variant="standard" required={true} />
                            <TextField type="password" className="myinput" name="cpassword" value={register.cpassword} onChange={handleChange} fullWidth={true} label="confirm password" variant="standard" required={true} />
                            <InputLabel style={{ textAlign: "left" }}>Interest</InputLabel>
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
            <Footer />

        </>
    );
}

export default UploadCourses;