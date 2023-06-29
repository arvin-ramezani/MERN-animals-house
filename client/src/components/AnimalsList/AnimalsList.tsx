import React, { KeyboardEventHandler, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useHistory, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
  Wrapper,
  FilterWrapper,
  FilterContainer,
  FilterButton,
  Search,
  AnimalsListContainer,
  LoadMoreBlock,
} from './AnimalsList.styled';
import { useAppDispatch, useAppSelector } from '../../app/Hook';
import {
  fetchAnimalsAsync,
  selectAnimals,
} from '../../features/animals/animalsSlice';
import { StyledButton } from '../Navbar/Navbar.styled';
import AnimalCard from '../AnimalCard/AnimalCard';
import { CloseButton } from '../AnimalCard/AnimalCard.styled';
import { animalsListVariants } from './AnimalsList.variants';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const AnimalsList = () => {
  const history = useHistory();
  const {
    animals,
    pagination: { totalPages },
    status,
  } = useAppSelector(selectAnimals);
  const [searchInputValue, setSearchInputValue] = useState('');
  const searchParam = useQuery();
  const [page, setPage] = useState(+(searchParam.get('page') || 1));
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useAppDispatch();

  const onLoadMore = () => {
    console.log(page, 'page', console.log(searchParam.get('page')));

    if (page >= totalPages) {
      enqueueSnackbar('There is no more animals', { variant: 'error' });
      return;
    }

    const categoryQuery = searchParam.get('category');
    const nameQuery = searchParam.get('name');
    const newPage = page + 1;

    if (categoryQuery) {
      dispatch(
        fetchAnimalsAsync(`category=${categoryQuery}&page=${newPage}`)
      ).then((res) => {
        history.push(`?category=${categoryQuery}&page=${newPage}`);
        setPage((prev) => prev + 1);
      });
      return;
    }

    if (nameQuery) {
      dispatch(fetchAnimalsAsync(`name=${nameQuery}`)).then((res) => {
        history.push(`?name=${nameQuery}&page=${newPage}`);
        setPage((prev) => prev + 1);
      });
      return;
    }

    dispatch(fetchAnimalsAsync(`page=${newPage}`)).then(() => {
      history.push(`?&page=${newPage}`);
      setPage((prev) => prev + 1);
    });
    return;
  };

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      searchHandler('search');
    }
  };

  const searchOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInputValue(e.target.value);

  const searchHandler = (queryKey: string, value?: string) => {
    if (queryKey === 'category' && value === 'all') {
      setPage(1);
      dispatch(fetchAnimalsAsync(`page=${1}`)).then((res) => {
        history.push('/?page=1');
      });
      return;
    }

    if (queryKey === 'category') {
      dispatch(fetchAnimalsAsync(`${queryKey}=${value}`)).then((res) => {
        history.push(`?category=${value}&page=1`);
      });
      return;
    }

    if (queryKey === 'search') {
      if (searchInputValue?.trim()) {
        dispatch(fetchAnimalsAsync(`${queryKey}=${searchInputValue}`)).then(
          (res) => {
            history.push(`?search=${searchInputValue}&page=1`);
            setSearchInputValue('');
          }
        );
        return;
      }
    }
  };

  return (
    <Wrapper>
      <FilterWrapper>
        <FilterContainer>
          <FilterButton
            whileHover={'open'}
            variants={animalsListVariants}
            onClick={() => searchHandler('category', 'all')}
          >
            All
          </FilterButton>
          <FilterButton
            whileHover={'open'}
            variants={animalsListVariants}
            onClick={() => searchHandler('category', 'cat')}
          >
            Cats
          </FilterButton>
          <FilterButton
            whileHover={'open'}
            variants={animalsListVariants}
            onClick={() => searchHandler('category', 'dog')}
          >
            Dogs
          </FilterButton>
          <FilterButton
            whileHover={'open'}
            variants={animalsListVariants}
            onClick={() => searchHandler('category', 'bird')}
          >
            Birds
          </FilterButton>
        </FilterContainer>
        <Search>
          <label htmlFor='searchByName'>Search By Animal Name or Breed</label>
          <input
            value={searchInputValue}
            onChange={searchOnChangeHandler}
            onKeyDown={handleKeyPress}
            type='text'
            id='searchByName'
            placeholder='Search By Name & breed.'
          />
          <StyledButton
            style={{ margin: '0.2rem' }}
            onClick={() => searchHandler('search')}
          >
            Search
          </StyledButton>
        </Search>
      </FilterWrapper>

      <AnimalsListContainer>
        <AnimatePresence>
          {animals.map((animal) => (
            <AnimalCard
              loading={status === 'pending'}
              key={animal._id}
              animal={animal}
            />
          ))}
        </AnimatePresence>

        <LoadMoreBlock>
          <CloseButton onClick={onLoadMore}>Load More</CloseButton>
        </LoadMoreBlock>
      </AnimalsListContainer>
    </Wrapper>
  );
};

export default AnimalsList;
