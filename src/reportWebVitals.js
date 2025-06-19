//To test the performance of the app, we can use the web-vitals library
// This library provides a set of metrics that can be used to measure the performance of a web application
// The metrics include:
// Cumulative Layout Shift (CLS): measures the visual stability of a page  
// First Input Delay (FID): measures the time it takes for a user to interact with a page
// First Contentful Paint (FCP): measures the time it takes for the first piece of content to be rendered on the page
// Largest Contentful Paint (LCP): measures the time it takes for the largest piece of content to be rendered on the page
// Time to First Byte (TTFB): measures the time it takes for the server to respond to a request
// To use the web-vitals library, we need to install it first
// npm install web-vitals
// After installing the library, we can import it and use it to measure the performance of our app
// The reportWebVitals function takes a callback function as an argument
// The callback function will be called with the performance metrics as an argument
// We can use the metrics to log them to the console or send them to an analytics service
// The reportWebVitals function is called in the index.js file

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
