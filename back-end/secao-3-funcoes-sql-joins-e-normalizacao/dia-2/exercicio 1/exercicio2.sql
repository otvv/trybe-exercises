-- EXERCICIO 2
SELECT mo.title,  (bo.domestic_sales + bo.international_sales) AS sales, mo.director, mo.year, bo.international_sales, bo.domestic_sales FROM pixar.movies AS mo
INNER JOIN pixar.box_office AS bo
ON mo.id >= bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;
