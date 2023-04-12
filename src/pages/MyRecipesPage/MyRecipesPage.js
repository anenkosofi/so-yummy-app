//============================================ 1 вари

import { useState, useEffect } from 'react';
import { getMyRecipesList } from 'services/soyummyAPI';

import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';
import { MyRecipesList } from 'components/MyRecipesList';
import { Loader } from 'components/Loader';
import { MyRecipesPageSection, Container, Title, NoRecipesText } from './MyRecipesPage.styled';


export const MyRecipesPage = () => {

  // const [recipes, setRecipes] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const getData = async () => {
  //     try {
  //       const data = await getMyRecipesList();
  //       setRecipes(data.recipes);
  //       setIsLoading(false);
  //     } catch (error) {
  //      setError(error.message);
  //     }
  //   };
  //   getData();
  // }, []);



  return (
    <MyRecipesPageSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="My recipes" />
        </Title>
        <MyRecipesList/>
        {/* {isLoading && <Loader />}
        {recipes.length > 0 && !isLoading && <MyRecipesList items={recipes}/>}
        {error && <NoRecipesText>You dont have own recipes...</NoRecipesText>} */}
      </Container>
    </MyRecipesPageSection>
  );
};


//==================== переиспользования фейворитс

// import { MyRecipesList } from 'components/MyRecipesList/MyRecipesList';
// import { MainPageTitle } from 'components/MainPageTitle';
// import { Square } from 'components/Square';

// import { CategoriesSection, Container, Title } from '../FavoritePage/FavoritePage.styled';

// export const MyRecipesPage = () => {
//   return (
//     <>
//       <CategoriesSection>
//         <Container>
//           <Square />
//           <Title>
//             <MainPageTitle title="My recipes" />
//           </Title>
//           <MyRecipesList />
//         </Container>
//       </CategoriesSection>
//     </>
//   );
// };