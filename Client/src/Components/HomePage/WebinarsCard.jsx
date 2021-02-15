import React from 'react';
import { Redirect } from "react-router-dom";
import {Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import webinar from "../../images/webinar.jpg"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // float:"left",
    margin:"3px"
  },
  media: {
    height: 140,
  },
});

const WebinarsCard = () => {
    const classes = useStyles();
    const token = localStorage.getItem("token");
    if(token == null){
      return <Redirect to="/signup" />
    }
    return(
    <>
    <Container fixed className="card-container">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={webinar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            
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
    </Container>
    </>
    );
}

export default WebinarsCard;