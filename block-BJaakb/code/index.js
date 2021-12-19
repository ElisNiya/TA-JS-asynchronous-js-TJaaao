function fetch(url) {
    return new Promise((resolce, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => successHandler(JSON.parse(xhr.response))
     xhr.onerror = function () {
    console.error('something went wrong')
      xhr.send();
    };
  }) 
}

fetch(url).then(displayImages)

function handleSearch(event){
  if(event.keyCode == 13 && searchElm.value){
    fetch(getSearchURL(searchElm.value).then(displayImages(searchResult.results));
    });
    searchElm.value = '';
  }
}
