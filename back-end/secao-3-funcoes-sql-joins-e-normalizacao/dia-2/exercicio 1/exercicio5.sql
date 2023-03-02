-- EXERCICIO 5
SELECT the.name, the.location, mo.title, mo.director, mo.year, mo.length_minutes FROM pixar.theater AS the
RIGHT JOIN pixar.movies AS mo ON the.id = mo.theater_id
ORDER BY the.name;
