'use strict';

function getDoggos(numDoggos = 3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numDoggos}`)
  .then(response =>response.json())
  .then(responseJson => displayDoggos(responseJson))
}

function displayDoggos(responseJson) {
  console.log(responseJson);
  $('.images').html(`<h2>Doggos</h2>`);

  for (let dog of responseJson.message){
    $('.images').append(`<img src="${dog}" width=200 height="auto">`);
  }
  $('.images').removeClass('hidden');

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numDoggos = $('select[name="numOfDogs"]').val();
    getDoggos(numDoggos);

  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
