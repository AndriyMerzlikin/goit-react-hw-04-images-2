import { AiOutlineSearch } from 'react-icons/ai';
import {
  SearchForm,
  SearchFormButton,
  SearchbarContainer,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ qqq }) => {
  return (
    <SearchbarContainer>
      <SearchForm>
        <SearchFormButton type="submit" onSubmit={qqq}>
          <AiOutlineSearch size="2em" />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarContainer>
  );
};
