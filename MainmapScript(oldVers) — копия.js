//глобальные массивы
window.scs = [];
window.stuffs = [];
window.line = [];
window.obj = [];
window.TrackerIDs = [];
window.timecoord = [];
window.latlngs = [];
window.latlngsAfter = [];
window.latlngsFly = [];
window.idParents = [];
window.arrayOfIds = [];
window.idUp = [];
window.idUpdate = [];
window.idUsers = [];
/*
var mapset;
var stfLat;
var stfLon;
var linesmas;
var d;
var tracker;
var trackerOt;
var trackset;
var layerGR;
var line;
var lineDec;
var flyer;
var dateStOt;
var dateFnOt;
var popUp;
var elv;*/
//переменные (поля глобального обьекта)
window.d = {};
window.tracker = {};
window.trackerOt = {};
window.trackset = {};
window.layerGR = {};
window.line = {};
window.lineDec = {};
window.foo = {};
window.flyer = {};
window.dateStOt = {};
window.dateFnOt = {};
window.popUp = {};
window.elv = {};
//window.centrMarkerArr = {};





//





//определяем с какого устройства зашли на сайт
var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
    
}




//первоначальное получение данных при входе
function getListName() {
    /*var client = 22;
    var s = JSON.stringify({
        "Client": client
    });*/
    var s;
    dc.get('TruckingSystem/GetClients', function(HTTPstatus, response, passedOptions){
		if (HTTPstatus === 200) {
            var cli = JSON.parse(response).result[0];
            for (var i=0; i<cli.length; i++){
                idUsers[i]={
                    "id": cli[i].ID,
                    "Title": cli[i].Title
                }
            }
            s = JSON.stringify({
                "Client": cli
            });       
        }
    });
    dc.post('TruckingSystem/GetGroups', s, function(HTTPstatus, response, passedOptions) {
        if (HTTPstatus === 200) {
            var obj = JSON.parse(response).result[0];
            for (var i = 0; i < obj.length; i++) {
                idParents[i] = {
                    "id": obj[i].ID,
                    "Title": obj[i].Title,
                    "PpId": obj[i].ParentID
                }
            }
        }
    }); 
   

    dc.post('TruckingSystem/GetUnits', "", function(HTTPstatus, response, passedOptions) {
        if (HTTPstatus === 200) {
            obj = JSON.parse(response).result[0];
            for (var i = 0; i < obj.length; i++) {
                TrackerIDs[i] = obj[i].ID;
            }
            var Sensors = ['Lat', 'Lon', 'Ignition', 'Speed', 'FuelLevel', 'FuelLevel0', 'ExternalVoltage', 'Distance', 'DistanceRace', 'DistanceTO'];
            var s = JSON.stringify({
                "UnitIDArr": TrackerIDs,
                "Sensors": Sensors
            });
            dc.post('TruckingSystem/GetUnitsData', s, function(HTTPstatus, response, passedOptions) {
                if (HTTPstatus === 200) {
                    var res = JSON.parse(response).result[0];

                    for (var i = 0; i < obj.length; i++) {
                        scs[i] = {
                            "id": obj[i].ID,
                            "name": obj[i].Title,
                            "symbol": obj[i].Symbol,
                            "parentID": obj[i].ParentID,
                            "lat": res[i].Lat,
                            "lon": res[i].Lon,
                            "speed": res[i].Speed,
                            "status": res[i].UnitStatus,
                            "Ignition": res[i].Ignition,
                            "FuelLevel0": res[i].FuelLevel0,
                            "FuelLevel": res[i].FuelLevel,
                            "ExternalVoltage": res[i].ExternalVoltage,
                            "UnixTime": res[i].UnitTime,
                            "Distance": res[i].Distance,
                            "DistanceRace": res[i].DistanceRace,
                            "DistanceTO": res[i].DistanceTO
                        };
                    }
                    globalMap();
                }
            })
        }
    })
};

// получение обновленных данных
function updateDataMarkers() {
    var client = 52;
    var s = JSON.stringify({
        "Client": client
    });
    var Sensors = ['Lat', 'Lon', 'Ignition', 'Speed', 'FuelLevel', 'FuelLevel0', 'ExternalVoltage', 'Distance', 'DistanceRace', 'DistanceTO'];
    
    function compareNumbers(a, b) {
    return a - b;
    } 
    arrayOfIds.sort(compareNumbers);
    var s = JSON.stringify({
        "UnitIDArr": arrayOfIds,
        "Sensors": Sensors
    });
    dc.post('TruckingSystem/GetUnitsData', s, function(HTTPstatus, response, passedOptions) {
        if (HTTPstatus === 200) {
            var res = JSON.parse(response).result[0];
            for (var i = 0; i < idUp.length; i++) {
                idUpdate[i] = {
                    "id": idUp[i].id,
                    "name": idUp[i].name,
                    "symbol": idUp[i].symbol,
                    "lat": res[i].Lat,
                    "lon": res[i].Lon,
                    "speed": res[i].Speed,
                    "status": res[i].UnitStatus,
                    "Ignition": res[i].Ignition,
                    "FuelLevel0": res[i].FuelLevel0,
                    "FuelLevel": res[i].FuelLevel,
                    "ExternalVoltage": res[i].ExternalVoltage,
                    "UnixTime": res[i].UnitTime,
                    "Distance": res[i].Distance,
                    "DistanceRace": res[i].DistanceRace,
                    "DistanceTO": res[i].DistanceTO
                };

            }
        }
    })
}



