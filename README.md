# WhatTimeIsItAPI
Express App lavet med brug af express generator. 
Appen presentere både json endpoints samt en statisk html/css/javascript side.<br>
Appen tagerr brug af ejs som den view engine.  
Appen bruger en mongoDB database til at store alarmer: 
Appens database connection er opsat genne mongoose, mongoose er en odm (Objekt document modeling).
 - Fra mongoose er der brugt schemas samt models 

## Base App 
- Express App der kan vise hvad klokken er gennem en html/css side findes på Routen /time dette ur er sat til at virke gennem setInterval. 
- Appen kan retunere dato vi har gennem routen /dato dette er en json route.
- Appen kan retunere klokken gennem routen /klokkeslet dette er en json route.

## Udvide App 
Appen kan sætte et alarm hvis man poster til routen /alarm. 
Appen retunere et json objekt der indenholder alle alarmer sat ved en get request på routen /alarm
Appen kan slette en alarm der er sat ved at lave en delete request til /alarm/:id
Appen kan opdatere en alarm der er sat ved at lave en put request til /alarm/:id
