import React, { useEffect, useState } from 'react';

import { Autocomplete, Button, Chip, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';

import { cuisine, ingredient, meal, time } from '../../utils/constants';
// import useExpenses from '../state/useExpenses';
import { convertToInt, formatDate } from '../../utils/utilFunctions';
import useRecipes from './../../state/useRecipes';
import useUserCookbookData from './../../state/useUserCookbookData';

const NewTagForm = ({ currentRecipe }) => {
  const { deleteTag, recipes, updateRecipe, updateRecipeTags } = useRecipes();
  const { updateCurrentRecipe } = useUserCookbookData();
  const { directions, id, ingredients, notes, photos, tags } = currentRecipe;
  const { userCookbookData, userTags } = useUserCookbookData();
  // console.log('currentRecipe ',currentRecipe)
  // console.log('tags ',tags)

  const [newItem, setNewItem] = useState();
  const [inputValue, setInputValue] = React.useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [tagOptions, setTagOptions] = useState([]);
  const [recipeTags, setRecipeTags] = useState(tags);
  // const [selectedRecipeTags, setSelectedRecipeTags] = useState([]);
  const [value, setValue] = React.useState('lunch');

  const handleFieldChange = (event) => {
    // const { id, name, value } = event.target;
    // if (statusMessage) {
    //   setStatusMessage();
    // }

    // if (name === 'category' || id === 'category') { // TODO: this is a workaround as select doesnt send up the id?
    //   setNewItem({
    //     ...newItem,
    //     [name]: value,
    //   });
    // } else {
    //   setNewItem({
    //     ...newItem,
    //     [id]: value,
    //   });
    // }
  };

  const handleItemUpdate = (action) => {
    // if (action !== 'cancel') {
    //   const { amount, category, date, name, owedToBy } = newItem;

    //   if (!amount || !category || !date || !name || !owedToBy) {
    //     setStatusMessage(statusMessages.form.requiredError);
    //   } else {
    //     const updatedNewItem = {
    //       ...newItem,
    //       amount: convertToInt(newItem.amount),
    //       date: formatDate(newItem.date),
    //       id: `${newItem.amount}${Math.round(Math.random()*1000000)}`,
    //     }
    
    //     addNewRow(updatedNewItem, owedCategory);
    //     setNewItem(itemObj);
    
    //     if (action === 'close') {
    //       setIsAddingItem(false);
    //     };
    //   }
    // } else {
    //   setIsAddingItem(false);
    // };
  };

  const handleChipDelete = (tag, type) => {
    // console.log('tag ',tag, type)
    deleteTag(id, tag, type);
  }

  const organizeOptions = () => {
    let allTags = [];
    // console.log('userTags ',userTags)
    // console.log('tags ',tags)
    Object.keys(userTags).map((type) => {
      // console.log('type ',type)
      userTags[type].forEach((tag) => {
        // console.log('tag ',tag)
        if (!tags[type]) { tags[type] = [] }
        if (tags[type].indexOf(tag) < 0) {
          // console.log('type ',type, tags[type], tag)
          const optionListOption = {
            section: type,
            name: tag,
          };
          allTags.push(optionListOption);
        }
      });
    });
    // console.log('allTags ',allTags)
    setTagOptions(allTags);
  };

  const handleOnChange = (newValue) => {
    // console.log('recipeTags start ',recipeTags)
    let newRecipeTags = { ...recipeTags } // stored by category
    
    // console.log('onChange ',newValue)
    // console.log('tagOptions ',tagOptions)
    if (newValue) {
      let newTagOptions = [];
      tagOptions.forEach((tag) => {
        if (tag.name === newValue.name) {
          newRecipeTags[newValue.section].push(newValue.name);
        } else {
          newTagOptions.push(tag); // stored as one big array
        }
      });
      // console.log('newTagOptions ',newTagOptions)
      // console.log('setRecipeTags ',newRecipeTags)

      setTagOptions(newTagOptions);
      setRecipeTags(newRecipeTags);
      updateRecipeTags(newRecipeTags, newValue.section);
    }
    // setValue('');
    // setValue({});
    // setInputValue('');

  }

  useEffect(() => {
    organizeOptions();
    // console.log(recipeTags)
  // eslint-disable-next-line
  }, [tags]); // react-hooks/exhaustive-deps

  return (
    <div  className=''>
      <Autocomplete
        id="grouped-demo"
        // options={getOptions}
        options={tagOptions.sort((a, b) => -b.section.localeCompare(a.section))}
        // groupBy={optionsGroupBy}
        groupBy={(option) => option.section}
        // getOptionLabel={getOptionLabel}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) =>{
          // console.log(value, option) // TODO: this seems odd
          return value.name !== option.name
        }}
        //   value.name === option.name
        // }
        // getOptionDisabled={(option) => option.isSelected}
        sx={{ width: 300 }}
        size="small"
        renderInput={(params) => <TextField {...params} label="Add Tags" />}
        onInputChange={(event, newInputValue) => {
          // console.log('onInputChange ', newInputValue)
          setInputValue(newInputValue);
        }}
        onChange={(event, newValue) => {handleOnChange(newValue)}}
      />
      <Stack direction="row" spacing={1} className='tagSection'>
        {/* {recipeTags.map((tag) => tag.isSelected ? <Chip key={tag.name} label={tag.name} clickable onDelete={() => handleChipDelete(tag)} /> : null )} */}
        {/* {recipeTags.cuisine?.map((tag) => tag.isSelected ? <Chip key={tag.name} label={tag.name} clickable onDelete={() => handleChipDelete(tag, 'cuisine')} /> : null)}
        {recipeTags.ingredient?.map((tag) => tag.isSelected ? <Chip key={tag.name} label={tag.name} clickable onDelete={() => handleChipDelete(tag, 'ingredient')} /> : null)}
        {recipeTags.meal?.map((tag) => tag.isSelected ? <Chip key={tag.name} label={tag.name} clickable onDelete={() => handleChipDelete(tag, 'meal')} /> : null)}
        {recipeTags.time?.map((tag) => tag.isSelected ? <Chip key={tag.name} label={tag.name} clickable onDelete={() => handleChipDelete(tag, 'time')} /> : null)} */}
        {recipeTags.cuisine?.map((tag) => <Chip key={tag} label={tag} clickable onDelete={() => handleChipDelete(tag, 'cuisine')} />)}
        {recipeTags.ingredient?.map((tag) => <Chip key={tag} label={tag} clickable onDelete={() => handleChipDelete(tag, 'ingredient')} />)}
        {recipeTags.meal?.map((tag) => <Chip key={tag} label={tag} clickable onDelete={() => handleChipDelete(tag, 'meal')} />)}
        {recipeTags.time?.map((tag) => <Chip key={tag} label={tag} clickable onDelete={() => handleChipDelete(tag, 'time')} />)}
      </Stack>
    </div>
  );
} 

export default NewTagForm;