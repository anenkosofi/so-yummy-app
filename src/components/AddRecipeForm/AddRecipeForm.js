import React, { useState } from 'react';

import axios from 'axios';


import { PopularRecipe } from 'components/PopularRecipe';

import {
  InputUpload,
  Wrap,
  Form,
  ImgUploadWrap,
  MainWrapIngredients,
  WrapPreparation,
  Description,
} from './AddRecipeForm.styled';
import {RecipeDescriptionFields} from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import recipeButtonImage from 'images/add-recipe-placeholder-button.png';

const initialValues = {
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [],
  instructions: '',
};

export const AddRecipeForm = () => {
  const [descriptionFields, setDescriptionFields] = useState(initialValues);

  const addRecipe = async text => {
    try {
      const response = await axios.post(
        'https://so-yummy-app-backend.onrender.com/api/ownRecipes',
        text
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setDescriptionFields(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSetValue = data => {
    const filteredFields = data.filter(({ field }) => field !== '');
    const fields = filteredFields.map(({ field }) => field);
    
    
    setDescriptionFields(prevState => ({
      ...prevState,
      ingredients: fields,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(descriptionFields);
    addRecipe(descriptionFields);
    e.reset();
  };

  return (
    <Wrap>
      <Form>
        <Description>
          <ImgUploadWrap>
            <label htmlFor="file-input">
              <img src={recipeButtonImage} alt="recipeButtonImage" />
            </label>
            <InputUpload
              id="file-input"
              type="file"
              accept="image/png, image/jpeg"
            />
          </ImgUploadWrap>
          <RecipeDescriptionFields
          onInput={handleChange}
          inputs={descriptionFields}/>
        </Description>
        <MainWrapIngredients>
          <RecipeIngredientsFields
            handleSubmit={handleSubmit}
            onInput={handleChange}
            inputs={descriptionFields}
            onSetValue={handleSetValue}
          />
        </MainWrapIngredients>

        <WrapPreparation>
          <RecipePreparationFields
            onInput={handleChange}
            inputs={descriptionFields}
          />
        </WrapPreparation>
        <PopularRecipe />
      </Form>
    </Wrap>
  );
};
