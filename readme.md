Javascript Engine
Call Stack

	• Szinkron végrhajtású nyelv, azaz egyszerre 1 parancs hajtódik végre fentről lefelé
	• A programunk a main-ben kezd el végrehajtódni, fv híváskor a végrehajtás átadódik a fv-nek
	• A call stack azon lista ami elemeknek a végrehajtás át lett adva

	• Tehát egy hosszabb ideig tartó művelet esetén sem fut tovább a kód
	• User interface interaktivitása miatt ez nem megengedhető

	• Legegyszerűbb példa a setTimeout(function() {}) fv
	• Az aszinkron műveletek tipikusan függvény várnak paraméternként
	
	• 
	
	
	• Az aszinkron műveletek kihelyeződnek a stackből
	• A web api eredménye bekerül callback queque-be
	• Majd az event loopba,
	• Ha a stack kiürült (szinkron kód lefutott) 
	• Az event loop  a que-t beteszi a stackbe
	
	Ajax requests
	
	• Aszinkron működés
	• 
	
    callback 
     - függvény, ami akkor hívunk meg ha a readystatechange 4 lesz és 200 a status

-------------------------------------------------------------------------------------------

login flow
regres.in

successful login -> sendRequest POST-> get token -> send token GET -> get users array
 - az első request-től függ a második
 - az egymástól függő requestek beágyazottsága
 - erre megoldás a promise