function globalMap() {
     
    (function() {
        var pruneCluster = new PruneClusterForLeaflet(20, 20, 2);
        for (var i = 0; i < scs.length; i++) {
            //создаю кастомные маркеры
            var textStatus;
            if (scs[i].status.length < 3) {
                if (scs[i].speed > 5) {
                    var options = {
                        iconShape: 'marker',
                        backgroundColor: '#90F090',
                        isAlphaNumericIcon: true,
                        text: scs[i].symbol,
                        iconSize: [28, 28],
                        textColor: "#000;"
                    }
                    textStatus = "";
                } else {
                    var options = {
                        iconShape: 'marker',
                        borderColor: '#8B0000',
                        backgroundColor: '#F09090',
                        isAlphaNumericIcon: true,
                        text: scs[i].symbol,
                        iconSize: [28, 28],
                        textColor: "#000;"
                    }
                    textStatus = "";
                }
            } else {
                var options = {
                    iconShape: 'marker',
                    borderColor: '##696969',
                    backgroundColor: '#ccc',
                    isAlphaNumericIcon: true,
                    text: scs[i].symbol,
                    iconSize: [28, 28],
                    textColor: "#000;"
                }
                textStatus = "<br>" + "Статус: " + scs[i].status;
            }
            var textIgnition;
            var textFuelLevel0;
            var textExternalVoltage;
            var textFuelLevel;
            var UnixTimeUpdate;
            var textDistance;
            var textDistanceRace;
            var textDistanceTO;
            var lineshare = "<hr>" + "</hr>";
            var dateNow = Date.parse(new Date()) / 1000;
            var needDate = dateNow - scs[i].UnixTime;
            if (needDate >= 60 && needDate < 3600) {
                UnixTimeUpdate = "Получено: " + Math.round((needDate / 60)) + " мин. назад";
            } else if (needDate >= 3600 && needDate < 86400) {
                UnixTimeUpdate = "Получено: " + Math.round((needDate / 3600)) + " ч. назад";
            } else if (needDate >= 86400) {
                UnixTimeUpdate = "Получено: " + Math.round((needDate / 86400)) + " д. назад";
            } else {
                UnixTimeUpdate = "Получено: " + needDate + " сек. назад";
            }

            if (scs[i].Ignition != undefined) {
                textIgnition = "<br>" + "Зажигание: " + scs[i].Ignition;
            } else {
                textIgnition = ""
            };

            if (scs[i].FuelLevel0 != undefined) {
                textFuelLevel0 = "<br>" + "Топливо: " + Math.round(scs[i].FuelLevel0) + " л";
            } else {
                if (scs[i].FuelLevel != undefined) {
                    textFuelLevel0 = "<br>" + "Топливо: " + Math.round(scs[i].FuelLevel) + " л";
                } else {
                    textFuelLevel0 = ""
                }
            }
            if (scs[i].ExternalVoltage != undefined) {
                textExternalVoltage = "<br>" + "Напряжение: " + scs[i].ExternalVoltage.toFixed(1) + " В";
            } else {
                textExternalVoltage = ""
            };

            if (scs[i].Distance != undefined) {
                textDistance = "<br>" + "Общий пробег: " + Math.round(scs[i].Distance) + " км";
            } else {
                textDistance = ""
            };
            if (scs[i].DistanceRace != undefined) {
                textDistanceRace = "<br>" + "Пробег в рейсе: " + Math.round(scs[i].DistanceRace) + " км";
            } else {
                textDistanceRace = ""
            };
            if (scs[i].DistanceTO != undefined) {
                textDistanceTO = "<br>" + "Пробег с ТО: " + Math.round(scs[i].DistanceTO) + " км";
            } else {
                textDistanceTO = ""
            };

            //присвоение данных маркерам
            var marker = new PruneCluster.Marker(scs[i].lat, scs[i].lon);
            marker.data.popup = scs[i].name;
            marker.data.icon = L.BeautifyIcon.icon(options);
            marker.data.popup = "<b>" + scs[i].name + "</b>" + "<br>" + "Скорость: " + Math.round(scs[i].speed) + " км/ч" + textIgnition + textFuelLevel0 + textExternalVoltage + textDistance + textDistanceRace + textDistanceTO + lineshare + UnixTimeUpdate + textStatus + "<br>" + "<br/>" + "<button type='button' id='dropbtnminRemoveMarker' class='dropbtnminRemoveM' value='" + scs[i].id + "'>" + "remove marker" + "</button>" + "<button type='button' id='dropbtnminIDM' class='dropbtnminM' value='" + scs[i].id + "'>" + "menu" + "</button>";

            var polyline = L.polyline([
                [31, 32],
                [32.5, 33],
                [34, 33],
                [11, 23]
            ]);
            line = L.polyline([12, 12]);
            lineDec = L.polylineDecorator(line, {
                patterns: [{
                    offset: 0,
                    repeat: 20,
                    symbol: L.Symbol.arrowHead({
                        pixelSize: 15,
                        pathOptions: {
                            fillOpacity: 1,
                            weight: 0
                        }
                    })
                }]
            });
            popUp = L.popup([46.975033, 31.99999999]);
            latlngsFly = [scs[i].lat, scs[i].lon];
            var decorator = L.polylineDecorator(polyline, {
                patterns: [
                    {
                        offset: 0,
                        repeat: 20,
                        symbol: L.Symbol.arrowHead({
                            pixelSize: 15,
                            pathOptions: {
                                fillOpacity: 1,
                                weight: 0
                            }
                        })
                    }
                ]
            });

            //создаю блок для надписи активности
            var indicator = document.createElement('div');
            indicator.className = 'indi';
            indicator.id = "indi" + scs[i].id;

            stuffs[i] = {
                id: scs[i].id,
                name: scs[i].name,
                parentsId: scs[i].parentID,
                layer: marker,
                symbol: scs[i].symbol,
                status: scs[i].status,
                indicator: indicator.outerHTML,
                butt: scs[i].id,
                lat: scs[i].lat,
                lon: scs[i].lon,
                loadmo: scs[i].id,
                idDate: scs[i].id,
                layerpolyline: polyline,
                layerpolylineDecor: decorator,
                Line: line,
                LineDec: lineDec,
                layerPopUp: popUp,
                FlyTo: latlngsFly,
            }


        }

        // интервал, присваивает маркерам обновленные координаты  
        setInterval(() => {
            updateDataMarkers();
            for (var i = 0; i < idUp.length; i++) {
                var elem = document.getElementById("indi" + idUp[i].id);
                var ttext;
                var textStatus;
                if (idUp[i].status.length < 3) {
                    if (idUpdate[i].speed > 5) {
                        var options = {
                            iconShape: 'marker',
                            backgroundColor: '#90F090',
                            isAlphaNumericIcon: true,
                            text: idUpdate[i].symbol,
                            iconSize: [28, 28],
                            textColor: "#000;"
                        }
                        ttext = "<p style='color: #008000 '>Едет</p>";
                        textStatus = "";
                    } else {
                        var options = {
                            iconShape: 'marker',
                            borderColor: '#8B0000',
                            backgroundColor: '#F09090',
                            isAlphaNumericIcon: true,
                            text: idUpdate[i].symbol,
                            iconSize: [28, 28],
                            textColor: "#000;"
                        }
                        ttext = "<p style='color: #8B0000 '>Стоит</p>";
                        textStatus = "";
                    }

                } else {
                    var options = {
                        iconShape: 'marker',
                        borderColor: '#696969',
                        backgroundColor: '#ccc',
                        isAlphaNumericIcon: true,
                        text: idUpdate[i].symbol,
                        iconSize: [28, 28],
                        textColor: "#000;"
                    };
                    ttext = "<p style='color: #696969'>Ошибка</p>";
                    textStatus = "<br>" + "Статус: " + idUpdate[i].status;
                }

                var textIgnition;
                var textFuelLevel0;
                var textExternalVoltage;
                var textFuelLevel;
                var UnixTimeUpdate;
                var textDistance;
                var textDistanceRace;
                var textDistanceTO;
                var lineshare = "<hr>" + "</hr>";
                var dateNow = Date.parse(new Date()) / 1000;
                var needDate = dateNow - idUpdate[i].UnixTime;
                if (needDate >= 60 && needDate < 3600) {
                    UnixTimeUpdate = "Получено: " + Math.round((needDate / 60)) + " мин. назад";
                } else if (needDate >= 3600 && needDate < 86400) {
                    UnixTimeUpdate = "Получено: " + Math.round((needDate / 3600)) + " ч. назад";
                } else if (needDate >= 86400) {
                    UnixTimeUpdate = "Получено: " + Math.round((needDate / 86400)) + " д. назад";
                } else {
                    UnixTimeUpdate = "Получено: " + needDate + " сек. назад";
                }
                if (idUpdate[i].Ignition != undefined) {
                    textIgnition = "<br>" + "Зажигание: " + idUpdate[i].Ignition;
                } else {
                    textIgnition = ""
                };
                if (idUpdate[i].FuelLevel0 != undefined) {
                    textFuelLevel0 = "<br>" + "Топливо: " + Math.round(idUpdate[i].FuelLevel0) + " л";
                } else {
                    if (idUpdate[i].FuelLevel != undefined) {
                        textFuelLevel0 = "<br>" + "Топливо: " + Math.round(idUpdate[i].FuelLevel) + " л";
                    } else {
                        textFuelLevel0 = ""
                    }
                }

                if (idUpdate[i].ExternalVoltage != undefined) {
                    textExternalVoltage = "<br>" + "Напряжение: " + idUpdate[i].ExternalVoltage.toFixed(1) + " В";
                } else {
                    textExternalVoltage = ""
                };
                if (idUpdate[i].Distance != undefined) {
                    textDistance = "<br>" + "Общий пробег: " + Math.round(idUpdate[i].Distance) + " км";
                } else {
                    textDistance = ""
                };
                if (idUpdate[i].DistanceRace != undefined) {
                    textDistanceRace = "<br>" + "Пробег в рейсе: " + Math.round(idUpdate[i].DistanceRace) + " км";
                } else {
                    textDistanceRace = ""
                };
                if (idUp[i].DistanceTO != undefined) {
                    textDistanceTO = "<br>" + "Пробег с ТО: " + Math.round(idUpdate[i].DistanceTO) + " км";
                } else {
                    textDistanceTO = ""
                };

                elem.innerHTML = ttext;
                idUp[i].layer.Move(idUpdate[i].lat, idUpdate[i].lon);
                idUp[i].layer.data.icon = L.BeautifyIcon.icon(options);
                idUp[i].layer.data.popup = "<b>" + idUpdate[i].name + "</b>" + "<br>" + "Скорость: " + Math.round(idUpdate[i].speed) + " км/ч" + textIgnition + textFuelLevel0 + textExternalVoltage + textDistance + textDistanceRace + textDistanceTO + lineshare + UnixTimeUpdate + textStatus + "<br>" + "<br/>" + "<button type='button' id='dropbtnminRemoveMarker' class='dropbtnminRemoveM' value='" + idUpdate[i].id + "'>" + "remove marker" + "</button>" + "<button type='button' id='dropbtnminIDM' class='dropbtnminM' value='" + idUpdate[i].id + "'>" + "menu" + "</button>";
                idUp[i].FlyTo = [idUpdate[i].lat, idUpdate[i].lon];
                idUp[i].Line.addLatLng(new L.LatLng(idUpdate[i].lat, idUpdate[i].lon)).bindPopup("Трек");
                idUp[i].lat = idUpdate[i].lat;
                idUp[i].lon = idUpdate[i].lon;
                pruneCluster.ProcessView();
            }
        }, 5000);


        const tiles = [{
                id: 0,
                name: 'Google схема',
                layer: L.tileLayer('https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i349018013!3m9!2sen-US!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0', {
                    attribution: '&copy; <a href="https://www.google.com.ua/maps">Спутник</a>'
                })
            },
            {
                id: 1,
                name: 'Google снимки',
                layer: L.esri.basemapLayer('Imagery', {
                    maxZoom: 17,
                }),
                layTitle: L.esri.basemapLayer('ImageryLabels', {
                    maxZoom: 17,
                })
            },
        ];


        class Map {
            constructor(id) {
                this.id = id;
                this.layer = L.layerGroup();
                this.tileLayer = L.tileLayer();
                this.layTitle = L.featureGroup();
                this.layerGR = L.featureGroup();
                this.layerAfter = L.featureGroup();
                this.layerPopUpGr = L.featureGroup();
                this.map = {};
            }

            init() {
                this.map = L.map(this.id, {
                    zoom: 13,
                    center: [46.975033, 31.99999999],
                    zoomControl: false,
                });


                this.tileLayer = tiles[0].layer;
                this.tileLayer.addTo(this.map);
                this.layTitle.addTo(this.map);
                this.layer.addTo(this.map);
                this.layerPopUpGr.addTo(this.map);
                this.layerGR.addTo(this.map);
                this.layerAfter.addTo(this.map);
                this.map.addLayer(pruneCluster);

                L.control.scale({
                    position: 'bottomright',
                }).addTo(this.map);
                
                var osmGeocoder = new L.Control.OSMGeocoder();

                this.map.addControl(osmGeocoder);
                
                var sidebar = L.control.sidebar('sidebar').addTo(this.map);
                
                L.control.zoom({
                    position: 'topright',
                }).addTo(this.map);
                L.control.locate({
                    position: 'bottomright',
                    strings: {
                        title: "Моя локация"
                    }
                }).addTo(this.map);
            }




            drawItem(item, trackset) {
                pruneCluster.RegisterMarker(item.layer);
                pruneCluster.ProcessView();
                this.map.flyTo(item.layer.position);
            }

            drawPoline(itemq, latlngs) {
                itemq.layerpolyline.addTo(this.layerGR);
                itemq.layerpolylineDecor.addTo(this.layerGR);
                this.map.fitBounds(itemq.layerpolyline.getBounds());
            }
            
            centeringMarkers (centrMarkerArr) {
                //centrMarkerArr
                //this.map.fitBounds(centrMarkerArr.layer.getBounds());
                this.map.fitBounds(centrMarkerArr)
            }

            drawPopUp(result) {
                var needPopup = L.popup()
                    .setLatLng(result.latlng)
                    .setContent(result.address.Match_addr)
                    .openOn(this.map);
                this.needPopup.addTo(this.layerPopUpGr);
            }

            flyToItem(item) {
                clearInterval(flyer);
                flyer = setInterval(() => {
                    this.map.flyTo(item.layer.position);
                }, 3000);
            }

            removeflyToItem(item) {
                clearInterval(flyer);
            }

            removeItem(item) {
                pruneCluster.RemoveMarkers([item.layer]);
                pruneCluster.ProcessView();
                this.map.removeLayer(item.Line);
                this.map.removeLayer(item.LineDec);
                clearInterval(flyer);
            }

            removeline(itemq) {
                this.layerGR.clearLayers();
            }

            changeTile(item) {
                this.map.removeLayer(this.tileLayer);
                this.tileLayer = item.layer;
                this.tileLayer.addTo(this.map);
                if (item.id === 1) {
                    this.layTitle = item.layTitle;
                    this.layTitle.addTo(this.map);
                } else {
                    this.map.removeLayer(this.layTitle);
                }
            }

            drawItemAfter(item) {
                this.Line = L.layerGroup([item.Line]);
                this.Line.addTo(this.map);
                this.LineDec = L.layerGroup([item.LineDec]);
                this.LineDec.addTo(this.map);
                this.map.flyTo([item.lat, item.lon]);
                setInterval(() => {
                    if (item.Line._latlngs.length >= 500) {
                        item.Line._latlngs.shift();
                        item.LineDec._latlngs.shift();
                    } else {}
                }, 1000)

            }

            drawItemAfterM(item) {
                this.Line = L.layerGroup([item.Line]);
                this.Line.addTo(this.map);
                this.map.flyTo([item.lat, item.lon]);
                setInterval(() => {
                    if (item.Line._latlngs.length >= 500) {
                        item.Line._latlngs.shift();

                    } else {}
                }, 1000)
            }

            removeItemAfterM(item) {
                this.map.removeLayer(item.Line);
            }

            removeItemAfter(item) {
                this.map.removeLayer(item.Line);
                this.map.removeLayer(item.LineDec);
            }
        }



        let map = new Map('map');
        map.init();




        /*const stuffsBlock = document.querySelector('body').querySelector('#mapmenu').querySelector('.options').querySelector('.stuffs');*/
        const stuffsBlock = document.querySelector('body').querySelector('#sidebar').querySelector('.sidebar-content').querySelector('#home').querySelector('#optionId');
        
        /*const tilesBlock = document.querySelector('body').querySelector('#mapmenu').querySelector('.options').querySelector('.tiles').querySelector('ul');*/
        const tilesBlock = document.querySelector('body').querySelector('#sidebar').querySelector('.sidebar-content').querySelector('#profile').querySelector('#optionIdM');
        
        /*const skrolboxRem = document.querySelector('body').querySelector('#mapmenu').querySelector('.options').querySelector('.tiles').querySelector('.tileremoeTrack');*/
        const skrolboxRem = document.querySelector('body').querySelector('#sidebar').querySelector('.sidebar-content').querySelector('#profile').querySelector('#optionIdM').querySelector('.tileremoeTrack');



        const buttonRemove = document.createElement('div');
        const bt = `
          <button id="btnTrack" class="removeAllTrack">Удалить Все треки</button>
`;
        buttonRemove.innerHTML = bt;
        skrolboxRem.appendChild(buttonRemove);

        const buttonRemoveMarker = document.createElement('div');
        const btm = `
          <button id="btnMarker" class="removeAllMarker">Удалить Все маркеры</button>
`;
        buttonRemoveMarker.innerHTML = btm;
        buttonRemove.appendChild(buttonRemoveMarker);



        const tableStuffs = document.createElement('div');
        tableStuffs.className = 'tabStf';

        var f = "<table class='table table-striped' id='info-table'>\
					<tr>\
                        <th>Группы машин</th>\
					<tr>";
        for (var i = 0; i < idParents.length; i++) {
            if (idParents[i].PpId != 0) {
                f = f + '<tr>\
                    <td><div class="dropdownPar "id=' + "S" + idParents[i].PpId + ' ><button class="dropParents" value=' + idParents[i].id + '>' + idParents[i].Title + '</button><div id=' + idParents[i].id + " " + idParents[i].Title + ' class="parentDiv"></div></div></td>\
     ';


            } else {
                f = f + '<tr>\
                    <td><div class="dropdownPar"><button class="dropParent" value=' + idParents[i].id + '><img src="images/plus-square-regular.svg" alt="" class="classImageCar">' + idParents[i].Title + '</button><div id=' + idParents[i].id + " " + idParents[i].Title + ' class="parentDiv"></div></div></td>\
     ';

            }
        }
        f = f + '</table>';
        tableStuffs.innerHTML = f;
        stuffsBlock.appendChild(tableStuffs);




        for (var j = 0; j < idParents.length; j++) {
           
           /*var search = "<div class='form-group pull-right'><input type='text' class="+idParents[j].id+"search"+" placeholder='What you looking for?'></div>";*/
  
         //class='table table-striped'   
            var s =
                "<table class='table1 table table-hover table-bordered results' id="+idParents[j].id+"table"+">\
					<tr>\
                        <th></th>\
						<th>Объект</th>\
                        <th>Статус</th>\
                         <th></th>\
                        <th><input class='checkboxnewrem' type='checkbox' id='d2' title='Выбрать все'></th>\
					<tr>";
            for (var i = 0; i < stuffs.length; i++) {
                if (stuffs[i].parentsId === idParents[j].id) {
                    s = s + '<tr id='+ "tableTr" + stuffs[i].id + '>\
                    <td>' + stuffs[i].symbol + '</td>\
					<td>' + stuffs[i].name + '</td>\
					<td>' + stuffs[i].indicator + '</td>\
                    <td><div class="dropdownmin" id='+ "dropdownmin" + stuffs[i].id+'><button class="dropbtnmin" value=' + stuffs[i].butt + '>[...]</button></div></td>\
                    <td><input type="checkbox" id = ' + 'after' + stuffs[i].id + ' class="checkboxClass" name="stuffs" value=' + stuffs[i].id + '></td>\
                ';
                    var divPar = document.getElementById(idParents[j].id);
                    divPar.innerHTML = s;
                } else {}
            }
        }
        
        
       //функция поиска маркеров в группах
        $(document).ready(function() {
  var search = function(searchSelector, tableSelector) {
    $(searchSelector).keyup(function () {
    var searchTerm = $(searchSelector).val();
    var listItem = $(tableSelector + " tbody").children('tr');
    var searchSplit = searchTerm.replace(/ /g,"'):containsi('")
    
    $.extend($.expr[':'], {
      'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
      }
    });
    
    $(tableSelector + " tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
      $(this).attr('visible','false');
    });

  $(tableSelector + " tbody tr:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
  });

  var jobCount = $(tableSelector + ' tbody tr[visible="true"]').length;
    $(searchSelector + "Counter").text(jobCount + ' item');

  if(jobCount == '0') {$(tableSelector + ' .no-result').show();}
    else {$(tableSelector + ' .no-result').hide();}
		  });
  };
           /* for (var j = 0; j < idParents.length; j++) {
                search("#" + idParents[j].id + "search", "#" + idParents[j].id + "table");
            }*/
  search(".search1", ".table1");
  //search(".search2", ".table2");
});
        
        


        for (var i = 0; i < idParents.length; i++) {
            if (idParents[i].PpId != 0) {
                var blockPPid = idParents[i].PpId;
                $('#S' + blockPPid).appendTo($('#' + blockPPid));
            } else {}
        }

        //если нету елементов скрываем группы
        for (var g = 0; g < idParents.length; g++) {
            if ($('#' + idParents[g].id).children().length === 0) {  
                $('#' + idParents[g].id).parent().css('display', 'none');
            } else {}
        }

        const parentNoGrup = document.createElement("div");
        parentNoGrup.className = 'tabStfNoGrup';
        var fnoGr = "<table class='table table-striped' id='info-table'>\
					<tr>\
                        <th></th>\
					<tr>";
        var nameUser = localStorage.getItem('Login');
        var noGrup = [];
        fnoGr = fnoGr + '<tr>\
                    <td><div class="dropdownNoPar"><button class="dropNoParent" value=' + nameUser + '><img src="images/plus-square-regular.svg" alt="" class="classImageCar">' + nameUser + '</button><div id=' + nameUser + ' class="parentNoDiv"></div></div></td>\
     ';


        fnoGr = fnoGr + '</table>';

       // for (var j = 0; j < idParents.length; j++) {
            var s =
                "<table class='table1 table table-hover table-bordered results' id='info-table'>\
					<tr>\
                        <th></th>\
						<th>Объект</th>\
                        <th>Статус</th>\
                         <th></th>\
                        <th><input class='checkboxnewrem' type='checkbox' id='d2' title='Выбрать все'></th>\
					<tr>";
            for (var i = 0; i < stuffs.length; i++) {
                if (stuffs[i].parentsId === 0) {
                    parentNoGrup.innerHTML = fnoGr;
                    tableStuffs.appendChild(parentNoGrup)

                    s = s + '<tr id=' + "tableTr" + stuffs[i].id + '>\
                    <td>' + stuffs[i].symbol + '</td>\
					<td>' + stuffs[i].name + '</td>\
					<td>' + stuffs[i].indicator + '</td>\
                    <td><div class="dropdownmin" id='+ "dropdownmin" + stuffs[i].id+'><button class="dropbtnmin" value=' + stuffs[i].butt + '>[...]</button></div></td>\
                    <td><input type="checkbox" id = ' + 'after' + stuffs[i].id + ' class="checkboxClass" name="stuffs" value=' + stuffs[i].id + '></td>\
                ';
                    const divNoPar = document.getElementById(nameUser);
                    divNoPar.innerHTML = s;
                } else {}
            }
        //}

        if(idParents.length < 1 ){
            setTimeout(function(){
            sessionStorage.clear();
            $('.dropNoParent').trigger('click');
            }, 1000);
            //document.getElementById(nameUser).classList.toggle("showParNo");
           }


        $('.dropNoParent').click(function(e) {

            e.stopPropagation();
            arrayOfIds.length = 0;
            var selectedItem = document.getElementById(nameUser);
            if (selectedItem.classList.contains('showPar')) {
                document.getElementById(nameUser).classList.remove('showPar');
                $('.underMenu').remove();
            } else {
                idParents.forEach(function(itemq, i, idParents) {
                    var idParClose = itemq.id;
                    document.getElementById(idParClose).classList.remove('showPar');
                })
                document.getElementById(nameUser).classList.toggle("showParNo");

                arrayOfIds = $.map($('.checkboxClass', '#' + nameUser), function(n, i) {
                    return Number(n.value);
                });
                
                for (var k = 0; k < arrayOfIds.length; k++) {
                    sessionStorage.removeItem(arrayOfIds[k]);
                }
                
                for (var i = 0; i < sessionStorage.length; i++) {
                    let key = sessionStorage.key(i);
                    arrayOfIds.push(Number(key));

                }
                arrayOfIds.sort();

                idUp.length = 0;
                idUp = stuffs.filter(function(stuffs) {
                    return stuffs.parentsId == 0;
                });
                $('.underMenu').remove();
                e.stopPropagation();
            }

            e.stopPropagation();
        })
        
        
        //группы машин
        stuffsBlock.querySelectorAll(".dropParent").forEach(el => {
            el.addEventListener('click', function(e) {
                if (!e.target.matches('.idParents')) {
                    let itemq = idParents.find(n => {
                        return n.id == e.target.value;
                    });
   
                    e.stopPropagation();
                    var selectedItemId = itemq.id;
                    var selectedItem = document.getElementById(selectedItemId);

                    if (selectedItem.classList.contains('showPar')) {
                        document.getElementById(selectedItemId).classList.remove('showPar');
                        $('.underMenu').remove();
                    } else {
                        idParents.forEach(function(itemq, i, idParents) {
                            var idParClose = itemq.id;
                            document.getElementById(idParClose).classList.remove('showPar');
                        })
                        arrayOfIds.length = 0;
                        idUp.length = 0;
                        idUpdate.length = 0;

                        $('.underMenu').remove();

                        arrayOfIds = $.map($('.checkboxClass', '#' + selectedItemId), function(n, i) {
                            return Number(n.value);

                        });
                        
                        for (var k = 0; k < arrayOfIds.length; k++) {
                            sessionStorage.removeItem(arrayOfIds[k]);
                        }
                        
                        for (var i = 0; i < sessionStorage.length; i++) {
                            let key = sessionStorage.key(i);
                            arrayOfIds.push(Number(key));

                        }
                        arrayOfIds.sort();


                        idUp = stuffs.filter(function(v) {
                            return arrayOfIds.some(function(v2) {
                                return v.id == Number(v2) && v.item == v2.item;
                            })
                        });
                        if ($("#" +nameUser).length > 0 ) {
                        document.getElementById(nameUser).classList.remove("showParNo");
                        }
                        else {}
                        
                        document.getElementById(selectedItemId).classList.toggle("showPar");
                        
       
                        e.stopPropagation();
                    }

                    e.stopPropagation();


                }
            })
        });
        
        
   
        
        
        
        
        //вложеные группы машин
        stuffsBlock.querySelectorAll(".dropParents").forEach(el => {
            el.addEventListener('click', function(e) {
                if (!e.target.matches('.idParents')) {
                    let itemq = idParents.find(n => {
                        return n.id == e.target.value;
                    });

                    e.stopPropagation();
                    var selectedItemId = itemq.id;
                    var selectedItem = document.getElementById(selectedItemId);

                    if (selectedItem.classList.contains('showPar')) {
                        document.getElementById(selectedItemId).classList.remove('showPar');
                        $('.underMenu').remove();
                    } else {
                        $('.underMenu').remove();
                        document.getElementById(nameUser).classList.remove("showParNo");
                        document.getElementById(selectedItemId).classList.toggle("showPar");
                        e.stopPropagation();
                    }
                    e.stopPropagation();
                }
            })
        });


        pruneCluster.BuildLeafletCluster = function(cluster, position) {
            var m = new L.Marker(position, {
                icon: pruneCluster.BuildLeafletClusterIcon(cluster)
            });

            m.on('click', function() {
                var markersArea = pruneCluster.Cluster.FindMarkersInArea(cluster.bounds);
                var b = pruneCluster.Cluster.ComputeBounds(markersArea);

                if (b) {
                    var bounds = new L.LatLngBounds(
                        new L.LatLng(b.minLat, b.maxLng),
                        new L.LatLng(b.maxLat, b.minLng));

                    var zoomLevelBefore = pruneCluster._map.getZoom();
                    var zoomLevelAfter = pruneCluster._map.getZoom();
                    if (zoomLevelAfter === zoomLevelAfter) {
                        pruneCluster._map.fire('overlappingmarkers', {
                            cluster: pruneCluster,
                            markers: markersArea,
                            center: m.getLatLng(),
                            marker: m
                        });

                        pruneCluster._map.setView(position, zoomLevelAfter);
                    } else {
                        pruneCluster._map.fitBounds(bounds);
                    }
                }
            });


            return m;
        };



        var d = new Date();
        //получаем сегодняшнюю дату в нужномформате 
        var datestringToday = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
            ("0" + d.getDate()).slice(-2) + "T" + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

        var b = new Date(Date.now() - 86400000);
        //получаем вчерашнюю дату в нужномформате 
        var datestringYestarday = b.getFullYear() + "-" + ("0" + (b.getMonth() + 1)).slice(-2) + "-" +
            ("0" + b.getDate()).slice(-2) + "T" + ("0" + b.getHours()).slice(-2) + ":" + ("0" + b.getMinutes()).slice(-2);

        //присваиваем значени до и после нашим формам
        /*  for (var i=0; i<stuffs.length; i++){
         var dateControlStart = document.querySelector('#start' + stuffs[i].idDate );
         dateControlStart.value = datestringYestarday;
              var dateControlStartOt = document.querySelector('#startOt' + stuffs[i].idDate );
         dateControlStartOt.value = datestringYestarday;
              dateStOt = datestringYestarday;
         var dateControlFinish = document.querySelector('#finish' + stuffs[i].idDate);
        dateControlFinish.value = datestringToday;
               var dateControlFinishOt = document.querySelector('#finishOt' + stuffs[i].idDate);
        dateControlFinishOt.value = datestringToday;
             dateFnOt = datestringToday;
          }*/


        tilesBlock.querySelectorAll('input').forEach(el => {
            el.addEventListener('click', (e) => {
                let item = tiles.find(t => {
                    return t.id == e.target.value;
                });
                map.changeTile(item);
                e.stopPropagation();
            })
        });

        stuffsBlock.querySelectorAll(".checkboxClass").forEach(el => {
            el.addEventListener('change', function(e) {
                if (!e.target.matches('.stuffs')) {
                    let item = stuffs.find(s => {
                        return s.id == e.target.value;
                    })


                    if (this.checked === false) {
                        map.removeItem(item);
                        var idRemAl = item.id;
                        $('#afterCar' + idRemAl).prop('checked', false);
                        $('#fly' + idRemAl).prop('checked', false);
                        sessionStorage.removeItem(item.id, this.checked);
                        e.stopPropagation();
                    } else {
                        if ($('.checkboxClass:checked').length > 25) {
                            $(this).prop('checked', false);
                            alert("Вы не можете выбрать больше 25 машин одновременно");

                        } else {
                            trackset = [item.lat, item.lon];
                            map.drawItem(item, trackset);
                            var someVarName = "value";
                            localStorage.setItem("someVarKey", someVarName);
                            sessionStorage.setItem(item.id, this.checked);
                            e.stopPropagation();
                        }
                    }


                }
            })
        });

        stuffsBlock.querySelectorAll(".checkboxnewrem").forEach(el => {
            el.addEventListener('change', function newremBox(e) {

                if (this.checked === false) {
                    $('.checkboxClass').prop('checked', false);
                    stuffs.forEach(function(item, i, stuffs) {
                        map.removeItem(item);
                    })
                    pruneCluster.RemoveMarkers();
                    pruneCluster.ProcessView();
                    sessionStorage.clear();
                } else {

                    $('.checkboxClass').prop('checked', false);
                    stuffs.forEach(function(item, i, stuffs) {
                        map.removeItem(item);
                    })
                    sessionStorage.clear();


                    $(".checkboxClass:visible:lt(25)").prop('checked', true);

                    var values = [];
                    $('.checkboxClass:checked').each(function() {
                        var e = $(this);
                        values.push(e.val());
                        sessionStorage.setItem(e.val(), e.val());

                    });

                    for (var i = 0; i < stuffs.length; i++) {
                        for (var j = 0; j < values.slice(0, 25).length; j++) {
                            if (String(stuffs[i].id) === values[j]) {
                                trackset = [stuffs[i].lat, stuffs[i].lon];
                                map.drawItem(stuffs[i], trackset);

                            } else {


                            }
                        }
                    }
                }
                e.stopPropagation();
            })
        });

        skrolboxRem.querySelectorAll(".removeAllTrack").forEach(el => {
            el.addEventListener('click', function(e) {

                stuffs.forEach(function(itemq, i, stuffs) {
                    map.removeline(itemq);
                })
                e.stopPropagation();
            })
        });

        skrolboxRem.querySelectorAll(".removeAllMarker").forEach(el => {
            el.addEventListener('click', function(e) {

                stuffs.forEach(function(item, i, stuffs) {
                    map.removeItem(item);
                })
                for (var i = 0; i < sessionStorage.length; i++) {
                    var keyC = sessionStorage.key(i);
                    let item = stuffs.find(n => {
                        return n.id == sessionStorage.key(i);
                    });
                    $('#after' + keyC).prop('checked', false);
                }

                e.stopPropagation();
            })
        });


        class View {
            log(data) {
                var divUnderMenu = document.createElement('div');
                divUnderMenu.className = 'underMenu';
                var tableUnderMenu = '<div id=' + data.arr + ' class="dropdownmin-content"><a href="#" class="menuaclasss"><div class="dropdownTr"><button class="dropbtnTr" value=' + data.arr + '>Построить трек</button><div id=' + 'Tr' + data.arr + ' class="dropdown-contentTr"><div id=' + 'date' + data.arr + ' class="blockDate"><h4>Выбрать период:</h4><p>Начало:<p><input type="datetime-local" id=' + 'start' + data.arr + ' class="strt"> X<p>Конец:</p><input type="datetime-local" id=' + 'finish' + data.arr + ' class="strt"> X<br><button id="btntrack"  class="TrackDrawClass" name="Track" value=' + data.arr + '>Построить трек</button></div></div></div></a> <a href="#" class="menuaclass"><div class="dropdownAfter"><label class="after"><input type="checkbox" id = ' + 'afterCar' + data.arr + ' class="checkboxClassAfter" name="stuffs" value=' + data.arr + '>Строить трек за машиной</label></div></a>   <a href="#" class="menuaclass"><div class="dropdownFlyTo"><label class="flyTo"><input type="checkbox" id = ' + 'fly' + data.arr + ' class="checkboxClassFlyTo" name="stuffs" value=' + data.arr + '>Следовать за машиной</label></div></a>   <a href="#" class="menuaclassss"><div class="dropdownOt"><button class="dropbtnOt" value=' + data.arr + '>Сформировать отчет</button><div id=' + 'Ot' + data.arr + ' class="dropdown-contentOt"><div id=' + 'dateOt' + data.arr + ' class="blockDateOt"><h4>Выбрать период отчета:</h4><p>Начало отчета:<p><input type="datetime-local" id=' + 'startOt' + data.arr + ' class="strt"> X<p>Конец отчета:</p><input type="datetime-local" id=' + 'finishOt' + data.arr + ' class="strt"> X<br><button id="btntrackOt"  class="TrackDrawClassOt" name="TrackOt" value=' + data.arr + '>Получить</button></div></div></div></a>    </div>';
                divUnderMenu.innerHTML = tableUnderMenu;
                var startItem = document.getElementById(data.dataPlace);
                //var startItem = document.getElementById('dropdownmin'+data.arr);
                startItem.appendChild(divUnderMenu);
                divUnderMenu.style.position = 'absolute';
                divUnderMenu.style.zIndex = "999999";
                divUnderMenu.style.width = "200px";
                divUnderMenu.style.marginLeft = data.dataMarginLeft + "px"; 
                divUnderMenu.style.border = data.dataBorder;
                divUnderMenu.style.boxShadow = data.dataBoxShadow;
                
                
                
                //divUnderMenu.style.width = "65px";
                divUnderMenu.style.top = String(data.dataTop) + "px";
                divUnderMenu.style.left = String(data.dataLeft) + "px";
                if (sessionStorage.getItem('afterCar' + data.arr) === "true") {
                    $('#afterCar' + data.arr).prop('checked', true);
                }
                if (sessionStorage.getItem('fly' + data.arr) === "true") {
                    $('#fly' + data.arr).prop('checked', true);
                }
                  $('.dropdownTr').hover(function(){
	               $('.dropbtnTr').css( "background", "#d4cfcf" );
                    $('.menuaclasss').css( "background", "#d4cfcf" ) 
	               }, function(){
	                $('.dropbtnTr').css( "background", "");
                    $('.menuaclasss').css( "background", "")  
	               });
                  $('.dropbtnOt').hover(function(){
	               $('.dropbtnOt').css( "background", "#d4cfcf" );
                    $('.menuaclassss').css( "background", "#d4cfcf" )
	               }, function(){
	               $('.dropbtnOt').css( "background", "" );
                    $('.menuaclassss').css( "background", "" )
	           });
            }
        };

        class Model {
            constructor() {
                this.arr = [];
            }
            get data() {
                return this.arr;
            }
            set data(value) {
                this.arr = value.slice();
            }
            sort() {
                this.arr.sort((a, b) => a + b);
            }
        };

        class Controller {
            constructor(view, model) {
                this.view = view || new View();
                this.model = model || new Model();
            }
            eventHandler(e) {
                switch (e.target.getAttribute('class')) {
                    case 'dropbtnmin':
                        $('.underMenu').remove();
                        var rect = e.target.getBoundingClientRect();
                        this.model.dataPlace = "dropdownmin" + e.target.value;
                        this.model.dataTop = '';
                        this.model.dataLeft = '';
                        this.model.dataMarginLeft = -135;
                        this.model.dataBorder = '';
                        this.model.dataBoxShadow = '';
                        this.model.data = e.target.value;
                        this.view.log(this.model);
                        break;
                    case 'dropbtnminM':
                        $('.underMenu').remove();
                        var rect = e.target.getBoundingClientRect();
                        this.model.dataPlace = "body";
                        // this.model.dataIndexLeft = 0; 
                        if (isMobile === true) {
                        this.model.dataTop = document.documentElement.clientHeight/3;
                        this.model.dataLeft = (document.documentElement.clientWidth - 200)/2; 
                        this.model.dataMarginLeft = '';    
                        this.model.dataBorder = '1px solid black';
                        this.model.dataBoxShadow = '0 0 70px rgba(0,0,0,0.7)'; 
                        } else {
                        this.model.dataTop = rect.top + 20;
                        this.model.dataLeft = rect.left + 115;
                        this.model.dataMarginLeft = -135;
                        this.model.dataBorder = '';
                        this.model.dataBoxShadow = '';
                        }
                        this.model.data = e.target.value;
                        this.view.log(this.model);
                        break;
                    case 'mapClass leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom':
                        $('.underMenu').remove();
                        $('#menu__toggle').prop('checked', false);
                        break;
                    case 'tab-title':
                        $('.underMenu').remove();
                        break;
                        /*case 'dropdownPar':
                           $('.underMenu').remove();   
                           break;   */
                        /*     case 'stuffs': 
                             alert('sdf');
                          $('.underMenu').remove();   
                         break;*/
                        /*  case 'add': 
                            let newData = [], 
                                len = e.target.getAttribute('mvc-len') || 5; 
                            for (let i = 0; i < +len; i++)
                              newData[i] = Math.floor(Math.random()*10); 
                            this.model.data = newData; 
                            newData.splice(0, newData.length); 
                            break; 
                          case 'sort': 
                            this.model.data.sort(); 
                            break; */
                    default:
                        return;
                }
            }

            connectElements(selector, event) {
                let els = document.querySelectorAll(selector);
                for (let el of els)
                    el.addEventListener(event, e => this.eventHandler(e));
            }
        };

        const myView = new View(),
            myModel = new Model(),
            myController = new Controller(myView, myModel);
        //const myController = new Controller(); 
        myController.connectElements('div', 'click');


      

        // удалять меню при клике вне него
       /* $('.tabStf').click(function() {
            $('.underMenu').remove();
        });*/
        
        $(document).mouseup(function (e) {
            var container = $('.dropdownmin-content');
            if (container.has(e.target).length === 0){
               $('.underMenu').remove();
            }
        });

        // удалять меню при клике вне него (на карте)    
        $('.mapClass').on('touchstart click', function(e) {
            if (e.type == "touchstart") {
                $('#menu__toggle').prop('checked', false);
                if ($('.underMenu').length > 0) {
                    $('.underMenu').remove();
                    e.stopPropagation();
                } else {
                    e.stopPropagation();
                }
            } else {
                e.stopPropagation();
            }
        });




        // открывать и удалять подменю трека
        $("div").on("click", '.dropdownTr', function(elv) {
            if ($('.dropdown-contentTr').css('display') === 'block') {
                $('.dropdown-contentTr').css('display', 'none');
                elv.stopPropagation();
            } else {
                $('.dropdown-contentTr').css('display', 'block');
                elv.stopPropagation();
            }
        });



        // открывать и удалять подменю отчёта
        $("div").on("click", '.dropdownOt', function(elv) {
            if ($('.dropdown-contentOt').css('display') === 'block') {
                $('.dropdown-contentOt').css('display', 'none');
                elv.stopPropagation();
            } else {
                $('.dropdown-contentOt').css('display', 'block');
                elv.stopPropagation();
            }
        });



        // открывать и удалять подменю трека
        $("body").on("click", '.dropdownTr', function(elv) {
            if ($('.dropdown-contentTr').css('display') === 'block') {
                $('.dropdown-contentTr').css('display', 'none');
                elv.stopPropagation();
            } else {
                $('.dropdown-contentTr').css('display', 'block');
                elv.stopPropagation();
            }
        });



        // открывать и удалять подменю отчёта
        $("body").on("click", '.dropdownOt', function(elv) {
            if ($('.dropdown-contentOt').css('display') === 'block') {
                $('.dropdown-contentOt').css('display', 'none');
                elv.stopPropagation();
            } else {
                $('.dropdown-contentOt').css('display', 'block');
                elv.stopPropagation();
            }
        });



        //не скрывать при выборе дат
        $("div").on("click", '.blockDateOt', function(elv) {
            elv.stopPropagation();
        })



        //не скрывать при выборе дат
        $("div").on("click", '.blockDate', function(elv) {
            elv.stopPropagation();
        })



        //не скрывать при выборе дат (на карте)
        $("body").on("click", '.blockDateOt', function(elv) {
            elv.stopPropagation();
        })



        //не скрывать при выборе дат (на карте)
        $("body").on("click", '.blockDate', function(elv) {
            elv.stopPropagation();
        })



        //кнопка удалить маркер на маркере
        $("div").on("click", '.dropbtnminRemoveM', function(elv) {

            var valM = $(this).attr("value");
            let item = stuffs.find(s => {
                return s.id == valM;
            })

            $('#after' + valM).prop('checked', false);
            map.removeItem(item);
            elv.stopPropagation();
        });




        // отчёт на кнопку на меркере
        $("body").on("click", '.TrackDrawClassOt', function(e) {
            makeReport(e);
        })

        // отчёт на кнопку в главном меню
        $("div").on("click", '.TrackDrawClassOt', function(e) {
            makeReport(e);
        })




        // трек на кнопку на меркере
        $("body").on("click", '.TrackDrawClass', function(e) {
            composeTrack(e);
        })

        // трек на кнопку в главном меню
        $("div").on("click", '.TrackDrawClass', function(e) {
            composeTrack(e);
        })




        // рисовать трек за машиной на маркере
        $("body").on("change", '.checkboxClassAfter', function(e) {
            if (!e.target.matches('.idUp')) {
                let item = idUp.find(s => {
                    return s.id == e.target.value;
                })
                if (this.checked === false) {
                    map.removeItemAfter(item);
                    sessionStorage.removeItem('afterCar' + item.id, this.checked);
                } else {
                    sessionStorage.setItem('afterCar' + item.id, this.checked);
                    latlngsAfter.length = 0;
                    var idNeedChek = String(item.id);

                    var trackerAf = item.id;
                    var datS = Date.parse(new Date()) / 1000;
                    var datF = (Date.parse(new Date()) - 600000) / 1000;

                    var s = JSON.stringify({
                        "UnitID": trackerAf,
                        "Date1": datF,
                        "Date2": datS
                    });
                    dc.post('TruckingSystem/GetUnitTrack', s, function(HTTPstatus, response, passedOptions) {
                        if (HTTPstatus === 200) {
                            var obj = JSON.parse(response).result[0];
                            var arrColors = ["blue", "green", "orange", "red", "Violet", "aqua", "navy", "lime", "Indigo"];
                            for (var i = 0; i < obj.length; i++) {
                                latlngsAfter[i] = [obj[i].Lat, obj[i].Lon];
                                var colorLine = arrColors[Math.floor(Math.random() * arrColors.length)];
                                item.Line = L.polyline(latlngsAfter, {
                                    color: colorLine
                                });
                                item.LineDec = L.polylineDecorator(item.Line, {
                                    patterns: [{
                                        offset: 0,
                                        repeat: 30,
                                        symbol: L.Symbol.arrowHead({
                                            pixelSize: 10,
                                            pathOptions: {
                                                color: colorLine,
                                                fillOpacity: 1,
                                                weight: 0
                                            }
                                        })
                                    }]
                                });
                            }

                            if ($('#after' + idNeedChek).prop("checked") === false) {
                                $('#after' + idNeedChek).prop('checked', true);
                                map.drawItem(item);
                                map.drawItemAfter(item);
                                e.stopPropagation();
                            } else {
                                map.drawItemAfter(item);
                                
                            }
                            e.stopPropagation();
                        }
                    })
                }
            }
        })

        // рисовать трек за машиной в главном меню
        /*$("div").on("change", '.checkboxClassAfter', function(e) {
            if (!e.target.matches('.idUp')) {
                let item = idUp.find(s => {
                    return s.id == e.target.value;
                })
                if (this.checked === false) {
                    map.removeItemAfter(item);
                    sessionStorage.removeItem('afterCar' + item.id, this.checked);
                } else {
                    sessionStorage.setItem('afterCar' + item.id, this.checked);
                    latlngsAfter.length = 0;
                    var idNeedChek = String(item.id);

                    var trackerAf = item.id;
                    var datS = Date.parse(new Date()) / 1000;
                    var datF = (Date.parse(new Date()) - 600000) / 1000;

                    var s = JSON.stringify({
                        "UnitID": trackerAf,
                        "Date1": datF,
                        "Date2": datS
                    });
                    dc.post('TruckingSystem/GetUnitTrack', s, function(HTTPstatus, response, passedOptions) {
                        if (HTTPstatus === 200) {
                            var obj = JSON.parse(response).result[0];
                            var arrColors = ["blue", "green", "orange", "red", "Violet", "aqua", "navy", "lime", "Indigo"];
                            for (var i = 0; i < obj.length; i++) {
                                latlngsAfter[i] = [obj[i].Lat, obj[i].Lon];
                                var colorLine = arrColors[Math.floor(Math.random() * arrColors.length)];
                                item.Line = L.polyline(latlngsAfter, {
                                    color: colorLine
                                });
                                item.LineDec = L.polylineDecorator(item.Line, {
                                    patterns: [{
                                        offset: 0,
                                        repeat: 30,
                                        symbol: L.Symbol.arrowHead({
                                            pixelSize: 10,
                                            pathOptions: {
                                                color: colorLine,
                                                fillOpacity: 1,
                                                weight: 0
                                            }
                                        })
                                    }]
                                });
                            }

                            if ($('#after' + idNeedChek).prop("checked") === false) {
                                $('#after' + idNeedChek).prop('checked', true);
                                map.drawItem(item);
                                //  map.drawItemAfter(item);  
                                e.stopPropagation();
                            } else {
                                map.drawItemAfter(item);
                                e.stopPropagation();
                            }
                        }
                    })
                }
            }
        });*/




        // следить за машиной на маркере
        $("body").on("change", '.checkboxClassFlyTo', function(e) {
            if (!e.target.matches('.stuffs')) {
                let item = stuffs.find(s => {
                    return s.id == e.target.value;
                })

                if (this.checked === false) {
                    map.removeflyToItem(item);
                    sessionStorage.removeItem('fly' + item.id, this.checked);
                } else {
                    sessionStorage.setItem('fly' + item.id, this.checked);
                    stuffs.forEach(function(item, i, stuffs) {
                        $(".checkboxClassFlyTo").prop('checked', false);
                    })

                    trackset = [item.lat, item.lon];
                    var idNeedChekFly = String(item.id);
                    $('#fly' + idNeedChekFly).prop('checked', true);
                    if ($('#after' + idNeedChekFly).prop("checked") === false) {
                        $('#after' + idNeedChekFly).prop('checked', true);
                        map.drawItem(item, trackset);
                        map.flyToItem(item);
                    } else {
                        map.flyToItem(item);
                    }

                }

                e.stopPropagation();
            }
        })

        // следить за машиной в главном меню
        $("div").on("change", '.checkboxClassFlyTo', function(e) {
            if (!e.target.matches('.stuffs')) {
                let item = stuffs.find(s => {
                    return s.id == e.target.value;
                })

                if (this.checked === false) {
                    map.removeflyToItem(item);
                    sessionStorage.removeItem('fly' + item.id, this.checked);
                } else {
                    sessionStorage.setItem('fly' + item.id, this.checked);
                    stuffs.forEach(function(item, i, stuffs) {
                        $(".checkboxClassFlyTo").prop('checked', false);
                    })

                    trackset = [item.lat, item.lon];
                    var idNeedChekFly = String(item.id);
                    $('#fly' + idNeedChekFly).prop('checked', true);
                    if ($('#after' + idNeedChekFly).prop("checked") === false) {
                        $('#after' + idNeedChekFly).prop('checked', true);
                        map.drawItem(item, trackset);
                        map.flyToItem(item);
                    } else {
                        map.flyToItem(item);
                    }

                }

                e.stopPropagation();
            }
        });


        //закрыть меню при клике на карту
        $('.mapClass').click(function(w) {
           $('.sidebar-close').trigger('click');
        })
        
        
        
        

        // принудительная остановка функций в ненужных местах
        $('.blockDate').click(function(e) {
            e.stopPropagation();
        })
        $('.blockDateOt').click(function(e) {
            e.stopPropagation();
        })
        $('.tab-content').click(function() {
            var dropdowns = document.getElementsByClassName("dropdownmin-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove("show");
                    $('#' + openDropdown.id).css("position", "");
                    $('#' + openDropdown.id).css("display", "");
                } else {
                    openDropdown.classList.remove("show");
                    $('#' + openDropdown.id).css("position", "");
                    $('#' + openDropdown.id).css("display", "");
                }
            }
        })




        //главная функция отчёта
        function makeReport(e) {
            if (!e.target.matches('.stuffs')) {
                let itemq = stuffs.find(n => {
                    return n.id == e.target.value;
                });
                var displayWidth;
                if (isMobile === true) {
                    displayWidth = '96%';
                } else {
                    displayWidth = '700px';
                }
                
                //var newWin = window.open("indexOt.html");
                trackerOt = itemq.id;
                var nameCar = '<h2>' + "Отчет по машине: " + itemq.name + '</h2>';
                dateStOtf = document.getElementById("startOt" + trackerOt).value;
                dateStOt = dateStOtf.replace('T',' ');
                dateFnOtf = document.getElementById("finishOt" + trackerOt).value;
                dateFnOt = dateStOtf.replace('T',' ');
                var oneOt = Date.parse(document.getElementById("startOt" + trackerOt).value) / 1000;
                var twoOt = Date.parse(document.getElementById("finishOt" + trackerOt).value) / 1000;
                var s = JSON.stringify({
                    "UnitID": trackerOt,
                    "Date1": oneOt,
                    "Date2": twoOt
                });
                dc.post('TruckingSystem/GetUnitReport', s, function(HTTPstatus, response, passedOptions) {
                    if (HTTPstatus === 200) {
                       /* if (newWin == null || typeof(newWin) == 'undefined')
                            window.location.href = "indexOt.html";
                        else {}*/


                        var person = JSON.parse(response);
                        var pess = JSON.stringify(person.result[0].Data);
                        var pesss = JSON.stringify(person.result[0].Head);


                        const tableOt = document.createElement('div');


                        var sumDistanc = 0;

                        var m =
                            "<table style='margin: 10px auto; width:"+displayWidth +";'>\
					<tr>\
                        <th>Пробег</th>\
						<th></th>\
					<tr>";
                        for (var i = 0; i < person.result[0].Data.length; i++) {
                            sumDistanc += person.result[0].Data[i].Distance;
                        }
                        m = m + '<tr>\
                    <td>' + "Общий пробег" + '</td>\
					<td>' + Math.round(sumDistanc) + " км" + '</td>\
                ';

                        m = m + '</table>';

                        var newFuel = 0;
                        var allRefuel = 0;
                        var allDrainFuel = 0;
                        // style='border-spacing: 10px; border: 1px solid black; margin-bottom: 10px;
                        var n =
                            "<table style='margin: 10px auto;width:"+displayWidth +";'>\
					<tr>\
                        <th>Время</th>\
						<th>Заправка, л</th>\
                        <th>Слив, л</th>\
                        <th>Было, л</th>\
                        <th>Стало, л</th>\
					<tr>";
                        for (var i = 0; i < person.result[0].Data.length; i++) {
                            if (person.result[0].Data[i].Refueling > 30 || person.result[0].Data[i].FuelDrain != 0) {
                                allRefuel += person.result[0].Data[i].Refueling;
                                allDrainFuel += person.result[0].Data[i].FuelDrain;
                                if (person.result[0].Data[i].Refueling != 0) {
                                    newFuel = (person.result[0].Data[i].Values[7] + person.result[0].Data[i].Refueling)
                                } else {
                                    newFuel = (person.result[0].Data[i].Values[7] - person.result[0].Data[i].FuelDrain)
                                }


                                for (var j = i; j < person.result[0].Data.length; j++) {
                                    if (person.result[0].Data[j].Refueling != 0) {
                                        var refuelNew = person.result[0].Data[i].Refueling + person.result[0].Data[j].Refueling;
                                    } else {
                                        var refuelNew = person.result[0].Data[i].Refueling
                                    }
                                }


                                n = n + '<tr>\
                    <td>' + person.result[0].Data[i].Moment.replace('T',' ') + '</td>\
					<td>' + Math.round(refuelNew) + '</td>\
                    <td>' + Math.round(person.result[0].Data[i].FuelDrain) + '</td>\
                    <td>' + Math.round(person.result[0].Data[i].Values[7]) + '</td>\
                    <td>' + Math.round(newFuel) + '</td>\
                ';
                            } else {}
                        }
                        n = n + '<tr>\
                    <td style="text-align: left;"><b>' + "Итог: " + '</td>\
                    <td><b>' + Math.round(allRefuel) + '</td>\
					<td><b>' + Math.round(allDrainFuel) + '</td>\
                    <td><b>' + "" + '</td>\
                    <td><b>' + "" + '</td>\
'
                        n = n + '</table>';


                        var fuelOutRun = 0;
                        var fuelOutStay = 0;
                        var fuelOutAll = 0;
                        var q =
                            "<table style='margin: 10px auto; width:"+displayWidth +";'>\
					<tr>\
                        <th>Топливо</th>\
						<th>Было в баке</th>\
                        <th>Расход общий</th>\
                        <th>Слив</th>\
                        <th>Заправка</th>\
                        <th>Остаток в баке</th>\
					<tr>";
                        for (var i = 0; i < person.result[0].Data.length; i++) {
                            var statrValFuel = person.result[0].Data[0].Values[7];
                            if (person.result[0].Data[i].Status === 1) {
                                if (person.result[0].Data[i].FuelCount > 0) {
                                    fuelOutRun += person.result[0].Data[i].FuelCount
                                } else {}
                            } else {
                                fuelOutStay += person.result[0].Data[i].FuelCount
                            }
                        }

                        q = q + '<tr>\
                    <td>' + "Топливо, л" + '</td>\
                    <td>' + Math.round(statrValFuel) + '</td>\
                    <td>' + Math.round((fuelOutRun + fuelOutStay)) + '</td>\
                    <td>' + Math.round(allDrainFuel) + '</td>\
                    <td>' + Math.round(allRefuel) + '</td>\
                    <td>' + Math.round((statrValFuel + allRefuel - allDrainFuel - fuelOutRun - fuelOutStay)) + '</td>\
                ';

                        q = q + '</table>';



                        var runCar = 0;
                        var allrunCar = 0;
                        var k =
                            "<table style='margin: 10px auto; width:"+displayWidth +" '>\
					<tr>\
                        <th>Расход топлива</th>\
                        <th>Всего</th>\
					<tr>";
                        for (var i = 0; i < person.result[0].Data.length; i++) {
                            if (person.result[0].Data[i].Status === 1) {
                                runCar += person.result[0].Data[i].Distance
                            } else {}
                        }

                        k = k + '<tr>\
                    <td>' + "Расход, л/100км" + '</td>\
                    <td>' + ((fuelOutRun + fuelOutStay) / sumDistanc * 100).toFixed(1) + '</td>\
                ';

                        k = k + '</table>';

                        var newWin = window.open("indexOt.html");
                        if (newWin == null || typeof(newWin) == 'undefined')
                            window.location.href = "indexOt.html";
                        else {}
                        newWin.onload = function() {
                             
                            // создать div в документе нового окна
                            var div = newWin.document.createElement('div'),
                                body = newWin.document.body;

                            div.style.width = "100%";
                            div.style.height = "100%";
                            div.style.textAlign = "center";
                            div.innerHTML = nameCar + dateStOt + " - " + dateFnOt + m + n + k + q;
                            body.style.background = 'white'
                            // вставить первым элементом в body нового окна
                            body.insertBefore(div, body.firstChild);
                        }


                    }
                });

            }
        };

        //главная функция трека
        function composeTrack(e) {
            if (!e.target.matches('.stuffs')) {
                let itemq = stuffs.find(n => {
                    return n.id == e.target.value;
                });
                if (this.checked === false) {
                    map.removeline(itemq)
                } else {

                    latlngs.length = 0;
                    tracker = itemq.id;
                    // var offset = new Date().getTimezoneOffset()*60;

                    var one = Date.parse(document.getElementById("start" + tracker).value) / 1000;
                    var two = Date.parse(document.getElementById("finish" + tracker).value) / 1000;
                    // GetUnitTrack();
                    var s = JSON.stringify({
                        "UnitID": tracker,
                        "Date1": one,
                        "Date2": two
                    });
                    dc.post('TruckingSystem/GetUnitTrack', s, function(HTTPstatus, response, passedOptions) {
                        if (HTTPstatus === 200) {
                            var obj = JSON.parse(response).result[0];
                            var arrColors = ["blue", "green", "orange", "red", "Violet", "aqua", "navy", "lime", "Indigo"];
                            for (var i = 0; i < obj.length; i++) {
                                timecoord[i] = {
                                    "t": obj[i].t,
                                    "lt": obj[i].Lat,
                                    "ln": obj[i].Lon
                                };
                                latlngs[i] = [obj[i].Lat, obj[i].Lon];
                                //mapset = [obj[1].Lat, obj[1].Lon];
                                var colorLine = arrColors[Math.floor(Math.random() * arrColors.length)];
                                itemq.layerpolyline = L.polyline(latlngs, {
                                    color: colorLine
                                })
                                itemq.layerpolylineDecor = L.polylineDecorator(itemq.layerpolyline, {
                                    patterns: [{
                                        offset: 0,
                                        repeat: 30,
                                        symbol: L.Symbol.arrowHead({
                                            pixelSize: 10,
                                            pathOptions: {
                                                color: colorLine,
                                                fillOpacity: 1,
                                                weight: 0
                                            }
                                        })
                                    }]
                                });
                            }
                            //  mapset = latlngs[Math.floor((latlngs.length - 1) / 2)];

                            // var zoomLevel = 9;
                            map.drawPoline(itemq, latlngs);

                            $('#menu__toggle').prop('checked', false);
                            var dropdowns = document.getElementsByClassName("dropdownmin-content");
                            var i;
                            for (i = 0; i < dropdowns.length; i++) {
                                var openDropdown = dropdowns[i];
                                if (openDropdown.classList.contains('show') || openDropdown.classList.contains('showMap')) {
                                    openDropdown.classList.remove("show");
                                    openDropdown.classList.remove("showMap");
                                } else {
                                    openDropdown.classList.remove("show");
                                    openDropdown.classList.remove("showMap")
                                }
                            }
                        }
                        e.stopPropagation();
                    })
                }
            }
        }


        //главная функция трека за маркером
        /* function drawTrackAfterCar (e) {
    
      if (!e.target.matches('.stuffs')) {
        let item = stuffs.find(s => {
                return s.id == e.target.value;
            }) 
    
        if ( this.checked === false) {
          // latlngsAfter.length = 0;

           map.removeItemAfter(item)
    } 
    else { 
        latlngsAfter.length = 0;
      // A.length = 0
       //  item.Line= L.polyline(latlngsAfter, {color: colorLine})
      //  latlngsAfter.length = 0;
        var idNeedChek = String(item.id);
       
  
       var trackerAf = item.id;
          var datS = Date.parse(new Date()) /1000;
         var datF = (Date.parse(new Date())-600000) /1000;
       // var ones = Date.parse(document.getElementById("start" + tracker).value) /1000;
        //var twos = Date.parse(document.getElementById("finish" + tracker).value) /1000;
        
     var s = JSON.stringify({"UnitID": trackerAf,"Date1":datF,"Date2":datS});
	dc.post('TruckingSystem/GetUnitTrack', s, function(HTTPstatus, response, passedOptions){
		if (HTTPstatus === 200) {
			var obj = JSON.parse(response).result[0];
            var arrColors = [ "blue", "green", "orange", "red", "Violet", "aqua", "navy", "lime", "Indigo" ];
			for (var i=0; i<obj.length; i++){
               // timecoord[i] = {"t": obj[i].t, "lt": obj[i].Lat, "ln":obj[i].Lon};
                 latlngsAfter[i] = [ obj[i].Lat, obj[i].Lon];
                //mapsetAfter = [obj[1].Lat, obj[1].Lon];
                var colorLine = arrColors[Math.floor(Math.random() * arrColors.length)];
               item.Line = L.polyline(latlngsAfter, {color: colorLine});
               item.LineDec = L.polylineDecorator(item.Line, {
        patterns: [
        {offset: 0, repeat: 30, symbol: L.Symbol.arrowHead({pixelSize: 10, pathOptions: {color: colorLine, fillOpacity: 1, weight: 0}})}
    ]
});
             }    
            if ( $('#after' + idNeedChek).prop( "checked" ) === false) { 
     $('#after' + idNeedChek).prop('checked', true);
                 map.drawItemAfter(item);  
          map.drawItem(item);
         
       } else {map.drawItemAfter(item);  }
          
        }
       
        }) 
             
   
    }
           
e.stopPropagation();
  }
  }*/

        //главная функция слежения за маркером 
        /* stuffsBlock.querySelectorAll(".checkboxClassFlyTo").forEach(el => {
  el.addEventListener('change', function (e) {  
      if (!e.target.matches('.stuffs')) {
        let item = stuffs.find(s => {
                return s.id == e.target.value;
            }) 
    
        if ( this.checked === false) {
          // latlngsAfter.length = 0;

          map.removeflyToItem(item);
    } 
    else { 
         stuffs.forEach(function(item, i, stuffs) {
               $(".checkboxClassFlyTo").prop('checked', false); 
            })
        
     trackset = [item.lat, item.lon];
       
        var idNeedChekFly = String(item.id);
     $('#fly' + idNeedChekFly).prop('checked', true); 
    // $('#after' + idNeedChekFly).prop('checked', true);
         if ( $('#after' + idNeedChekFly).prop( "checked" ) === false) { 
     $('#after' + idNeedChekFly).prop('checked', true);
             map.drawItem(item,trackset);
         map.flyToItem(item);
         }
        else {map.flyToItem(item);}
 
    }
           
e.stopPropagation();
  }
  })});*/



        // кнопка поиска по координатам
        var geocodeService = L.esri.Geocoding.geocodeService();
        $('.buttonFindAddress').click(function findAddFunc() {
            alert("fgfg");
            var addressVal = document.getElementById("inputFindAddressId").value;
            var stations = [addressVal];

            for (var i = 0; i < stations.length; i++) {
                var inputAdd = stations[i];
                var semiC = inputAdd.indexOf(',');
                var name = inputAdd.slice(semiC + 1);
                var results = name;
                var textQ = inputAdd.split(",")[0];
                var latQ = Number(textQ);
                var lonQ = Number(results)


            }
            //var result = [latQ, lonQ];
            map.drawPopUp(result);
            /*geocodeService.reverse().latlng([latQ, lonQ]).run(function(error, result) {
                if (error) {
                    return;
                }
                map.drawPopUp(result);

               
            });*/
        })



        // маркеры если меньше 10 или если были нажаты и произошла перезагрузка
        $(document).ready(function() {
            var some_id = $('.geocoder-control-input leaflet-bar');
            some_id.prop('type', 'text');
            some_id.removeAttr('autocomplete');
        });
        if (stuffs.length <= 10 && sessionStorage.length == 0) {
             setTimeout(function(){
            $('.checkboxnewrem').trigger('click');
            }, 1100);
            sessionStorage.clear();
        /*    $('.checkboxnewrem').prop('checked', true);

            $('.checkboxClass').prop('checked', false);
            stuffs.forEach(function(item, i, stuffs) {
                map.removeItem(item);
            })

            sessionStorage.clear();


            $(":visible").prop('checked', true);

            var values = [];
            $('.checkboxClass:checked').each(function() {
                var e = $(this);
                values.push(e.val());
                sessionStorage.setItem(e.val(), e.val());

            });

            for (var i = 0; i < stuffs.length; i++) {
                for (var j = 0; j < values.length; j++) {
                    if (String(stuffs[i].id) === values[j]) {
                        trackset = [stuffs[i].lat, stuffs[i].lon];
                        map.drawItem(stuffs[i], trackset);
                    } else {

                    }
                }
            }*/

        } else {
            if (sessionStorage.length > 0) {
                var centrMarkerArr = [];
                for (var i = 0; i < sessionStorage.length; i++) {
                    var key = sessionStorage.key(i);
                    let item = stuffs.find(n => {
                        return n.id == sessionStorage.key(i);
                    });
                    $('#after' + key).prop('checked', true);
                    map.drawItem(item, trackset);
                    centrMarkerArr[i] = [item.lat, item.lon];
                    
                }
                map.centeringMarkers(centrMarkerArr);
            } else {}
        }


        

    })()
};
//конец карты

