import React, { useEffect, useState } from 'react';

import {
  Remove as RemoveIcon,
} from '@mui/icons-material';
import {
  Button,
  Container,
  Divider,
  ImageList as MUIImageList,
  ImageListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

import { capitalizeFirstLetter } from '../../utils/utilFunctions';

// const RecipePage = ({recipe}) => {
const ImageList = ({ images }) => { // TODO: using example one for now
  // console.log('ImageList ',images)
  // const [itemsArray, setItemsArray] = useState(listArray);

  // const organizelistArray = () => {
  //   // console.log(listArray[0])
  //   // const newArray = Array.isArray(listArray) ? listArray : 
  // }
  
  useEffect(() => {
    // if (Array.isArray(listArray[0])) {
    //   organizelistArray();
    // }
  // eslint-disable-next-line
  }, []); // react-hooks/exhaustive-deps

  return (
    <MUIImageList cols={8} gap={21}>
      {images.map((image, i) => (
        <ImageListItem key={`${image}${i}`}>
          <img
            src={image}
            // src={`${image}?w=164&h=164&fit=crop&auto=format`}
            // srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            // alt={image.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </MUIImageList>
  );
}

export default ImageList;

// {Array.isArray(listItem) ? (
//   <ListItemText>
//     {listItem.map((item) => item)}
//   </ListItemText>
// ) : (
//   <ListItemText primary={listItem} />
// )}