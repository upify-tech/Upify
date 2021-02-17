import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import BookmarkIcon from '@material-ui/icons/Bookmark';
// import Container from '@material-ui/core/Container';
import '../../CSS/HomePage/Homecard.css';
import course from "../../images/course.jpg";


const HomedataCourses = (props) => {

  return (
    <>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="media"
            image={course}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="card_info">
            <b>Tutor Name: </b>{props.tutor_name}
              <br/>
              <b>Description:</b> {props.description}
              <br/>
              <b>Domain:</b> {props.domain}
              <br/>
              <b>Duration:</b> {props.duration}
            </Typography>

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={props.link} target="/new" className="card-btn">
            <b>See details</b>
          </Button>
          {/* <Button size="small" color="primary">
          </Button> */}
          <a href="/"><BookmarkBorderIcon color="primary" fontSize="large"/></a>
        </CardActions>
      </Card>
    </>
  );
}


export default HomedataCourses;



