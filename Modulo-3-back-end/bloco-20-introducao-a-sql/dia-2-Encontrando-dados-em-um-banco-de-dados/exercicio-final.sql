USE Scientist;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 1 AS primeiro, 2 AS segundo, 3 AS terceiro;
SELECT 10 + 15;
SELECT (3*4) + 12;
SELECT * FROM Scientists.Scientists;
SELECT * FROM Scientists.Projects;
SELECT name AS 'nome_do_projeto', hours AS 'tempo_de_trabalho' FROM Scientists.Projects;
SELECT * FROM Scientists.Scientists;
SELECT name FROM Scientists.Scientists
ORDER BY name;
SELECT * FROM Scientists.Projects;
SELECT name FROM Scientists.Projects
ORDER BY name DESC;
SELECT CONCAT('O Projeto ', name, ' precisou de ', hours, ' horas para ser concluído.') AS resultado FROM Scientists.Projects;
SELECT name, hours FROM Scientists.Projects
ORDER BY hours DESC LIMIT 3;
SELECT * FROM Scientists.AssignedTo;
SELECT DISTINCT project FROM Scientists.AssignedTo;
SELECT name FROM Scientists.Projects
ORDER BY hours DESC LIMIT 1;
SELECT name FROM Scientists.Projects
ORDER BY hours LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects
ORDER BY hours LIMIT 5;
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.') AS resultado FROM Scientists.Scientists;
