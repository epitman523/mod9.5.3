'use strict';
function getDogLink() {
    let dogBreed = $('.dog-list option:selected').val();
    let doggieURL = 'https://dog.ceo/api/breed/' + dogBreed + '/images/random';
    return doggieURL;
}
function getDogImages() {
    let doggieLink = getDogLink();
    fetch(doggieLink)
        .then(response => response.json())
        .then(responseJSON => showDogImg(responseJSON))
        .catch(error => console.log('Something went wrong'));
}
function buildString(item) {
    return `<li><img src="${item}" alt="image of cute dog" /></li>`;
}
function showDogImg(responseJSON) {
    const dogData = responseJSON.message;
    const dogStatus = responseJSON.status;
    if (dogStatus === 'error') {
        $('.dogs').append('I am sorry, we do no have an image for that breed');
    } else {
        let dogString = buildString(dogData);
        $('.dogs').append(dogString);
    }
}
function watchDogForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.dogs').empty();
        getDogImages();
    });
}
$(function () {
    watchDogForm();
});