# weatherApp
React and Redux demo

### Getting Started

You will need your own:
- GoogleMaps Api Key [GoogleMapApiKey](https://developers.google.com/maps/documentation/embed/?authuser=1) (You will need to sign up)
- OpenWeather.org API key [OpenweatherMapApiKey](http://openweathermap.org/forecast5) (You will need to sign up)

Additionally, you will need to create a subfolder under the src directory named "keys" then, create a file named "api_keys.js" with the following code:

```javascript
const keyObj = {
  GoogleMapsApiKey : '<your_googlemap_api_key_here>',
  OpenWeatherApiKey: '<your_openweathermap_api_key_here>'
};
export default keyObj;
```


There are two methods for getting started with React and Redux.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/gcurrier/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/gcurrier/ReduxSimpleStarter/archive/master.zip) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

#### Running and/or Building the project

Running under the webpack-dev-server
```
> npm run start-dev #for un-minified compile OR
> npm run start-prod #for uglified compile
```
Building using webpack

```
> npm run dev #Development build, un-minified
> npm run build #Production build, uglified
```

#### Next Steps
I plan to continue to improve this app (as practice) by including the GoogleMapApiKey in the GoogleMap component creation (so that I may remove the api link in the index-html file).
I further intend to improve the build process so that the css file is included (instead of being statically served).

Suggestions are always welcome...
