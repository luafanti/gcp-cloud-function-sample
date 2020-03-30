Repository contains simple code which can be deployed as Cloud Function on Google Cloud Platform

**index.js** - include code of function with clear js approach 

**express-index.js** - include code of function with Express JS approach. If You want deploy it copy and paste to index.js file (recommended)

Local development (include hot reload)

`npm run watch` 

To deploy Your function You need to create Your project in GCP set it default in _gcloud_ shell and then run below

`gcloud functions deploy cloudFunctionDemo --runtime nodejs8 --trigger-http --allow-unauthenticated`