## Available Scripts

In the project directory, you can run:

### `npm run clientinstall`
To install all the node modules required

### `npm run dev`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Packages/Libraries

### Backend
1. express
2. nodemon
3. mongoose
4. shortid
5. concurrently

### Frontend
1. React
2. Material UI
3. Axios

### Assumptions/Methodology

1. Shortid package is used to generate a unique identifier for the url
2. The database maintains full url and its corresponding shorturl 
3. User can enter any url in the textbox and click shorten, which will give the shortened url.
4. The API checks for existing urls, if it exists it maps to its corresponding short url otherwise creates new.

### Limitations/ Enhancements

1. The API does not check if the domain in the url is operational or not




