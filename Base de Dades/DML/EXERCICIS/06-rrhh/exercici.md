# 1.2 Base de dades Recursos Humans (RRHH)
- [1.2 Base de dades Recursos Humans](#12-base-de-dades-recursos_humans)
  - [1.2.1 Model relacional](#121-model-relacional)
  - [1.2.2 Scripts de creació de la base de dades](#122-scripts-de-creació-de-la-base-de-dades)
  - [1.2.3 Consultes sobre una taula amb funcions](#123-consultes-sobre-una-taula-amb-funcions)
  - [1.2.4 Consultes sobre una taula utilitzant agrupaments](#124-consultes-sobre-una-taula-utilitzant-agrupaments)
  - [1.2.5 Consultes multitaula (JOINs)](#125-consultes-multitaula-joins)  
  - [1.2.6 Subconsultes](#126-subconsultes)
    - [1.2.6.1 Amb operadors bàsics de comparació](#1271-amb-operadors-bàsics-de-comparació)
    - [1.2.6.2 Subconsultes amb ALL i ANY](#1272-subconsultes-amb-all-i-any)
    - [1.2.6.3 Subconsultes amb IN i NOT IN](#1273-subconsultes-amb-in-i-not-in)
    - [1.2.6.4 Subconsultes amb EXISTS i NOT EXISTS](#1274-subconsultes-amb-exists-i-not-exists)

## 1.2.1 Model relacional

![Tabla](https://github.com/sapa-basededades/M02-M10-Bases-de-Dades/blob/main/1%20-%20Llenguatge%20SQL%20DML%20i%20DDL/DATABASES/MYSQL/db_rrhh/db_rrhh_model.png)

## 1.2.2 Scripts de creació de la base de dades

Crea la base de dades gestio-empleats descarregant els scripts des de Github.

- [Esquema de la base de dades per MySQL](https://github.com/sapa-basededades/M02-M10-Bases-de-Dades/tree/main/1%20-%20Llenguatge%20SQL%20DML%20i%20DDL/DATABASES/MYSQL/db_rrhh)

## 1.2.3 Consultes sobre una taula amb funcions

1. Llista totes les columnes de la taula empleats.
~~~~mysql
SELECT *
  FROM empleats;
~~~~
2. Llista els cognoms de tots els empleats.
~~~~mysql
SELECT cognoms
	FROM empleats;
~~~~
3. Llista els cognoms dels empleats eliminant els cognoms que estiguin repetits.
~~~~mysql
SELECT DISTINCT cognoms
	FROM empleats;
~~~~
4. Llista el nom i els cognoms de tots els empleats.
~~~~mysql
SELECT nom,cognoms
	FROM empleats;
~~~~
5. Mostra els cognoms i nom dels empleats concatenats amb una coma i un
espai en blanc.
~~~~mysql
SELECT CONCAT(nom,', ' ,cognoms) AS nomComplet
	FROM empleats;
~~~~
6. Volem una columna on estigui tot en majúscules i l’altre tot en minúscules. Anomena les columnes com a "nom_majuscules" i "nom_minuscules" respectivament.
~~~~mysql
SELECT 	UPPER(nom) 	AS nomMajuscules, 
		LOWER(nom)  AS nomMinucsules
	FROM empleats;
~~~~
7. Mostra les 6 primeres lletres dels cognoms dels empleats
~~~~mysql
SELECT LEFT(cognoms,6) AS cognomsTallats6
	FROM empleats;
~~~~
8. Quins són els empleats que tenen la longitud del cognoms major a 6? (Mostra els cognoms i la longitud)
~~~~mysql
SELECT cognoms AS cognomsLlargs, LENGTH(cognoms) AS longitud
	FROM empleats
WHERE LENGTH(cognoms) > 6;
~~~~
9. Substitueix totes les 'a' dels cognoms dels empleats per 'e'. Ordena pel nou valor dels cognoms
~~~~mysql
SELECT REPLACE(cognoms, 'a', 'e') AS nomAE
	FROM empleats;
~~~~
10. Mostra tots els empleats que tenen en la segona posició dels cognoms una 'a'. (Sense utilitzar l’operador LIKE, ni REGEXP)
~~~~mysql
SELECT cognoms
	FROM empleats
WHERE SUBSTRING(LOWER(cognoms), 2, 1) = 'a';
~~~~
11. Per cada empleat mostra el codi d’empleat, cognom i el salari amb un augment del 15% expressat com un número enter, etiqueta la columna amb el nom "nou_salari".
~~~~mysql
SELECT empleat_id,cognoms,salari, FLOOR(salari * 1.15) AS nouSalari
	FROM empleats;
~~~~
12. Partint de la consulta anterior, afegeix una nova columna que mostri la diferencia salarial entre el nou salari i l’antic. Etiqueta la columna com a "increment"
~~~~mysql
SELECT empleat_id,cognoms,
		salari,
		FLOOR(salari * 1.15) AS nouSalari,
		FLOOR(salari * 0.15) AS increment
    FROM empleats;
~~~~
13. Fes una consulta on mostri el cognom de l’empleat en majúscules i la longitud del cognom dels empleats on el seu cognom comenci per J, A o M. Ordena els resultats per cognom d’empleat.
~~~~mysql
SELECT UPPER(cognoms) AS cognomMajuscules, LENGTH(cognoms) AS longitud
	FROM empleats
WHERE 	SUBSTRING(cognoms, 1, 1) IN('A','J','M')
ORDER BY cognoms;
~~~~
14. Fes una consulta on mostri el codi, nom i cognoms dels empleats que van ser contractats un dilluns o un divendres.
~~~~mysql
SELECT empleat_id,nom,cognoms 
	FROM empleats
WHERE 	DAYOFWEEK(data_contractacio) = 2 OR
		DAYOFWEEK(data_contractacio) = 6;
~~~~
15. Mostra l’import de comissió dels empleats. Etiqueta la columna com a "import_comissio" i arrodoneix el valor a 2 decimals. Si un empleat no té assignada comissió fes el que calgui per tal que el resultat de l’operació surti zero en comptes de NULL. Mostra també el cognom i el salari en Ptes despreciant els decimals (truncar)
~~~~mysql
SELECT cognoms, salari,
		ROUND(IFNULL(salari * pct_comissio, 0), 2) AS import_comissio,
		TRUNCATE(salari * 166.386, 0) AS salari_ptes
	FROM empleats;
~~~~
16. Utilitzant alguna de les funcions de dates, obté el nom, cognom i data de contractació dels empleats contractats durant el 1997.
~~~~mysql
SELECT nom, cognoms, data_contractacio
        FROM empleats
WHERE YEAR(data_contractacio) = 1997;
~~~~
17. Utilitzant alguna de les funcions de data, mostra tots els empleats que van ser contractats entre els mesos de juny i novembre, independentment de l’any.
~~~~mysql
SELECT nom, cognoms, data_contractacio
        FROM empleats
WHERE MONTH(data_contractacio) BETWEEN 6 AND 11;
~~~~
18. El nostre departament de recursos humans s’aborreix molt i per justificar el seu sou està elaborant tot d’estadístiques extranyes. Ara volen saber quins empleats varen ser contractats en un dia parell.
~~~~mysql
SELECT nom, cognoms, data_contractacio
	FROM empleats
WHERE DAY(data_contractacio) % 2 = 0;
~~~~
19. Mostra el cognom, la data de contractació i el dia de la setmana en el que va començar l’empleat a treballar. Etiqueta la columna com a dia. Ordena els resultats per dia de la setmana.
~~~~mysql
SELECT cognoms, data_contractacio, DAYNAME(data_contractacio) AS dia  
	FROM empleats  
ORDER BY DAYOFWEEK(data_contractacio);
~~~~
20. Mostra el codi d’empleat, cognoms i la data de contractació en format AAAAMM. El dia no ens interessa ara en el nostre estudi estadístic. Ordena per aquest nou format de data.
~~~~mysql
SELECT empleat_id, cognoms, DATE_FORMAT(data_contractacio, '%Y%m') AS any_mes
	FROM empleats
ORDER BY any_mes;
~~~~
21. Per cada empleat, mostra el cognom, la data de contractació i el número de mesos entre el dia d’avui i la data de contractació. Etiqueta la columna com a "mesos_treballats" i arrodoneix sense decimals. Ordena el resultat segons els mesos treballats de més a menys.
~~~~mysql
SELECT 	cognoms, 
		data_contractacio, 
		ROUND(TIMESTAMPDIFF(MONTH, data_contractacio, CURDATE())) AS mesos_treballats
	FROM empleats
ORDER BY mesos_treballats DESC;
~~~~
22. Mostra el nom, cognom i anys d’antiguitat dels empleats que tenen una antiguitat superior o igual a 20 anys a l’empresa.
~~~~mysql
SELECT 	nom, cognoms, 
		ROUND(TIMESTAMPDIFF(YEAR, data_contractacio, CURDATE())) AS anys_treballats
	FROM empleats
WHERE ROUND(TIMESTAMPDIFF(YEAR, data_contractacio, CURDATE())) >= 20;
~~~~
23. Crea una consulta per mostrar el cognom i salari de tots els empleats que guanyen més de 10.000 a l’any. Dona format al camp salari per a que tingui 15 caràcters de longitud, omplint per l’esquerra amb $. Etiqueta la columna com a salari.
~~~~mysql
SELECT cognoms,
		LPAD(salari, 15, '$') AS salari
	FROM empleats
WHERE salari > 10000;
~~~~
24. Mostra el cognom, salari i percentatge de comissió dels empleats. Afegeix una nova columna en que si un empleat no té assignada comissió, posi "SenseComissió". Etiqueta la columna amb nom "no_comissio"
~~~~mysql
SELECT cognoms, salari, IFNULL(FLOOR(pct_comissio * 100), "SenseComissio") AS no_comissio
	FROM empleats;
~~~~
25. Mostra el cognom, salari i utilitzant la funció CASE, mostra el següent en
funció del valor del salari
  - Si el salari està entre 0 i 3000 -> "Mig"
  - Si el salari està entre 12000 i 24000 -> "Alt"
  - Qualsevol altre valor posa "Altres"
  - Anomena la columna com a "poder_adquisitiu" i ordena per salari de menor a major
~~~~mysql
SELECT cognoms, salari,
		CASE
			WHEN salari > 0 AND salari < 3000 THEN "Mig"
			WHEN salari > 12000 AND salari < 24000 THEN "Alt"
			ELSE "Altres"
		END AS poder_adquisitiu
	FROM empleats
ORDER BY salari ASC;
~~~~
26. Llista el codi dels departaments dels empleats que apareixen a la taula empleats.
~~~~mysql
SELECT departament_id FROM empleats;
~~~~
27. Partint de la consulta anterior elimina els codis de departament repetits.
~~~~mysql
SELECT DISTINCT departament_id FROM empleats;
~~~~
28. Calcula el nombre d'empleats que **no tenen** comissió assignada.
~~~~mysql
SELECT COUNT(*) AS numSenseComissio 
	FROM empleats
WHERE pct_comissio IS NULL;
~~~~
    
## 1.2.4 Consultes sobre una taula utilitzant agrupaments

1. Quants empleats van ser contractats l'any passat.
~~~~mysql
SELECT COUNT(*) AS quants
	FROM empleats
WHERE YEAR(data_contractacio) = YEAR(curdate()) -1;
~~~~
2. Quin és el treballador (nº d’anys no el nom del treballador) amb més anys d'antiguitat.
~~~~mysql
SELECT MAX(TIMESTAMPDIFF(YEAR, data_contractacio, CURDATE())) AS anys_antiguitat
	FROM empleats;
-- ORDER BY anys_antiguitat DESC
-- LIMIT 1
~~~~
3. Quin és el treballador(nº d’anys no el nom del treballador) amb menys anys d'antiguitat.
~~~~mysql
SELECT MIN(TIMESTAMPDIFF(YEAR, data_contractacio, CURDATE())) AS anys_antiguitat
	FROM empleats;
~~~~
4. Quin és el salari mig de l'empresa
~~~~mysql
SELECT AVG(salari)
	FROM empleats;
~~~~
5. Mostra el salari més alt i el més baix dels empleats. Anomena les columnes com a "salari_max" i "salari_min" respectivament.
~~~~mysql
SELECT MAX(salari) AS salari_max, MIN(salari) AS salari_min
	FROM empleats;
~~~~
6. Mostra la mitjana dels salaris i el número d’empleats que tenim. Arrodoneix la mitjana al número enter més pròxim i anomena les columnes com a salari_mig i num_empleats respectivament.
~~~~mysql
SELECT COUNT(*) AS num_empleats, ROUND(AVG(salari), 0) AS salari_mig
	FROM empleats;
~~~~
7. Mostra, per cada tipus de treball, la mitjana dels salaris. Ordena la informació per tipus de treball.
~~~~mysql
SELECT AVG(salari) 
	FROM empleats
GROUP BY feina_codi;
~~~~
8. Quants empleats tenim assignats a cada tipus de treball? Ordena la informació per número d’empleats.
~~~~mysql
SELECT feina_codi, COUNT(*)
	FROM empleats
GROUP BY feina_codi;
~~~~
9. Quants empleats tenim assignats a cada departament? Mostra el  codi de departament i el número d’empleats que té. Ordena la informació per número d’empleats.
~~~~mysql
SELECT COUNT(*) AS num_empleats, departament_id
	FROM empleats
WHERE departament_id IS NOT NULL
GROUP BY departament_id
ORDER BY num_empleats ASC;
~~~~
10. Partint de la consulta anterior, volem saber també quants empleats no tenen departament assignat. Mostra el text "No assignat" com a identificador del departament.
~~~~mysql
SELECT COUNT(*) AS num_empleats, IFNULL(departament_id, "No Assignat") AS departament_id
	FROM empleats
GROUP BY departament_id
ORDER BY num_empleats ASC;
~~~~
11. Quants directors (caps) diferents tenim? Anomena la columna com a "numero_de_directors"
~~~~mysql
SELECT COUNT(DISTINCT id_cap) AS num_de_directors
	FROM empleats;
~~~~
12. Fes una consulta per calcular la diferència que hi  ha entre el salari màxim i el mínim dels empleats. Anomena la columna com a "diferencia".
~~~~mysql
SELECT (MAX(salari) - MIN(salari)) AS direfencia
	FROM empleats;
~~~~
13. Mostra, per cada cap, el número identificador de l’empleat (com a cap) i el salari de l’empleat pitjor pagat per a aquest cap. Exclou els empleats  que no tinguin assignat cap.
~~~~mysql
SELECT id_cap, MIN(salari) AS min_salari
	FROM empleats
WHERE id_cap IS NOT NULL
GROUP BY id_cap;
~~~~
14. Partint de la consulta anterior, exclou també aquells caps en què el salari mínim sigui inferior o igual a 6.000.
~~~~mysql
SELECT MIN(salari) AS min_salari, id_cap
	FROM empleats
WHERE id_cap IS NOT NULL
GROUP BY id_cap
HAVING min_salari > 6000;
~~~~
15. Obté el número d’empleats contractats per cada any. Ordena la informació per any.
~~~~mysql
SELECT COUNT(*) AS empleats, YEAR(data_contractacio) AS any
	FROM empleats
GROUP BY any;
~~~~
16. Mostra els codis de departament que tenen 3 o més empleats. Mostra només el codi del departament.
~~~~mysql
SELECT DISTINCT departament_id
	FROM empleats
GROUP BY departament_id
HAVING COUNT(*) >= 3;
~~~~
17. Mostra el nombre d'empleats que cobren més de 9.000 euros.
~~~~mysql
SELECT COUNT(*) AS num_empleats
	FROM empleats
WHERE salari > 9000;
~~~~

## 1.2.5 Consultes multitaula (JOINs)

1. Calcula el nombre d' empleats que treballen en cadascun dels departaments. El resultat d' aquesta consulta també ha d' incloure aquells departaments que no tenen cap empleat associat.
2. ----Retorna un llistat amb els empleats i les dades dels departaments on treballa cadascú.
3. Retorna un llistat amb els empleats i les dades dels departaments on treballa cadascú. Ordena el resultat, en primer lloc pel nom del departament (en ordre alfabètic) i en segon lloc pels cognoms i el nom dels empleats.
4. Retorna un llistat amb el codi i el nom del departament, només d' aquells departaments que tenen empleats.
5. Retorna un llistat amb el codi, el nom del departament i el valor del pressupost actual de què disposa, només d' aquells departaments que tenen empleats. El valor del pressupost actual el pot calcular restant al valor del pressupost inicial (columna pressupost) el valor de les despeses que ha generat (columna despeses).
6. Retorna el nom del departament on treballa l' empleat que té el nif 38382980M.
7. Retorna el nom del departament on treballa l'empleat Pepe Ruiz Santana.
8. Retorna un llistat amb les dades dels empleats que treballen al departament d' R + D. Ordena el resultat alfabèticament.
9. Retorna un llistat amb les dades dels empleats que treballen al departament de Sistemes, Comptabilitat o R + D. Ordena el resultat alfabèticament.
10. Retorna una llista amb el nom dels empleats que tenen els departaments que **no** tenen un pressupost entre 100000 i 200000 euros.
11. Retorna un llistat amb el nom dels departaments on hi ha algun empleat el segon cognom del qual sigui NULL. Tingui en compte que no ha de mostrar noms de departaments que estiguin repetits.
12. Mostra el nombre d'empleats que hi ha a cada departament. Has de retornar dues columnes, una amb el nom del departament i una altra amb el nombre d'empleats que té assignats.
----
1. Retorna un llistat amb **tots els empleats** juntament amb les dades dels departaments on treballen. Aquest llistat també ha d' incloure els empleats que no tenen cap departament associat.
2. Retorna un llistat on només apareguin aquells empleats que no tenen cap departament associat.
3. Retorna un llistat on només apareguin aquells departaments que no tenen cap empleat associat.
4. Retorna un llistat amb tots els empleats juntament amb les dades dels departaments on treballen. El llistat ha d' incloure els empleats que no tenen cap departament associat i els departaments que no tenen cap empleat associat. Ordeni el llistat alfabèticament pel nom del departament.
5. Retorna un llistat amb els empleats que no tenen cap departament associat i els departaments que no tenen cap empleat associat. Ordeni el llistat alfabèticament pel nom del departament.


## 1.2.6 Subconsultes

### 1.2.6.1 Amb operadors bàsics de comparació

1. Retorna un llistat amb tots els empleats que té el departament de Sistemes. (Sense utilitzar INNER JOIN).
2. Retorna el nom del departament amb major pressupost i la quantitat que té assignada.
3. Retorna el nom del departament amb menor pressupost i la quantitat que té assignada.

### 1.2.6.2 Subconsultes amb ALL i ANY

1. Retorna el nom del departament amb major pressupost i la quantitat que té assignada. Sense fer ús de MAX, ORDER BY ni LIMIT.
2. Retorna el nom del departament amb menor pressupost i la quantitat que té assignada. Sense fer ús de MIN, ORDER BY ni LIMIT.
3. Retorna els noms dels departaments que tenen empleats associats. (Utilitzant ALL o ANY).
4. Retorna els noms dels departaments que no tenen empleats associats. (Utilitzant ALL o ANY).

### 1.2.6.3 Subconsultes amb IN i NOT IN

1. Retorna els noms dels departaments que tenen empleats associats. (Utilitzant IN o NOT IN).
2. Retorna els noms dels departaments que no tenen empleats associats. (Utilitzant IN o NOT IN).

### 1.2.6.4 Subconsultes amb EXISTS i NOT EXISTS

1. Retorna els noms dels departaments que tenen empleats associats. (Utilitzant EXISTS o NOT EXISTS).
2. Retorna els noms dels departaments que tenen empleats associats. (Utilitzant EXISTS o NOT EXISTS).
