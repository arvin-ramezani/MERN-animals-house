import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import {
  Wrapper,
  CardHeader,
  CardImg,
  CardBody,
  CardFooter,
  CloseButton,
  variants,
  AnimalCardBackdrop,
} from './styles';
import { IAnimalCardProps } from '../../interfaces/interfaces';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { selectUser } from '../../features/user/userSlice';
import { likeAnimalAsync } from '../../features/animals/animalsSlice';
import { useAppDispatch, useAppSelector } from '../../app/Hook';

const AnimalCard: FC<IAnimalCardProps> = ({
  animal: { name, likes, breed, age, gender, price, color, about, img, _id },
}) => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(selectUser);
  const [openAnimalCard, setOpenAnimalCard] = useState(false);
  const [like, setLike] = useState<boolean>(
    userInfo ? likes.includes(userInfo?._id) : false
  );

  const closeCardHandler: MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
    console.log('close');
    setOpenAnimalCard(false);
  };

  const openCardHandler = () => setOpenAnimalCard(true);

  const onAnimalCardClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    openCardHandler();
  };

  const likeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setLike((like) => !like);
    dispatch(likeAnimalAsync({ animalId: _id }));
  };

  return (
    <>
      <AnimatePresence>
        {openAnimalCard && (
          <AnimalCardBackdrop
            key='animalBackdrop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeCardHandler}
          />
        )}
      </AnimatePresence>

      <Wrapper
        open={openAnimalCard}
        as={motion.div}
        variants={variants}
        animate={openAnimalCard ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
        onClick={onAnimalCardClick}
      >
        <CardHeader open={openAnimalCard}>
          <h3>{name}</h3>
          <div
            className='card-like'
            onClick={likeHandler}
          >
            <motion.span
              whileHover={{ scale: 1.4 }}
              whileTap={{ y: -28, rotate: 360, x: 10 }}
            >
              {like ? <AiFillHeart /> : <AiOutlineHeart />}
            </motion.span>
            {likes.length} likes
          </div>
          {openAnimalCard && (
            <CloseButton
              className='card-closeButton'
              onClick={closeCardHandler}
            >
              Close
            </CloseButton>
          )}
        </CardHeader>
        <CardBody open={openAnimalCard}>
          <CardImg>
            <img
              src={img}
              alt={breed}
            />
          </CardImg>
          <div className='text-container'>
            <p>Breed:</p>
            <span className='text-sm'>{breed}</span>
          </div>
          <div className='text-container'>
            <p>Price:</p>
            <span className='text-sm'>{price}</span>
          </div>
          {openAnimalCard && (
            <>
              <div className='text-container'>
                <p>Gender:</p>
                <span className='text-sm'>{gender}</span>
              </div>
              <div className='text-container'>
                <p>Age:</p>
                <span className='text-sm'>$ {age}</span>
              </div>
              <div className='text-container'>
                <p>Color:</p>
                <span className='text-sm'>$ {color}</span>
              </div>
            </>
          )}
        </CardBody>
        <CardFooter open={openAnimalCard}>
          <p className='footer-text-bg'>About:</p>
          <p className='footer-text-sm'>
            {!openAnimalCard ? about.slice(0, 30) + '...' : about}
          </p>
          {openAnimalCard || (
            <span className='read-more-text'>Read More..</span>
          )}
        </CardFooter>
      </Wrapper>
    </>
  );
};

export default AnimalCard;
