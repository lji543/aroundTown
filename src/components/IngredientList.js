import React, { useEffect, useState } from 'react';

import {
  Add as AddIcon,
  Cancel as CancelIcon,
  Edit as EditIcon,
  Remove as RemoveIcon,
  Save as SaveIcon,
} from '@mui/icons-material';
import {
  Button,
  Container,
  Divider,
  List as MUIList,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  TextField,
} from '@mui/material';

import { capitalizeFirstLetter } from '../utils/utilFunctions';

const IngredientList = ({
  // listArray,
  list,
  subHeader,
  dividers,
  stepNumbers,
  handleListItemChange,
  handleListUpdate,
  type,
  isAddingItem,
  sections,
  setIsAddingItem,
}) => {
  // console.log('listArray ',listArray)
  // console.log('list ',list)

  const [listArray, setListArray] = useState(list);

  const handleChange = (target, i) => {
    // console.log('listItem ',listItem, i)
    const { value } = target;
    handleListItemChange(value, i, type);
  }

  // const handleUpdate = () => {
  //   handleListUpdate(type);
  // }

  const handleOnClick = () => {
    console.log('handleOnClick ',isAddingItem)
    if (isAddingItem) {
      // handleUpdate();
      handleListUpdate(type);
    }
    
    setIsAddingItem(!isAddingItem);
  }

  const handleAddItem = (section) => {
    // console.log('handleAddItem ',isAddingItem)
    handleListItemChange('', list.length, type, section)
  }

  const organizeSectionedList = () => {
    // console.log('handleAddItem ',isAddingItem)
    let newArray = [];
    sections.forEach((section, i) => {
      let stepTracker = 0;
      newArray.push({sectionTitle: section});
      list.forEach((listItem, idx) => {
        if (listItem.section == section) {
          stepTracker += 1;
          newArray.push({
            ...listItem,
            step: stepTracker,
          });
        }
      })
    });
    // console.log('newArray ', newArray)
    setListArray(newArray);
  }

  useEffect(() => {
    // console.log('IngredientsList useEffect ', list)
    if (list.length > 0) {
      if (sections) {
        organizeSectionedList();
      } else {
        setListArray(list);
      }
    }
  // eslint-disable-next-line
  }, [list]); // react-hooks/exhaustive-deps

  return ( // TODO: consolidate some of these elements (create a standard fn that returns the dom element) so that we're not repeating the same dom elements based on isAdding or is an object, array, etc
    <MUIList>
      <div className='row'>
        <div className='list-header'>{`${capitalizeFirstLetter(type)}:`}</div>
        <Button
          className='button top-margin-12'
          startIcon={isAddingItem ? <SaveIcon /> : <EditIcon />}
          onClick={() => handleOnClick()}
        >
          {isAddingItem ? 'Save' : 'Edit'}
        </Button>
        {isAddingItem && 
          <div>
            {sections ? (
              sections.map((section) => 
                <Button
                  key={section}
                  className='button top-margin-12'
                  startIcon={<AddIcon />}
                  onClick={() => handleAddItem(section)}
                >
                  {`Add ${section} ${type === 'direction' ? 'step' : type}`}
                </Button>
              )
            ) : (
              <Button
              className='button top-margin-12'
              startIcon={<AddIcon />}
              onClick={() => handleAddItem()}
              >
                {`Add ${type === 'direction' ? 'step' : type}`}
              </Button>
            )}
            <Button
              className='button top-margin-12'
              startIcon={<CancelIcon />}
              onClick={() => setIsAddingItem(!isAddingItem)}
            >
              Cancel
            </Button>
          </div>
        }
      </div>
      <div>
        {listArray.map((listItem, i) => {
          return (
            <div key={`${listItem[type]}${i}`}>
              {listItem.sectionTitle && <div className='list-subHeader'>{`${capitalizeFirstLetter(listItem.sectionTitle)}:`}</div>}
              {!listItem.sectionTitle && <ListItem className='row'>
                <div className='list-item-indicator'>
                  {stepNumbers ? <div className='list-item-indicator-steps'>{listItem.step}</div> : <RemoveIcon />}
                </div>
                {isAddingItem ? (
                  <TextField
                    size="small"
                    fullWidth
                    variant="standard"
                    multiline
                    id={`${i}`}
                    value={listItem[type]}
                    onChange={(e) => handleChange(e.target, i)}
                  />
                ) : (
                  <ListItemText primary={type === 'ingredient' ? `${listItem.ingredient}: ${listItem.amt} ${listItem.measurement}` : listItem[type]} />
                )}
              </ListItem>}
            </div>
          );
        })}
      </div>
    </MUIList>
  );
}

export default IngredientList;

// {sections ? (
//   sections.map((section, idx) => {
//     const sectionNumber = idx;
//     let trackSection = sectionNumber;
//     console.log('sectionNumber ', sectionNumber)
//     // console.log('trackSection ', trackSection) 
//     return (
//       <div>
//         <div className='list-subHeader'>{`${capitalizeFirstLetter(section)}:`}</div>
//         {list.map((listItem, i) => {
//           console.log('listItem ', i)
//           if (listItem.section === section) {
//             return (                  
//               <ListItem key={`${listItem[type]}${i}`} className='row'>
//                 <div className='list-listItem-indicator'>
//                   {stepNumbers ? <div className='list-listItem-indicator-steps'>{i + 1}</div> : <RemoveIcon />}
//                 </div>
//                 {isAddingItem ? (
//                   <TextField
//                     size="small"
//                     fullWidth
//                     variant="standard"
//                     multiline
//                     id={`${i}`}
//                     value={listItem[type]}
//                     onChange={(e) => handleChange(e.target, i)}
//                   />
//                 ) : (
//                   <ListItemText primary={type === 'ingredient' ? `${listItem.ingredient}: ${listItem.amt} ${listItem.measurement}` : listItem[type]} />
//                 )}
//               </ListItem>
//             );
//           }
//         })}
//       </div>
//     );
//   })
// ) : (
//   list.map((listItem, i) => {
//     // console.log('listItem ', listItem)
//     return (
//       <div key={`${listItem[type]}${i}`}>
//         {listItem.section && <div className='list-subHeader'>{`${capitalizeFirstLetter(listItem.section)}:`}</div>}
//         <ListItem className='row'>
//           <div className='list-listItem-indicator'>
//             {stepNumbers ? <div className='list-listItem-indicator-steps'>{i + 1}</div> : <RemoveIcon />}
//           </div>
//           {isAddingItem ? (
//             <TextField
//               size="small"
//               fullWidth
//               variant="standard"
//               multiline
//               id={`${i}`}
//               value={listItem[type]}
//               onChange={(e) => handleChange(e.target, i)}
//             />
//           ) : (
//             <ListItemText primary={type === 'ingredient' ? `${listItem.ingredient}: ${listItem.amt} ${listItem.measurement}` : listItem[type]} />
//           )}
//         </ListItem>
//       </div>
//     );
//   })
// )}