'use strict';

function getBreed(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
  .then(response =>response.json())
  .then(responseJson => displayDoggos(responseJson))
  .catch(error => alert())
}

function displayDoggos(responseJson) {
  console.log(responseJson);
  
  if(responseJson.message == 'Breed not available') {
    alert('Breed not available, please choose another.');
  }
  else {
    $('.images').html(`<h2>Doggos</h2>`);

  let splitUrl = responseJson.message.split("/");
  let breedName = splitUrl[4];
  $('.images').append(`<h2>${breedName}</h2>`);

  $('.images').append(`<img src="${responseJson.message}" width=200 height="auto">`)

  $('.images').removeClass('hidden');
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let doggoBreed = $('input[name="doggoBreed"]').val();
    getBreed(doggoBreed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});