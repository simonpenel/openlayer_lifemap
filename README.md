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

## 7. nginx

    cat  /etc/nginx/sites-available/openlayer 
    server {
     listen 80;
     root /home/ubuntu/ol/openlayer_lifemap/serveur/;
     server_name prabi-cloud43.univ-lyon1.fr;
     client_max_body_size 10m ;
     location / {
     include proxy_params;
     proxy_pass http://127.0.0.1:4000;
     add_header Access-Control-Allow-Origin *;
     }
    }


