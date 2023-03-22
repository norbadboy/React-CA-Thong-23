import { useEffect, useState } from "react";
import { API_ECOM_PATH } from "../api/constants.mjs";

const url = API_ECOM_PATH;

function GetProductsState() {
  const [products, setProducts] = useState([]);
  // State for loading
  const [loading, setLoading] = useState(false);
  // State for error
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return products;
}

export default GetProductsState;
