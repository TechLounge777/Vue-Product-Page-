const { default: Axios } = require('axios');

const MAX_DELAY = 2500;

const get = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    Axios.get(url)
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

export {
// eslint-disable-next-line
    getPromotions,
};
