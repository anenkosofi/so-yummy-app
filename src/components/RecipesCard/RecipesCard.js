// import { useMediaQuery } from '@mui/material';
// import { Link } from 'react-router-dom';

import recExmpl from '../../images/recExmpl.png';
import logoTrash from '../../images/logo-trash.png';

import {
  PicterItem,
  ItemBox,
  ItemBoxTitle,
  ItemBoxText,
  ItemBoxTime,
  LogoTrash,
  ItemBoxButton,
} from './RecipesCard.styled';

export function getTimeFromMins(mins) {
  let minutes = mins;
  let hours = Math.trunc(mins / 60);
  if (mins >= 60 && mins < 1440) {
    minutes = mins % 60;
    return `${hours} hours ${minutes > 0 ? `${minutes} min` : ''}`;
  }

  if (hours >= 24) {
    let days = Math.trunc(hours / 24);
    hours = hours % 24;
    minutes = mins % 60;
    return `${days} day ${hours} hours  ${minutes} min`;
  }
  return `${minutes} min`;
}

export const RecipesCard = ({
  id,
  title,
  time,
  text,
  imgComponent,
  trashClass,
  onDelete,
}) => {
  return (
    <li style={{ display: 'flex' }}>
      <PicterItem src={recExmpl} alt="plugIngr" />
      <ItemBox>
        <ItemBoxTitle>Apple Frangipan Tart</ItemBoxTitle>
        <ItemBoxText>
          Apple Frangipane Tart is a classic and elegant treat fit for any
          dessert table. A crisp, sweet-crust is filled with rich almond
          frangipane filling, baked with sliced apples and finished with apricot
          preserves.
        </ItemBoxText>
        <ItemBoxTime>20 min</ItemBoxTime>
        <LogoTrash>
          <img src={logoTrash} alt="logo" />
        </LogoTrash>
        <ItemBoxButton>See reecipe</ItemBoxButton>
      </ItemBox>
    </li>
  );
};

// export const RecipesCard = ({
//   id,
//   title,
//   time,
//   text,
//   imgComponent,
//   trashClass,
//   onDelete,
// }) => {
//   const isMobile = useMediaQuery('(max-width: 767px)');

//   return (
//     <li className={css.dish}>
//       {isMobile ? (
//         <Link to={`/recipe/${id}`}>
//           <img src={imgComponent} className={css.dishImg} alt="dish visually" />
//         </Link>
//       ) : (
//         <img src={imgComponent} className={css.dishImg} alt="dish visually" />
//       )}
//       <div className={css.cardWrapper}>
//         <div className={css.titleWrapper}>
//           {isMobile ? (
//             <Link to={`/recipe/${id}`}>
//               <h3 className={css.dishTitle}>{title}</h3>
//             </Link>
//           ) : (
//             <h3 className={css.dishTitle}>{title}</h3>
//           )}
//           <div className={css.trashLogo}>
//             <TrashButton bgColorClass={trashClass} onDelete={onDelete} />
//           </div>
//         </div>
//         <p className={css.dishDiscriptionFirst}>{text}</p>
//         <div className={css.bottomWrapper}>
//           <p className={css.dishTime}>{getTimeFromMins(time)}</p>
//           <div className={css.dishButton}>
//             <Link to={`/recipe/${id}`}>recipe</Link>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };
