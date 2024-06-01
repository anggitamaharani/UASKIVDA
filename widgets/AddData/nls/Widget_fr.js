// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/AddData/nls/strings":{_widgetLabel:"Ajouter des donn\u00e9es",noOptionsConfigured:"Aucune option n'a \u00e9t\u00e9 configur\u00e9e.",tabs:{search:"Rechercher",url:"URL",file:"Fichier"},search:{featureLayerTitlePattern:"{serviceName} - {layerName}",layerInaccessible:"La couche est inaccessible.",loadError:"AddData, chargement impossible\u00a0:",searchBox:{search:"Rechercher",placeholder:"Rechercher..."},bboxOption:{bbox:"Au sein de la carte"},scopeOptions:{anonymousContent:"Contenu",
myContent:"Mon contenu",myOrganization:"Organisation",curated:"Organis\u00e9",ArcGISOnline:"ArcGIS Online"},sortOptions:{prompt:"Trier par\u00a0:",relevance:"Pertinence",title:"Titre",owner:"Propri\u00e9taire",rating:"Evaluation",views:"Vues",date:"Date",switchOrder:"Basculer"},typeOptions:{prompt:"Type",mapService:"Service de carte",featureService:"Service d'entit\u00e9s",imageService:"Service d'imagerie",vectorTileService:"Services de tuiles vectorielles",kml:"KML",wms:"WMS"},resultsPane:{noMatch:"Aucun r\u00e9sultat n'a \u00e9t\u00e9 trouv\u00e9."},
paging:{first:"\x3c\x3c",firstTip:"Premier",previous:"\x3c",previousTip:"Pr\u00e9c\u00e9dent",next:"\x3e",nextTip:"Suivant",pagePattern:"{page}"},resultCount:{countPattern:"{count} {type}",itemSingular:"El\u00e9ment",itemPlural:"El\u00e9ments"},item:{actions:{add:"Ajouter",close:"Fermer",remove:"Supprimer",details:"D\u00e9tails",done:"Termin\u00e9",editName:"Mettre \u00e0 jour le nom"},messages:{adding:"Ajout en cours...",removing:"Suppression...",added:"Ajout\u00e9",addFailed:"Echec de l'ajout",
unsupported:"Pas de prise en charge"},typeByOwnerPattern:"{type} par {owner}",dateFormat:"d MMMM yyyy",datePattern:"{date}",ratingsCommentsViewsPattern:"{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",ratingsCommentsViewsLabels:{ratings:'ratings", "comments": "comments", "views": "views'},types:{"Map Service":"Service de carte","Feature Service":"Service d'entit\u00e9s","Image Service":"Service d'imagerie","Vector Tile Service":"Services de tuiles vectorielles",WMS:"WMS",KML:"KML"}}},
addFromUrl:{type:"Type",url:"URL",types:{ArcGIS:"Service Web ArcGIS Server",WMS:"Service Web OGC WMS",WMTS:"Service Web OGC WMTS",WFS:"Service Web OGC WFS",KML:"Fichier KML",GeoRSS:"Fichier GeoRSS",CSV:"Fichier CSV"},samplesHint:"URL(s) d'exemple",invalidURL:"Saisissez une URL commen\u00e7ant par http:// ou https://. "},addFromFile:{intro:"Vous pouvez d\u00e9placer ou recherchez l'un des types de fichiers suivants\u00a0:",types:{Shapefile:"Un fichier de formes (.zip, archive\u00a0ZIP contenant tous les fichiers de formes)",
CSV:"Un fichier\u00a0CSV (.csv, avec adresse ou latitude, longitude et valeurs s\u00e9par\u00e9es par des virgules, des points-virgules ou des tabulations)",KML:"Un fichier KML (.kml)",GPX:"Un fichier GPX (.gpx, GPS Exchange Format)",GeoJSON:"Un fichier GeoJSON (.geo.json ou .geojson)"},generalizeOn:"G\u00e9n\u00e9raliser les entit\u00e9s pour l\u2019affichage Web",dropOrBrowse:"D\u00e9placer ou rechercher",browse:"Parcourir",invalidType:"Ce type de fichier n'est pas pris en charge.",addingPattern:"{filename}\u00a0: en cours d'ajout...",
addFailedPattern:"{filename}\u00a0: \u00e9chec d'ajout",featureCountPattern:"{filename}\u00a0: {count} entit\u00e9(s)",invalidTypePattern:"{filename}\u00a0: ce type n'est pas pris en charge",maxFeaturesAllowedPattern:"Un maximum de {count} entit\u00e9s est autoris\u00e9",layerNamePattern:"{filename} - {name}",generalIssue:"Un probl\u00e8me s\u2019est produit.",kmlProjectionMismatch:"La r\u00e9f\u00e9rence spatiale de la carte et la couche KML ne concordent pas et la conversion ne peut pas s\u2019effectuer sur le client.",
featureLocationsCouldNotBeFound:"Impossible de localiser les entit\u00e9s\u00a0: champs de localisation inconnus ou non valides. Le fichier sera ajout\u00e9 sous la forme d\u2019une table."},layerList:{caption:"Couches",noLayersAdded:"Aucune couche n'a \u00e9t\u00e9 ajout\u00e9e.",removeLayer:"Supprimer une couche",back:"Pr\u00e9c\u00e9dent"},_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}}});