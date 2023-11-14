import { AiOutlineSearch } from 'react-icons/ai';
import {
  SearchForm,
  SearchFormButton,
  SearchbarContainer,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ addGalery }) => {
  return (
    <SearchbarContainer>
      <SearchForm>
        <SearchFormButton
          type="submit"
          onSubmit={async values => {
            await addGalery(values.queryName);
          }}
        >
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
