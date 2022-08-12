#EXERCICIOS FINAIS

#Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT * FROM pixar.box_office;
SELECT * FROM pixar.movies;

SELECT m.title, b.domestic_sales, b.international_sales
FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
ON b.movie_id = m.id;

#🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT * FROM pixar.box_office;
SELECT * FROM pixar.movies;

SELECT m.title, (b.domestic_sales + b.international_sales) AS `total de arrecadação`
FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;

#🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT * FROM pixar.box_office;
SELECT * FROM pixar.movies;

SELECT m.title, b.rating
FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
ON b.movie_id = m.id
ORDER BY b.rating DESC;

#Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM pixar.theater;
SELECT * FROM pixar.movies;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM pixar.theater AS t
LEFT JOIN pixar.movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

#Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM pixar.theater;
SELECT * FROM pixar.movies;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM pixar.theater AS t
RIGHT JOIN pixar.movies AS m
ON t.id = m.theater_id
ORDER BY t.name;
