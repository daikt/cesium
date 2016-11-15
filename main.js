

var camera_start = Cesium.Cartesian3.fromDegrees(135.0, 35.0, 1000);
var camera_direction = Cesium.Cartesian3.fromDegrees(-75.0, 70.0, 0);


// In an application that uses Viewer:
var viewer = new Cesium.Viewer('cesium', {
    baseLayerPicker : false,
    terrainProvider : new Cesium.CesiumTerrainProvider({
        url : '//assets.agi.com/stk-terrain/world'
    })
});


// polygon in Mt.Rokko(japan)
var poly_rokko = viewer.entities.add({
  name:'rokko',
  polygon:{
    hierarchy:Cesium.Cartesian3.fromDegreesArray([
      135.209418, 34.764708,
      135.272246, 34.764708,
      135.271302, 34.739039,
      135.224438, 34.732973
    ]),
    material:Cesium.Color.RED.withAlpha(0.5),
  }
});
//viewer.zoomTo(poly_rokko);


// polygon in Mt.Fuji(japan)
var poly_fuji = viewer.entities.add({
  name:'fuji',
  polygon:{
    hierarchy:Cesium.Cartesian3.fromDegreesArray([
      138.70984840392, 35.381418228149,
      138.73302268981, 35.384336471557006,
      138.7658958435,  35.361591339111,
      138.76031684875, 35.331293106079
    ]),
    material:Cesium.Color.RED.withAlpha(0.5),
  }
});
//viewer.zoomTo(poly_fuji);


// polygon in Matterhorn(switzerland)
var poly_matterhorn = viewer.entities.add({
  name:'matterhorn',
  polygon:{
    hierarchy:Cesium.Cartesian3.fromDegreesArray([
      7.667897, 46.015089,
      7.700770, 45.965377,
      7.656005, 45.951467,
      7.624718, 45.989451
    ]),
    material:Cesium.Color.RED.withAlpha(0.5),
  }
});
//viewer.zoomTo(poly_matterhorn);


// polygon in GrandCanyon(US)
var poly_grandcanyon = viewer.entities.add({
  name:'grandcanyon',
  polygon:{
    hierarchy:Cesium.Cartesian3.fromDegreesArray([
      -112.148278, 36.130477,
      -112.034444, 36.121005,
      -112.044496, 36.068991,
      -112.140371, 36.071896
    ]),
    material:Cesium.Color.RED.withAlpha(0.5),
  }
});
viewer.zoomTo(poly_grandcanyon);


/*
var scene = viewer.scene;
scene.globe.depthTestAgainstTerrain = true;
scene.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);
*/

// 富士山にかぶせたポリゴン
//var fuji1 = viewer.dataSources.add(Cesium.KmlDataSource.load('kmzs/fuji1.kml'));
//viewer.zoomTo(fuji1);


