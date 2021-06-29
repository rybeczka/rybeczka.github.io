$(document).ready(function () {
    var mymap = L.map('mymap',
        { center: [52.1, 21.0], zoom: 10, zoomControl: true, attributionControl: false });

    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');


    lyrGoogleSat = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'),

        // lyrORTO = L.tileLayer.wms(
        //     ("http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer",
        //     {
        //         layers: "Raster",
        //         format: "image/png",
        //         transparent: "true",
        //         version: "1.1.1",
        //     }
        //     ),
        // )

        lyrORTO = L.tileLayer.wms("http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer",
            {
                layers: "Raster",
                format: 'image/png',
                transparent: 'true',
                version: '1.1.1'
            }),

        lyrSozo = L.tileLayer.wms("http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer",
            {
                layers: "Raster",
                format: 'image/png',
                transparent: 'true',
                version: '1.1.1'
            }),


        lyrMaz = L.tileLayer.wms("http://localhost:8080/geoserver/projekt_ATE/wms",
            {
                layers: "projekt_ATE:mazowieckie",
                format: 'image/png',
                transparent: 'true',
                version: '1.1.1'
            }),



        mymap.addLayer(lyrOSM);

    L.control.scale({ position: 'bottomleft', imperial: false, maxWidth: 200 }).addTo(mymap);

    // var lyrPRG = L.tileLayer.wms("http://localhost:8080/geoserver/projekt_ATE/wms",
    //     {
    //         layers: "projekt_ATE:Gminy",
    //         format: 'image/png',
    //         transparent: 'true',
    //         version: '1.1.1'

    //     });
    mymap.addLayer(lyrOSM);

    var baseMaps = {
        "Openstreetmap": lyrOSM,
        // "Gminy": lyrPRG,
        'Orto': lyrGoogleSat,
        "Ortofotomapa": lyrORTO,
        "sozologiczna": lyrSozo,
        "mazowieckie": lyrMaz,

    };
    L.control.layers(baseMaps).addTo(mymap);


});

