// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     maxHeight: 345,
//   },
// });
import React from 'react';
import './postui.css'

import { motion } from "framer-motion"
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));
// export default function ImgMediaCard({item,index}) {
//   const classes = useStyles();

//   return (
//     <Card key={index}  className={classes.root}>
//       <CardActionArea>
//         <CardMedia class="b"
//           component="img"
//           alt="Contemplative Reptile"
//           height="140"
//           image={item.img}
      
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//            {item.title} 
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//            {item.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
   
//     </Card>
//   );
// }





export default function  ImgMediaCard({item,index}) {
  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

 
    // <Card className={classes.root}>
    //   <CardHeader
    //     avatar={
    //       <Avatar aria-label="recipe" className={classes.avatar}>
    //         R
    //       </Avatar>
    //     }
    //     action={
    //       <IconButton aria-label="settings">
    //         <MoreVertIcon />
    //       </IconButton>
    //     }
    //     title="Shrimp and Chorizo Paella"
    //     subheader="September 14, 2016"
    //   />
    //   <CardMedia
    //     className={classes.media}
    //     image={item.img}
    //     title="Paella dish"
    //   />
    //   <CardContent>
    //     <Typography variant="body2" color="textSecondary" component="p">
    //       This impressive paella is a perfect party dish and a fun meal to cook together with your
    //       guests. Add 1 cup of frozen peas along with the mussels, if you like.
    //     </Typography>
    //   </CardContent>
    //   <CardActions disableSpacing>
    //     <IconButton aria-label="add to favorites">
    //       <FavoriteIcon />
    //     </IconButton>
    //     <IconButton aria-label="share">
    //       <ShareIcon />
    //     </IconButton>
    //     <IconButton
    //       className={clsx(classes.expand, {
    //         [classes.expandOpen]: expanded,
    //       })}
    //       onClick={handleExpandClick}
    //       aria-expanded={expanded}
    //       aria-label="show more"
    //     >
    //       <ExpandMoreIcon />
    //     </IconButton>
    //   </CardActions>
    //   <Collapse in={expanded} timeout="auto" unmountOnExit>
    //     <CardContent>
    //       <Typography paragraph>Method:</Typography>
    //       <Typography paragraph>
    //         Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
    //         minutes.
    //       </Typography>
    //       <Typography paragraph>
    //         Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
    //         heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
    //         browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
    //         and chorizo in the pan. Add piment??n, bay leaves, garlic, tomatoes, onion, salt and
    //         pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
    //         saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
    //       </Typography>
    //       <Typography paragraph>
    //         Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
    //         without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
    //         medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
    //         again without stirring, until mussels have opened and rice is just tender, 5 to 7
    //         minutes more. (Discard any mussels that don???t open.)
    //       </Typography>
    //       <Typography>
    //         Set aside off of the heat to let rest for 10 minutes, and then serve.
    //       </Typography>
    //     </CardContent>
    //   </Collapse>
    // </Card>



    return (

    <div className='products-container'>
                {/* {item.length === 0 && <div>slow internet...no products to display</div>} */}
                {/* {item.map(item => ( */}
                    <div className='product-card'>
                        <div className='product-img'>
                            
                             <motion.img
                              src={item.img} alt="not found"
                            
                              initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:5}}
                             /> 
 
                        </div>
                        <div className='product-name'>
                            {item.title}
                        </div>
                        <div className='product-price'>
                            {/* Rs <span className='product-price-sub'>{item.price}</span> */}
                            </div>
                    <button className='addcart-btn'>Read Detail</button>
                </div>
            {/* ))} */}
        </div>
  );
}