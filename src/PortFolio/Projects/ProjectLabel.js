import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectLabel({ heading, link,imageurl }) {
  const handleViewClick = () => {
    window.open(link, '_blank');
  };

  return (
    <Card sx={{
      width: 300,
      height: 300
    }}
      style={{ margin: '10px' }}>
      <div style={{justifyContent:"center",alignItems:"center",display:"flex",margin:"5px", backgroundColor:"violet"}}>
        <CardMedia
          sx={{ height: 140, width: 140,margin:0.2 }}
          image={require(`./${imageurl}`)}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", marginBottom:"0px"}}>
          {heading}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={handleViewClick}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProjectLabel;
