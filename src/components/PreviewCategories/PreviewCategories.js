import { useEffect, useState } from 'react';
import axios from 'axios';
// import {getCategoryRecipes} from 'services/soyummyAPI';

// import { CategoryDishItem } from 'components/CategoryDishItem/CategoryDishItem';
import { Loader } from 'components/Loader';
import { MainContainer } from 'components/MainContainer';
import {
  MainList,
  TitleList,
  CategoriesList,
  Link,
  ButtonOtherCategory,
  ErrorMessage,
} from './PreviewCategories.styled';
import { useMediaQuery } from 'react-responsive';


export const PreviewCategories = () => {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isDesktop = useMediaQuery({query: '(min-width: 1440px)'});
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 320px)' });

  async function getDishes() {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://so-yummy-app-backend.onrender.com/api/recipes/main-page' );
      const { data } = response.data;
     
      if (response) {
        setLoading(false);
      }

      const newData = data.reduce((acc, item) => {
        if (item._id === 'Breakfast') {
          acc[0] = item;
        } else if (item._id === 'Miscellaneous') {
          acc[1] = item;
        } else if (item._id === 'Vegan') {
          acc[2] = item;
        } else if (item._id === 'Dessert') {
          acc[3] = item;
        }
        return acc;
      }, []);

      setDishes(newData);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  }

  useEffect(() => {
    getDishes();
  }, []);

  return (
    
      <MainContainer>
        {dishes.length > 0 && (
          <MainList>
            {dishes.map(({ _id, documents }) => {
              let dishesList;
              if (isMobile) {
                dishesList = [documents[0]];
              }
              if (isTablet) {
                dishesList = [documents[0], documents[1]];
              }
              if (isDesktop) {
                dishesList = documents;
              }
              return (
                <li key={_id}>
                  <TitleList>{_id}</TitleList>
                  <CategoriesList>
                    {dishesList.map(({ _id, thumb, title }) => {
                      
                      //   <CategoryDishItem/>
                    })}
                  </CategoriesList>
                  <Link to={`/categories/${_id}`}>See all</Link>
                </li>
              );
            })}
          </MainList>
        )}
        {error && !loading && (
          <ErrorMessage>Something wrong! Reload the page...</ErrorMessage>
        )}
        {loading && <Loader />}
        <ButtonOtherCategory to="/categories/Beef">
          Other categories
        </ButtonOtherCategory>
      </MainContainer>
    
  );
};
