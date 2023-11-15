// import { AiOutlineSearch } from 'react-icons/ai';
// import { Formik, Field, Form } from 'formik';
// import {
//   SearchForm,
//   SearchFormButton,
//   SearchbarContainer,
//   SearchFormInput,
// } from './Searchbar.styled';

// export const Searchbar = ({ addGalery }) => {
//   return (
//     <SearchbarContainer>
//       <Formik
//         initialValues={{
//           queryName: '',
//         }}
//         onSubmit={async values => {
//           await addGalery(values.queryName);
//         }}
//       >
//         <Form>
//           <label htmlFor="queryName"></label>
//           <Field id="queryName" name="queryName" placeholder="Search" />

//           <button type="submit">Search</button>
//         </Form>
//       </Formik>

//       {/* <SearchForm
//         onSubmit={async values => {
//           await addGalery(values.queryName);
//         }}
//       >
//         <SearchFormButton type="submit">
//           <AiOutlineSearch size="2em" />
//         </SearchFormButton>

//         <SearchFormInput
//           type="text"
//           //   autocomplete="off"
//           //   autofocus
//           placeholder="Search images and photos"
//         />
//       </SearchForm> */}
//     </SearchbarContainer>
//   );
// };
import { AiOutlineSearch } from 'react-icons/ai';
import { Formik, Field, Form } from 'formik';
import {
  SearchForm,
  SearchFormButton,
  SearchbarContainer,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ addGalery }) => {
  return (
    <SearchbarContainer>
      <Formik
        initialValues={{
          queryName: '',
        }}
        onSubmit={async (values, { setFieldValue }) => {
          await addGalery(values.queryName);
          // Скидання значення інпута після відправлення форми
          setFieldValue('queryName', '');
        }}
      >
        <Form>
          <label htmlFor="queryName"></label>
          <Field
            id="queryName"
            name="queryName"
            placeholder="Search"
            component="input"
          />

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </SearchbarContainer>
  );
};
