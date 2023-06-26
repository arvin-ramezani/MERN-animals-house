import {
  AboutBlock,
  AboutText,
  AboutTitle,
  AnimalCardHeader,
  AnimalLikeButton,
  DetailsText,
  ImageBlock,
  StyledAnimalSkeleton,
  StyledAnimalsListSkeleton,
  StyledShimmer,
} from './AnimalsListSkeleton.styled';
import {
  AnimalsListShimmerVariants,
  animalsListSkeletonVariants,
} from './AnimalsListSelekton.variants';

const AnimalsListSkeleton = () => {
  return (
    <StyledAnimalsListSkeleton
      variants={animalsListSkeletonVariants}
      initial={'initial'}
      animate={'animate'}
      exit={'initial'}
    >
      {Array(6)
        .fill(null)
        .map((item, index) => (
          <StyledAnimalSkeleton key={index}>
            <AnimalCardHeader>
              <h3> </h3>

              <AnimalLikeButton>
                <img
                  src='./images/skeleton/like-placeholder.svg'
                  alt='like button'
                />
                <span />
              </AnimalLikeButton>
            </AnimalCardHeader>
            <ImageBlock>
              <img
                src='./images/skeleton/animal-placeholder.svg'
                alt='animal'
              />
            </ImageBlock>

            <DetailsText />
            <DetailsText />

            <hr />

            <AboutBlock>
              <AboutTitle />
              <AboutText />
            </AboutBlock>

            <StyledShimmer
              variants={AnimalsListShimmerVariants}
              initial={'initial'}
              animate={'animate'}
            />
          </StyledAnimalSkeleton>
        ))}
    </StyledAnimalsListSkeleton>
  );
};

export default AnimalsListSkeleton;
