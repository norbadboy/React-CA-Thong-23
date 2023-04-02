import { useState } from "react";
import { StyledButtonSecondary } from "../styles/StyledComponents/styledButton";
import useAPI from "../api/apiHook";
import { API_ECOM_PATH } from "../api/constants.mjs";
import "../styles/sass/header.scss";
import { useSearchParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";

const url = API_ECOM_PATH;

function SearchBar() {
  const [value, setValue] = useState("");
  const { data: products } = useAPI(url);
  let [, setSearchParams] = useSearchParams();

  const onSubmitForm =
    ("submit",
    (e) => {
      e.preventDefault();
      const form = e.target;
      const searchTerm = form.search.value;

      setSearchParams({ search: searchTerm });
      //   return filteredProducts;
    });

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  return (
    <div className="searchBar mb-5">
      <Form onSubmit={onSubmitForm}>
        <div className="inputContainer d-flex justify-content-center">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search"
              name="search"
              value={value}
              onChange={onChange}
              className="searchInputGroup"
            />
            <StyledButtonSecondary type="submit">Search</StyledButtonSecondary>
          </InputGroup>
        </div>
      </Form>
      <div className="dropdown">
        {products
          .filter((product) => {
            const searchTerm = value.toLowerCase();
            const productTitle = product.title.toLowerCase();

            return searchTerm && productTitle.includes(searchTerm) && productTitle !== searchTerm;
          }) // Filter out products that don't match the search term
          .slice(0, 5) // Limit to 5 results
          .map((product) => (
            <Dropdown onClick={() => onSearch(product.title)} key={product.id}>
              <p className="pt-3 ps-3">{product.title}</p>
            </Dropdown>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
