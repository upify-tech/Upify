import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // float: "left",
    margin: "3px",
    // backgroundColor:"red"
  },
  media: {
    height: 140,
  },
  html: {
    backgroundColor: "red"
  }
});

const InternshipsCard = () => {
  const classes = useStyles();
  return (
    <>
      <Container className="card-container">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2t8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
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
            <Button size="small" color="primary">
              View Details
        </Button>
            <Button size="small" color="primary" href="/home">
              starred
        </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default InternshipsCard;