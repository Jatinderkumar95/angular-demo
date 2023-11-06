
Step 1-- Install bootstrap and jquery for the project 
npm install bootstrap@3 jquery --save

step 2-- add the following styles and scripts in configuration file angular.json
 "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
