# openlayer_lifemap
Display Lifemap using Bbox (ex T-rex) with Openlayers


## 1. clone 

`git clone git@github.com:simonpenel/openlayer_lifemap.git`

`cd openlayer_lifemap`

## 2. install Openlayers

`npm create ol-app my-app`

`cd my-app`

## 3. copy files 

`cp ../index_lm.html index.html`

`cp ../main_lm.js main.js`

(for t-rex)

or 

`cp ../main_lm_bbox.js main.js`

(for bbox)

## 4. start development server

`npm start`

## 5. build production server

`npm run build`

## 6. run production server

`cd ../serveur`

`npm install`

`cp -r  ../my-app/dist/* public/`

`npm start`
