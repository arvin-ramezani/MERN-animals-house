import { useSnackbar } from 'notistack';

import {
  Wrapper,
  FilterWrapper,
  FilterContainer,
  FilterButton,
  variants,
  Search,
  AnimalsListContainer,
  LoadMoreBlock,
} from './styles';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/Hook';
import {
  fetchAnimalsAsync,
  // fetchAnimalsByQueryAsync,
  selectAnimals,
} from '../../features/animals/animalsSlice';
import { StyledButton } from '../Navbar/styles';
import { useHistory, useLocation } from 'react-router-dom';
import AnimalCard from '../AnimalCard/AnimalCard';
import { CloseButton } from '../AnimalCard/styles';

function useQuery() {
  const { search } = useLocation();
  // console.log(search, 'search');
  // console.log(new URLSearchParams(search), 'search');

  // return search;
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AnimalsList = () => {
  const history = useHistory();
  const {
    animals,
    pagination: { totalPages },
  } = useAppSelector(selectAnimals);
  const [searchInputValue, setSearchInputValue] = useState('');
  let query = useQuery();
  const [page, setPage] = useState(+(query.get('page') || 1));
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useAppDispatch();

  const onLoadMore = () => {
    if (page >= totalPages) {
      enqueueSnackbar('There is no more animals', { variant: 'error' });
      return;
    }

    const categoryQuery = query.get('category');
    const nameQuery = query.get('name');
    const newPage = page + 1;

    console.log(categoryQuery, nameQuery, page, 'setPage');

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

  const searchOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInputValue(e.target.value);

  const searchHandler = (queryKey: string, value?: string) => {
    // let queryKey: string;

    if (queryKey === 'category' && value === 'all') {
      dispatch(fetchAnimalsAsync(`page=${1}`)).then((res) => {
        history.push('/');
      });
      return;
    }

    if (queryKey === 'category') {
      // queryKey = 'category';

      // let newQuery = {queryKey: }

      dispatch(fetchAnimalsAsync(`${queryKey}=${value}`)).then((res) => {
        history.push(`?category=${value}`);
      });
      // dispatch(fetchAnimalsByQueryAsync(`${queryKey}=${value}`)).then((res) =>
      //   history.push(`?category=${value}`)
      // );
      return;
    }

    if (queryKey === 'name') {
      // let animalName = searchInputValue;
      if (searchInputValue?.trim()) {
        // queryKey = 'name';
        dispatch(fetchAnimalsAsync(`${queryKey}=${searchInputValue}`)).then(
          (res) => {
            history.push(`name=${searchInputValue}`);
            setSearchInputValue('');
          }
        );
        // dispatch(
        //   fetchAnimalsByQueryAsync(`${queryKey}=${searchInputValue}`)
        // ).then((res) => {
        //   history.push(`?name=${searchInputValue}`);
        //   setSearchInputValue('');
        // });
        return;
      }
    }
  };

  // useEffect(() => {
  //   console.log(page, 'page');
  // }, [page]);

  // useEffect(() => {
  //   setPage(+(query.get('page') || 1));
  // }, [query]);

  // useEffect(() => {
  //   dispatch(fetchAnimalsAsync(`page=${page}`));
  // }, [dispatch]);

  return (
    <>
      <Wrapper>
        <FilterWrapper>
          <FilterContainer>
            <FilterButton
              whileHover={'open'}
              variants={variants}
              onClick={() => searchHandler('category', 'all')}
              // onClick={() => dispatch(fetchAnimalsAsync(`page=${page}`))}
            >
              All
            </FilterButton>
            <FilterButton
              whileHover={'open'}
              variants={variants}
              onClick={() => searchHandler('category', 'cat')}
            >
              Cats
            </FilterButton>
            <FilterButton
              whileHover={'open'}
              variants={variants}
              onClick={() => searchHandler('category', 'dog')}
            >
              Dogs
            </FilterButton>
            <FilterButton
              whileHover={'open'}
              variants={variants}
              onClick={() => searchHandler('category', 'bird')}
            >
              Birds
            </FilterButton>
          </FilterContainer>
          <Search>
            <label htmlFor='searchByName'>Search By Animal Name</label>
            <input
              value={searchInputValue}
              onChange={searchOnChangeHandler}
              type='text'
              id='searchByName'
              placeholder='Search By Animal Name...'
            />
            <StyledButton
              style={{ margin: '0.2rem' }}
              onClick={() => searchHandler('name')}
            >
              Search
            </StyledButton>
          </Search>
        </FilterWrapper>

        <AnimalsListContainer>
          {animals.map((animal) => (
            <AnimalCard
              key={animal._id}
              animal={animal}
            />
          ))}

          <LoadMoreBlock>
            <CloseButton onClick={onLoadMore}>Load More</CloseButton>
          </LoadMoreBlock>
        </AnimalsListContainer>
      </Wrapper>
    </>
  );
};

export default AnimalsList;
