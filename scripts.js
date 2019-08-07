'use strict';

function getDogImages() {
    //3) get number user entered
    let userNumber = $('input').val();
    if (!userNumber) {
        userNumber = 3;
    }
    let doggieURL = 'https://dog.ceo/api/breeds/image/random/' + userNumber;
    fetch(doggieURL)
        .then(response => response.json())
        .then(responseJSON => showDogImg(responseJSON))
        .catch(error => console.log('Something went wrong'));
}
function buildString(item) {
    return `<li><img src="${item}" alt="image of cute dog" /></li>`;
}
function showDogImg(responseJSON) {
    const messageArray = responseJSON.message;
    const dogData = messageArray.map(message => buildString(message));
    $('.response').removeClass('hidden');
    console.log(messageArray);
    $('.dogs').append(dogData);
}
function watchDogForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
    });
}
$(function () {
    watchDogForm();
});