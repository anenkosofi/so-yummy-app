import axios from 'axios';
import MediaQuery from 'react-responsive';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from './PopularRecipe.styled';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ItemImg,
  ItemText,
  ItemTitle,
  ItemWrapper,
  ListItemPopular,
  ListLinkPopular,
  ListPopular,
  TitlePopular,
  WrapperPopular,
} from './PopularRecipe.styled';


export const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const popularRecipes = async () => {
      try {
        const response = await axios.get(
          ''
        );
        const { data } = response.data;

        if (response) {
          setLoading(false);
          setRecipes(data);
        }
      } catch {
        setError('Failed to fetch');
        setRecipes([]);
      }
    };
    popularRecipes();
  }, []);

  return (
    <WrapperPopular>
      <MediaQuery minWidth={1440}>
        <TitlePopular>Follow us</TitlePopular>
        
      </MediaQuery>
      <TitlePopular>Popular recipe</TitlePopular>
      {
        <ListPopular>
          {recipes.map(({ _id, title, description, preview }) => (
            <ListItemPopular key={_id}>
              <ListLinkPopular to={`/recipe/${_id}`} state={{ from: location }}>
                <ItemImg src={preview} alt="recipe-appearance" />
                <ItemWrapper>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemText>{description}</ItemText>
                </ItemWrapper>
              </ListLinkPopular>
            </ListItemPopular>
          ))}
        </ListPopular>
      }
      {error && !loading && (
        <ErrorMessage>Something wrong! Reload the page...</ErrorMessage>
      )}
      {loading && <Loader />}
    </WrapperPopular>
  );
};