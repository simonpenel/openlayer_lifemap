import MVT from 'ol/format/MVT.js';
import Map from 'ol/Map.js';
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import View from 'ol/View.js';
import {Fill, Icon, Stroke, Style, Text} from 'ol/style.js';
import TextPlacement from 'ol/style/Text.js';
import TileLayer from 'ol/layer/Tile.js';
import {TileDebug} from 'ol/source.js';
// Styles 
// ------
const testStyle = new Style({
  text: new Text({
    font: 'bold 11px "Open Sans", "Arial Unicode MS", "sans-serif"',
    placement: 'line',
    fill: new Fill({
      color: 'white',
    }),
  }),
});


const rankStyle = new Style({
  text: new Text({
    font: '21px Calibri,sans-serif',
    maxAngle: 0.78,
    placement: new TextPlacement('line'),
    fill: new Fill({
      color: 'red',
    }),
    rotation:0.2,
  }),
});
const cladeStyle = new Style({
  text: new Text({
    font: '23px Calibri,sans-serif',
    fill: new Fill({
      color: 'blue',
    }),
    stroke: new Stroke({
      color: '#fff',
      width: 4,
    }),
  }),
});
const leaveStyle = new Style({
  text: new Text({
    font: '10px Calibri,sans-serif',
    fill: new Fill({
      color: 'yellow',
    }),
  }),
});
const style = [testStyle,rankStyle, cladeStyle, leaveStyle];

// Carte
// -----
var map = new Map({
  layers: [
    // Layer polyeuk
    new VectorTileLayer({
      source: new VectorTileSource({
        maxZoom: 42,
        format: new MVT(),     
        url: 'http://134.214.213.45:4000/polyeuk/{z}/{x}/{y}.pbf',
      }),
      opacity: 0.3
    }),
    // Layer lines
    new VectorTileLayer({
      source: new VectorTileSource({
        maxZoom: 42,
        format: new MVT(),     
        url: 'http://134.214.213.45:4000/lines/{z}/{x}/{y}.pbf',
      }),
    }),
    // Layer ranks (line)
    new VectorTileLayer({
      source: new VectorTileSource({
        maxZoom: 42,
        format: new MVT(),     
        url: 'http://134.214.213.45:4000/ranks/{z}/{x}/{y}.pbf',
      }),
      style: new Style({
        stroke: new Stroke({
          color: 'red',
          width: 1,
        }),
      }),
    }),
    // Layer ranks (text)
    new VectorTileLayer({
      declutter: true,
      source: new VectorTileSource({
        maxZoom: 42,
        format: new MVT(),     
        url: 'http://134.214.213.45:4000/ranks/{z}/{x}/{y}.pbf',
      }),
      style: function (feature) {
        testStyle
        .getText().setText(feature.get('rank'));
        // .setText([
        //   ` ${feature.get('rank')}`,
        //   '',
        //   '\n',
        //   '',
        // ]);
         // style.getText().setText(feature.get('name'));
        
        
        return style;
      },
    }),
    // Layer leaves (text)
    new VectorTileLayer({
      declutter: true,
      source: new VectorTileSource({
        maxZoom: 42,
        format: new MVT(),     
        url: 'http://134.214.213.45:4000/leaves/{z}/{x}/{y}.pbf',
      }),
      style: function (feature) {
        leaveStyle
        .getText()
        .setText([
          ` ${feature.get('sci_name')}`,
          '',
          '\n',
          '',
        ]);
        return style;
      },
    }),
    // Layer clade (text)
    new VectorTileLayer({
      declutter: false,
      source: new VectorTileSource({
        maxZoom: 42,
        format: new MVT(),     
        url: 'http://134.214.213.45:4000/clade/{z}/{x}/{y}.pbf',
      }),
      style: function (feature) {
        cladeStyle
        .getText()
        .setText([
          ` ${feature.get('sci_name')}`,
          `${feature.get('sqrzoom')/5}px Calibri,sans-serif`,
          `\n`,
          '',
          ` ${feature.get('common_name')}`,
          '',
        ]
        );
        return style;
      },
    }),
    
    new TileLayer({
      source: new TileDebug(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 4,       
    maxZoom: 42
  }),
});
