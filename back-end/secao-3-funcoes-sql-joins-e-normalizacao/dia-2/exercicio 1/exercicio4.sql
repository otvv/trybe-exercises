-- EXERCICIO 4
SELECT the.name, the.location, mo.title, mo.director, mo.year, mo.length_minutes FROM pixar.theater AS the
LEFT JOIN pixar.movies AS mo ON the.id = mo.theater_id
ORDER BY the.name;
