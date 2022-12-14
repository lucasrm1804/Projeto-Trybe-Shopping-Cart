const fetchProducts = (produto) => {
 const url = (`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`);
 return fetch(url)
  .then((response) => response.json())
  .catch((error) => error);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
