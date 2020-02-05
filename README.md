# AutoCompleteJS Project

![AutoCompleteJS Main Page](https://github.com/DanBurbach/AutoCompleteJS/blob/master/src/assets/AutoCompleteJS_Main.png?raw=true)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### __Created by Dan Burbach__

#### February 2020

## __Description__

```
Coding exercise to create a reusable autocomplete component using JavaScript. This component will consume 
a remote web service that provides a list of Places. Each Place is comprised of an ID, name, description, 
tags, and a description match field which gives information about the substring in the description that 
matches the provided query. Upon selecting a suggestion, the state of the component should be updated to 
reflect the selected location.

Furthermore... the location data is stored in state, followed by running it through a Geocoder which 
provides a latitude and longitude in its returned JSON. This is stripped out and added to the MapBox 
component, re-renders the map, and displays the searched for location.
```
## __Dataflow__
* User enters in text field a location and triggers and onChange function which enters the Users Input 
into an API fetch.
* The returned data is turned into a JSON and then stripped of un-needed information and amended onto 
a ul as an li.
* The 5 returned list items are then displayed in a drop-down box below the text field.
* Upon selection (either by clicking with a mouse, or by selecting with keyboard) the state is saved 
and sent to the MapBox upon Submission.
* Submitted location is then passed via props and sent through another API library for Geocoding 
and - much like before - turned into a JSON, stripped for latitude and longitude, and passed onto 
a mapping API.
* The mapping API takes the coordinates and processes them, returning a new map and location on 
componentDidUpdate. Rendering in a map, and displaying coordinates for the user.

## __Setup/Installation Requirements__

  * Clone repository

  * Open terminal

  * Run npm install

  * npm run start

  * Open a browser: http://localhost:3000/

  * Enjoy!

![AutoCompleteJS_Working_Example](http://g.recordit.co/nvkayG8Xrm.gif)

### __Technologies Used__

React.js, CSS3, HTML5, Javascript, MapBox, and a provided coding challenge API Location Library

-[MapBox](https://www.mapbox.com/)-
Maps and location for developers. Precise location data and powerful developer tools to change the way we navigate the world. In this project it is used for both the display of the map via API call, AND provides Geomapping of the locations provided - which provides latitude and longitude coordinates.

## __Bugs__
  - [ ] When typing too fast, the API libraries cannot keep up and errors are thrown.
  - [ ] If deleting what was typed and there isn't anything in the text box an error is thrown 
  (amended temporarily with the Reset Button).
  - [ ] Some entered letters and returnes search recommendations do not have a map return and are 
  found to throw an error.


## __Future Development__

  - [ ] Smoother API Calls
  - [ ] Alternative Map Source
  - [ ] Mobile Friendly
  - [ ] Dark Mode
  - [ ] Larger Map
 
### __Version__

Beta v1.0

## License(s)
### Working Code is Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### Copyright 2020 Daniel Burbach