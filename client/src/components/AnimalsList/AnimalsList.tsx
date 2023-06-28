import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
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
import useQuery from '../../hooks/useQuery';
import { animalsListVariants } from './AnimalsList.variants';

const AnimalsList = () => {
  const history = useHistory();
  const {
    animals,
    pagination: { totalPages },
    status,
  } = useAppSelector(selectAnimals);
  const [searchInputValue, setSearchInputValue] = useState('');
  const { getQuery } = useQuery();
  const [page, setPage] = useState(+(getQuery('page') || 1));
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useAppDispatch();

  const onLoadMore = () => {
    if (page >= totalPages) {
      enqueueSnackbar('There is no more animals', { variant: 'error' });
      return;
    }

    const categoryQuery = getQuery('category');
    const nameQuery = getQuery('name');
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
      dispatch(fetchAnimalsAsync(`page=${1}`)).then((res) => {
        history.push('/');
      });
      return;
    }

    if (queryKey === 'category') {
      dispatch(fetchAnimalsAsync(`${queryKey}=${value}`)).then((res) => {
        history.push(`?category=${value}`);
      });
      return;
    }

    if (queryKey === 'search') {
      if (searchInputValue?.trim()) {
        dispatch(fetchAnimalsAsync(`${queryKey}=${searchInputValue}`)).then(
          (res) => {
            history.push(`?search=${searchInputValue}`);
            setSearchInputValue('');
          }
        );
        return;
      }
    }
  };

  useEffect(() => {
    dispatch(fetchAnimalsAsync(page.toString()));
  }, []);

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
