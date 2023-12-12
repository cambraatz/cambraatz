import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  let bio = ''

  switch (props.title) {
    case 'Landscape Design':
      bio = "Samples from my project work in landscape architecture + garden design";
      //href = "/landscape"
      break;
    case 'Computer Science':
      bio = "Recent academic, personal and professional project work samples";
      //href = "/comp_sci"
      break;
    case 'Hobbies':
      bio = "A few of my favorite passion projects from gardening to baking";
      //href = "/photography"
      break;
    case 'Art // Photography':
      bio = "Personal photography and academic artwork from my time at UW-Madison";
      //href = "/photography"
      break;
    default:
      break;
}

  return (
    <Card className="standard_card" sx={{ width: '49%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100px"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div" id="card_title">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" id="card_text">
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}