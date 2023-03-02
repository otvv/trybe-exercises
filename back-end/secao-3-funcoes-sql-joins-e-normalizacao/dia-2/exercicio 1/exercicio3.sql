-- EXERCICIO 3
SELECT mo.title, bo.rating FROM movies AS mo
INNER JOIN pixar.box_office AS bo
ON mo.id = bo.movie_id
ORDER BY bo.rating DESC;
