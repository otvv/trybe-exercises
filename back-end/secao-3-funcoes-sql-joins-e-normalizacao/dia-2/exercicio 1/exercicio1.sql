-- EXERCICIO 1
SELECT mo.id, mo.title, mo.director, mo.year, bo.domestic_sales, bo.international_sales FROM pixar.movies AS mo
INNER JOIN	pixar.box_office AS bo
ON mo.id = bo.movie_id;
