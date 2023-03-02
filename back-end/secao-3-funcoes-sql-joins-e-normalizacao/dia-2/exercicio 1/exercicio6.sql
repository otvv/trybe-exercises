-- EXERCICIO 6
SELECT mo.title, mo.director, mo.year, mo.length_minutes, bo.rating FROM movies AS mo
INNER JOIN pixar.box_office AS bo
ON mo.id = bo.movie_id
WHERE bo.rating > 8 AND mo.theater_id IS NOT NULL
ORDER BY bo.rating;

