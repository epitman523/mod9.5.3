'use strict';

let dogList = [];

function getDogList() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(responseList => convertDogList(responseList))
        .catch(error => console.log('Something wrong with getDogList'));
}

function convertDogList(responseList) {
    //1. Define responseList
    let rList = responseList.message;
    console.log(rList.length);

    //2. map through responseList

    //3. Obtain value of message[i]
    //4. check if message[i][0] is true




    //6. build appropriate string
    //7. if false 
    //8. build appropriate string
}

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
        .catch(error => console.log('Something went wrong with getDogImgs'));
}
function buildString(item) {
    return `<li><img src="${item}" alt="image of cute dog" /></li>`;
}
function showDogImg(responseJSON) {
    const dogData = responseJSON.message;
    const dogStatus = responseJSON.status;
    if (dogStatus === 'error') {
        $('.dogs').append('<p>I am sorry, we do no have an image for that breed</p>');
    } else {
        let dogString = buildString(dogData);
        $('.dogs').append(dogString);
    }
}
function watchDogForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.dogs').empty();
        getDogList();
        getDogImages();
    });
}
$(function () {
    watchDogForm();
});