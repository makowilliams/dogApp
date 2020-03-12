'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breed/sheepdog/shetland/images/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  let imageUrls = `<img src="${responseJson.message}" alt="Generated dog image" class="loadedImages">`;

  $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});