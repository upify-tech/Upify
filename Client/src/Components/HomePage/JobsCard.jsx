import React from 'react';
import { Redirect } from "react-router-dom";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import jobs from "../../images/jobs.jpg";
import '../../CSS/HomePage/Homecard.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // float: "left",
    margin: "3px"
  },
  media: {
    height: 140,
  },
});

const JobsCard = (props) => {
  const classes = useStyles();
  const token = localStorage.getItem("token");
  if(token == null){
    return <Redirect to="/signup" />
  }
  return (
    <>
      {/* <Container fixed className="card-container"> */}
        {/* <Card className={classes.root}> */}
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={jobs}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className="card_info">
              <b>Company: </b>{props.comp_name}
              <br/>
              <b>Description:</b> {props.description}
              <br/>
              <b>Location:</b> {props.location}
              <br/>
              <b>Domain:</b> {props.domain}
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" className="card-btn">
            See details
            </Button>
            <a href="/"><BookmarkBorderIcon color="primary" fontSize="large"/></a>
            {/* <Button size="small" color="primary">
            Add to my list
            </Button> */}
          </CardActions>
        </Card>
      {/* </Container> */}
    </>
  );
}

export default JobsCard;