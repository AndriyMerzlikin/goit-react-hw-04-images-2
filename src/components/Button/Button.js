import { LoaderButton, LoaderContainer } from './Button.styled';

export const LoadMoreButton = ({ addPage }) => {
  return (
    <LoaderContainer>
      <LoaderButton onClick={addPage}>Load more</LoaderButton>
    </LoaderContainer>
  );
};
