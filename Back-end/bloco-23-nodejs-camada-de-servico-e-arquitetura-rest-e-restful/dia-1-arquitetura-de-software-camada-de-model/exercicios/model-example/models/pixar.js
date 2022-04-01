const connection = require('./connection');

const serialize = (refactorData) => {
  return {
    movieId: refactorData.movie_id,
    rating: refactorData.rating,
    domesticSales: refactorData.domestic_sales,
    internationalSales: refactorData.international_sales,
  }
};

const getAll = async () => {
  const [boxoffice] = await connection.execute(
    'SELECT movie_id, rating, domestic_sales, international_sales FROM BoxOffice'
  );

  return boxoffice.map(serialize);
};

module.exports = {
  getAll,
};
