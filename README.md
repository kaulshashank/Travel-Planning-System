# Travel-Planning-System
Web Application for creation of itinerary with the help of RailwaysAPI and Google's Places Web Services API. 
Travel Planning System used for the analysis of the best travel route for business/personal purposes between two cities.  
Uses API requests to get real-time train and bus schedules. 
Completely user friendly.

AUTHOR: Shashank Kaul

EMAIL: kaulshashank96@gmail.com

UPDATES
## v1.0.0: 27-07-2017

- Added ExpressJS and EJS modules
- Added app.js (Main file)
- Updated structure of the website. 
	- Created 'views/' directory which contains index.js and both header and footer partials inside the 'partials/' folder
	- Created 'public/' directory to store all assets (stylesheets, images, documents, etc)
		- Added stylesheet 'styles.css'

## v1.0.1: 27-07-2017

- Added functionality to check for all the train schedules between two stations using their station code. 
	- Added node module "require" which allows us to make API calls
- Output is formatted and displayed to console for now.
- Currently working on a structured page template for the train schedules to be displayed.

## v2 : 14-01-2018
- Added selection of train according to user prefference.
- Added back-end functionality for Google Places API on the basis of selected train's destination.
	- TODO: user interface
- Added page for hotel booking (no API integration; lack of free hotel booking/availability APIs)

TODO:
- Final page for drag and drop itinerary customization

