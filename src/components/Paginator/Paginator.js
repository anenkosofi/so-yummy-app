import * as React from 'react';
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';
import css from './Paginator.module.css';

export const Paginator = ({ count, page, isChange }) => {
  return (
    <div className={css.paginationWrapper}>
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          className={css.mui}
          onChange={isChange}
        />
      </Stack>
    </div>
  );
};
