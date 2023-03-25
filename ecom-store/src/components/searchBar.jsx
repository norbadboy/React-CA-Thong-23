import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { StyledButtonSecondary } from "../styles/StyledComponents/styledButton";
import useAPI from "../api/apiHook";
import { API_ECOM_PATH } from "../api/constants.mjs";
import "../styles/sass/header.scss";
import { useSearchParams, serializeFormQuery } from "react-router-dom";

const url = API_ECOM_PATH;

function SearchBar() {
  const [value, setValue] = useState("");
  const { data: products } = useAPI(url);
  let [searchParams, setSearchParams] = useSearchParams();

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
    <div className="my-3">
      <Form onSubmit={onSubmitForm}>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search"
            name="search"
            value={value}
            onChange={onChange}
          />
          <StyledButtonSecondary type="submit">Search</StyledButtonSecondary>
        </InputGroup>
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
            <div onClick={() => onSearch(product.title)} className="dropdownRow" key={product.id}>
              <p>{product.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
