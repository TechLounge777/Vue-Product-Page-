import axios from 'axios';

const MAX_DELAY = 2500;

const get = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    axios.get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  // eslint-disable-next-line no-undef
  }, Math.random() * MAX_DELAY);
});

const getPromotions = () => get('/promotions');

const getPromotion = (promotionId) => get(`/promotions/${promotionId}`);

const getProduct = (productId) => get(`/products/${productId}`);

const postUser = () => get('/promotions');

const getCurrentUser = () => get('/currentUser');

const login = () => get('/currentUser');

const logout = () => get('/currentUser');

export {
  getPromotions,
  getPromotion,
  getProduct,
  postUser,
  getCurrentUser,
  login,
  logout,
};
