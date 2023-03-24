import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { StyledButtonSecondary } from "../styles/StyledComponents/styledButton";
import useAPI from "../api/apiHook";
import { API_ECOM_PATH } from "../api/constants.mjs";
import "../styles/sass/header.scss";

const url = API_ECOM_PATH;

function SearchBar() {
  const [value, setValue] = useState("");
  const { data: products } = useAPI(url);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (value) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <InputGroup className="my-3">
        <Form.Control
          className="searchForm"
          type="text"
          placeholder="Search"
          value={value}
          onSubmit={handleSubmit}
          onChange={onChange}
        />
        <StyledButtonSecondary type="submit">Search</StyledButtonSecondary>
      </InputGroup>
      <div className="dropdown">
        {products
          .filter((product) => {
            const searchTerm = value.toLowerCase();
            const productTitle = product.title.toLowerCase();

            return searchTerm && productTitle.includes(searchTerm) && productTitle !== searchTerm;
          }) // Filter out products that don't match the search term
          .slice(0, 5) // Limit to 10 results
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

// search bar does not return the actual product when hit search yet, just the title of the product
