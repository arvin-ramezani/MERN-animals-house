import React, { FC, useState } from "react";
import {
  Wrapper,
  CardHeader,
  CardImg,
  CardBody,
  CardFooter,
  CloseButton,
  variants,
} from "./styles";
import { ICardProps } from "../../interfaces/interfaces";
import { motion } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { selectUser } from "../../features/user/userSlice";
import { likeAnimalAsync } from "../../features/animals/animalsSlice";
import { useAppDispatch, useAppSelector } from "../../app/Hook";

const Card: FC<ICardProps> = ({
  animal: { name, likes, breed, age, gender, price, color, about, img, _id },
}) => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(selectUser);
  const [open, setOpen] = useState(false);
  const [like, setLike] = useState<boolean>(
    userInfo ? likes.includes(userInfo?._id) : false
  );

  const openCardHandler = () => setOpen((open) => !open);

  const likeHandler = () => {
    setLike((like) => !like);
    dispatch(likeAnimalAsync({ animalId: _id }));
  };

  return (
    <Wrapper
      open={open}
      as={motion.div}
      animate={open ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.1 }}
    >
      <CardHeader open={open}>
        <h3>Name</h3>
        <span>{name}</span>
        <div className="card-like">
          <motion.span
            onClick={likeHandler}
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.4 }}
            whileTap={{ y: -28, rotate: 360, x: 10 }}
            // animate={{ y: [-28, 0], rotate: 360, x: 10 }}
          >
            {like ? <AiFillHeart /> : <AiOutlineHeart />}
          </motion.span>
          {likes.length} likes
        </div>
        {open && (
          <CloseButton className="card-closeButton" onClick={openCardHandler}>
            Close
          </CloseButton>
        )}
      </CardHeader>
      <CardImg onClick={openCardHandler}>
        <img src={img} alt={breed} />
      </CardImg>
      <CardBody open={open} onClick={openCardHandler}>
        <div className="text-container">
          <p>Breed:</p>
          <span className="text-sm">{breed}</span>
        </div>
        <div className="text-container">
          <p>Price:</p>
          <span className="text-sm">{price}</span>
        </div>
        {open && (
          <>
            <div className="text-container">
              <p>Gender:</p>
              <span className="text-sm">{gender}</span>
            </div>
            <div className="text-container">
              <p>Age:</p>
              <span className="text-sm">$ {age}</span>
            </div>
            <div className="text-container">
              <p>Color:</p>
              <span className="text-sm">$ {color}</span>
            </div>
          </>
        )}
      </CardBody>
      <CardFooter open={open} onClick={openCardHandler}>
        <p className="footer-text-bg">About:</p>
        <p className="footer-text-sm">
          {!open ? about.slice(0, 30) + "..." : about}
        </p>
        {open || <span className="read-more-text">Read More..</span>}
      </CardFooter>
    </Wrapper>
  );
};

export default Card;
