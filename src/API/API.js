const API_URL = 'https://fakestoreapi.com'

export async function fetchProductById(id) {
  try {
    const response = await fetch(
      `${API_URL}/products/${id}`
    );
    const result = await response.json();
    console.log("Product by id", result)
    return result;
  } catch (err) {
    console.error(err);
  }
}