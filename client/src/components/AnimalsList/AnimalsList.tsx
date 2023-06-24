import {
  Wrapper,
  FilterWrapper,
  FilterContainer,
  FilterButton,
  variants,
  Search,
  AnimalsListContainer,
} from './styles';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/Hook';
import {
  fetchAnimalsAsync,
  fetchAnimalsByQueryAsync,
  selectAnimals,
} from '../../features/animals/animalsSlice';
import { StyledButton } from '../Navbar/styles';
import { useHistory } from 'react-router-dom';
import AnimalCard from '../AnimalCard/AnimalCard';

const AnimalsList = () => {
  const history = useHistory();
  const { animals } = useAppSelector(selectAnimals);
  const [searchInputValue, setSearchInputValue] = useState('');

  const dispatch = useAppDispatch();

  const searchOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInputValue(e.target.value);

  const searchHandler = (query: string, value?: string) => {
    let queryKey: string;

    if (query === 'category') {
      queryKey = 'category';
      dispatch(fetchAnimalsByQueryAsync(`${queryKey}=${value}`)).then((res) =>
        history.push(`?category=${value}`)
      );
      return;
    }

    if (query === 'name') {
      let animalName = searchInputValue;
      if (animalName?.trim()) {
        queryKey = 'name';
        dispatch(fetchAnimalsByQueryAsync(`${queryKey}=${animalName}`)).then(
          (res) => {
            history.push(`?name=${animalName}`);
            setSearchInputValue('');
          }
        );
        return;
      }
    }
  };

  useEffect(() => {
    dispatch(fetchAnimalsAsync());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <FilterWrapper>
          <FilterContainer>
            <FilterButton
              whileHover={'open'}
              variants={variants}
              onClick={() => dispatch(fetchAnimalsAsync())}
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
            <FilterButton
              whileHover={'open'}
              variants={variants}
              onClick={() => searchHandler('category', 'snake')}
            >
              Snakes
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
        </AnimalsListContainer>
      </Wrapper>
    </>
  );
};

export default AnimalsList;
