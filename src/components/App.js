import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants';

import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

import { SharedLayout } from './SharedLayout';
import { MainPage } from 'pages/MainPage';
import { CategoriesPage } from 'pages/CategoriesPage';
import { CategoriesRecipes } from './CategoriesRecipes';
import { AddRecipePage } from 'pages/AddRecipePage';
import { MyRecipesPage } from 'pages/MyRecipesPage';
import { FavoritePage } from 'pages/FavoritePage';
import { ShoppingListPage } from 'pages/ShoppingListPage';
import { SearchPage } from 'pages/SearchPage';
import { RecipePage } from 'pages/RecipePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { WelcomePage } from 'pages/WelcomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { SigninPage } from 'pages/SigninPage';

import { selectIsLoggedIn, selectAccessToken } from 'redux/auth/selectors';
import { getCurrentUser } from 'redux/auth/operations';

import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const token = useSelector(selectAccessToken);

  // const dispatch = useDispatch();

  //   useEffect(() => {
  //   if (token === null) return;
  //   dispatch(getCurrentUser());
  // }, [dispatch, token]);

  const { darkTheme } = useSelector(state => state.theme);

  return (
    <div>
      <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route path="/" element={<SharedLayout />}>
            <Route path="main" element={<MainPage />} />
            <Route index element={<MainPage />} />
            <Route path="categories" element={<CategoriesPage />}>
              <Route path=":categoryName" element={<CategoriesRecipes />} />
            </Route>
            <Route path="add" element={<AddRecipePage />} />
            <Route path="my" element={<MyRecipesPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="shopping-list" element={<ShoppingListPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="recipe/:recipeId" element={<RecipePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};