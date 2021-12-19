## XMLHttpRequest + Promise

- Create a function named `fetch` which can accept one parameter an `url` and returns a promise.
- Use `XMLHttpRequest` to make a network request using the `url` from parameter
- When the data is loaded resolve the promise with the value
- If there is any issue loading data reject the promise with an error message

Add-on:

- Refactor the image search app you created (in previous exercise) to use the function `fetch` you crated above.
- 
function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response))
  
  xhr.onerror = function () {
  console.error('something went wrong')
  };
  xhr.send();
}
