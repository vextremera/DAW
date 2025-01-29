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
2. Llista els cognoms de tots els empleats.
3. Llista els cognoms dels empleats eliminant els cognoms que estiguin repetits.
4. Llista el nom i els cognoms de tots els empleats.
5. Mostra els cognoms i nom dels empleats concatenats amb una coma i un
espai en blanc.
6. Volem una columna on estigui tot en majúscules i l’altre tot en minúscules. Anomena les columnes com a "nom_majuscules" i "nom_minuscules" respectivament.
7. Mostra les 6 primeres lletres dels cognoms dels empleats
8. Quins són els empleats que tenen la longitud del cognoms major a 6? (Mostra els cognoms i la longitud)
12. Substitueix totes les 'a' dels cognoms dels empleats per 'e'. Ordena pel nou valor dels cognoms
13. Mostra tots els empleats que tenen en la segona posició dels cognoms una 'a'. (Sense utilitzar l’operador LIKE, ni REGEXP)
14. Per cada empleat mostra el codi d’empleat, cognom i el salari amb un augment del 15% expressat com un número enter, etiqueta la columna amb el nom "nou_salari".
15. Partint de la consulta anterior, afegeix una nova columna que mostri la diferencia salarial entre el nou salari i l’antic. Etiqueta la columna com a "increment"
16. Fes una consulta on mostri el cognom de l’empleat en majúscules i la longitud del cognom dels empleats on el seu cognom comenci per J, A o M. Ordena els resultats per cognom d’empleat.
17. Fes una consulta on mostri el codi, nom i cognoms dels empleats que van ser contractats un dilluns o un divendres.
18. Mostra l’import de comissió dels empleats. Etiqueta la columna com a "import_comissio" i arrodoneix el valor a 2 decimals. Si un empleat no té assignada comissió fes el que calgui per tal que el resultat de l’operació surti zero en comptes de NULL. Mostra també el cognom i el salari en Ptes despreciant els decimals (truncar)
19. Utilitzant alguna de les funcions de dates, obté el nom, cognom i data de contractació dels empleats contractats durant el 1997.
20. Utilitzant alguna de les funcions de data, mostra tots els empleats que van ser contractats entre els mesos de juny i novembre, independentment de l’any.
21. El nostre departament de recursos humans s’aborreix molt i per justificar el seu sou està elaborant tot d’estadístiques extranyes. Ara volen saber quins empleats varen ser contractats en un dia parell.
22. Mostra el cognom, la data de contractació i el dia de la setmana en el que va començar l’empleat a treballar. Etiqueta la columna com a dia. Ordena els resultats per dia de la setmana.
23. Mostra el codi d’empleat, cognoms i la data de contractació en format AAAAMM. El dia no ens interessa ara en el nostre estudi estadístic. Ordena per aquest nou format de data.
24. Per cada empleat, mostra el cognom, la data de contractació i el número de mesos entre el dia d’avui i la data de contractació. Etiqueta la columna com a "mesos_treballats" i arrodoneix sense decimals. Ordena el resultat segons els mesos treballats de més a menys.
25. Mostra el nom, cognom i anys d’antiguitat dels empleats que tenen una antiguitat superior o igual a 20 anys a l’empresa.
26. Crea una consulta per mostrar el cognom i salari de tots els empleats que guanyen més de 10.000 a l’any. Dona format al camp salari per a que tingui 15 caràcters de longitud, omplint per l’esquerra amb $. Etiqueta la columna com a salari.
27. Mostra el cognom, salari i percentatge de comissió dels empleats. Afegeix una nova columna en que si un empleat no té assignada comissió, posi "SenseComissió". Etiqueta la columna amb nom "no_comissio"
28. Mostra el cognom, salari i utilitzant la funció CASE, mostra el següent en
funció del valor del salari
  - Si el salari està entre 0 i 3000 -> "Mig"
  - Si el salari està entre 12000 i 24000 -> "Alt"
  - Qualsevol altre valor posa "Altres"
  - Anomena la columna com a "poder_adquisitiu" i ordena per salari de menor a major
28. Llista el codi dels departaments dels empleats que apareixen a la taula empleats.
29. Partint de la consulta anterior elimina els codis de departament repetits.
30. Calcula el nombre d'empleats que **no tenen** comissió assignada.
    
## 1.2.4 Consultes sobre una taula utilitzant agrupaments

1. Quants empleats van ser contractats l'any passat.
2. Quin és el treballador (nº d’anys no el nom del treballador) amb més anys d'antiguitat.
3. Quin és el treballador(nº d’anys no el nom del treballador) amb menys anys d'antiguitat.
4. Quin és el salari mig de l'empresa
5. Mostra el salari més alt i el més baix dels empleats. Anomena les columnes com a "salari_max" i "salari_min" respectivament.
6. Mostra la mitjana dels salaris i el número d’empleats que tenim. Arrodoneix la mitjana al número enter més pròxim i anomena les columnes com a salari_mig i num_empleats respectivament.
7. Mostra, per cada tipus de treball, la mitjana dels salaris. Ordena la informació per tipus de treball.
8. Quants empleats tenim assignats a cada tipus de treball? Ordena la informació per número d’empleats.
9. Quants empleats tenim assignats a cada departament? Mostra el  codi de departament i el número d’empleats que té. Ordena la informació per número d’empleats.
10. Partint de la consulta anterior, volem saber també quants empleats no tenen departament assignat. Mostra el text "No assignat" com a identificador del departament.
11. Quants directors (caps) diferents tenim? Anomena la columna com a "numero_de_directors"
12. Fes una consulta per calcular la diferència que hi  ha entre el salari màxim i el mínim dels empleats. Anomena la columna com a "diferencia".
13. Mostra, per cada cap, el número identificador de l’empleat (com a cap) i el salari de l’empleat pitjor pagat per a aquest cap. Exclou els empleats  que no tinguin assignat cap.
14. Partint de la consulta anterior, exclou també aquells caps en què el salari mínim sigui inferior o igual a 6.000.
15. Obté el número d’empleats contractats per cada any. Ordena la informació per any.
16. Mostra els codis de departament que tenen 3 o més empleats. Mostra només el codi del departament.
17. Mostra el nombre d'empleats que cobren més de 9.000 euros.


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