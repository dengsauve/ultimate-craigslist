const craigslist = require('node-craigslist');

/*
Constructor
@see https://www.npmjs.com/package/node-craigslist#constructor

When constructing the craigslist client, options specified are used for all subsequent requests (i.e. #list and #search).

Usage: new craigslist.Client(options)

options - (optional) - can be used to supply additional options - see Options for details
    city - (optional) - defines the city for the search (NOTE: this field is required by #list and #search when not specified in the constructor)
    baseHost - (optional) - allows for specification of the base domain (defaults to craiglist.org) to support other countries (i.e. for Canada, craigslist.ca)
    maxPrice - (optional) - maximum price
    minPrice - (optional) - minimum price
    category - (optional) - allows for specification of the category (defaults to sss) to search in other categories
    nocache - (optional) - applies appropriate headers on request to attampt to bypass any caches
*/

const client = new craigslist.Client({
    city : 'Spokane',
    baseHost : 'craigslist.org'
});

/*
list
@see https://www.npmjs.com/package/node-craigslist#list

This method can be used to grab a listing of Craigslist postings.

Usage: client.list(options, callback)

options - (optional) - can be used to supply additional options - see Options for details
    city - (optional) - defines the city for the search (NOTE: this field is required when city is not specified in the constructor)
    baseHost - (optional) - allows for specification of the base domain (defaults to craiglist.org) to support other countries (i.e. for Canada, craigslist.ca)
    maxPrice - (optional) - maximum price
    minPrice - (optional) - minimum price
    offset - (optional) - offset number of listings returned
    category - (optional) - allows for specification of the category (defaults to sss) to search in other categories
    nocache - (optional) - applies appropriate headers on request to attampt to bypass any caches
callback - (optional) - a function callback that accepts two arguments - if omitted, the function will return a Promise
    err - populated with details in the event of an error
    result - result set details
*/

client
  .list({
      category: 'mca'
  })
  .then((listings) => {
    // play with listings here...
    listings.forEach((listing) => console.log(listing));
  })
  .catch((err) => {
    console.error(err);
  });