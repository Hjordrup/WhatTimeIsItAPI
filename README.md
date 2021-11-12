# WhatTimeIsItAPI

## Base App 
- Express App der kan vise hvad klokken er gennem en html/css side findes på Routen /time
- Appen kan retunere dato vi har gennem routen /dato dette er en json route.
- Appen kan retunere klokken gennem routen /klokkeslet dette er en json route.

## Udvide App 
Appen kan sætte et alarm hvis man poster til routen /alarm. 
Appen retunere et json objekt der indenholder alle alarmer sat ved en get request på routen /alarm
Appen kan slette en alarm der er sat ved at lave en delete request til /alarm/:id
Appen kan opdatere en alarm der er sat ved at lave en put request til /alarm/:id
