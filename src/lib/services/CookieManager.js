// This file is for saving and loading cookies from the browser.
// It is used to save the users last searched city so that it can be loaded when the page is refreshed.

document.cookie =
  "LastSearchedCity=københavn; expires" + new Date(2100, 0, 1).toUTCString;
"LastSearchedLat=københavn; 55.3454" + new Date(2100, 0, 1).toUTCString;
"LastSearchedLon=københavn; 11.4231" + new Date(2100, 0, 1).toUTCString;
