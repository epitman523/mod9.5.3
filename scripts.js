'use strict';

const dogsList = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "bulldog-boston", "bulldog-english", "bulldog-french", "bullterrier-staffordshire", "cairn", "cattledog-australian", "chihuahua", "chow", "clumber", "cockapoo", "collie-border", "coonhound", "corgi-cardigan", "cotondetulear", "dachshund", "dalmatian", "dane-great", "deerhound-scottish", "dhole", "dingo", "doberman", "elkhound-norwegian", "entlebucher", "eskimo", "frise-bichon", "germanshepherd", "greyhound-italian", "groenendael", "hound-afghan", "hound-basset", "hound-blood", "hound-english", "hound-ibizan", "hound-walker", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff-bull", "mastiff-english", "mastiff-tibetan", "mexicanhairless", "mix", "mountain-bernese", "mountain-swiss", "newfoundland", "otterhound", "papillon", "pekinese", "pembroke", "pinscher-miniature", "pointer-germanlonghair", "pomeranian", "poodle-miniature", "poodle-standard", "poodle-toy", "pug", "puggle", "pyrenees", "redbone", "retriever-chesapeake", "retriever-curly", "retriever-flatcoated", "retriever-golden", "ridgeback-rhodesian", "rottweiler", "saluki", "samoyed", "schipperke", "schnauzer-giant", "schnauzer-miniature", "setter-english", "setter-gordon", "setter-irish", "sheepdog-english", "sheepdog-shetland", "shiba", "shihtzu", "spaniel-blenheim", "spaniel-brittany", "spaniel-cocker", "spaniel-irish", "spaniel-japanese", "spaniel-sussex", "spaniel-welsh", "springer-english", "stbernard", "terrier-american", "terrier-australian", "terrier-bedlington", "terrier-border", "terrier-dandie", "terrier-fox", "terrier-irish", "terrier-kerryblue", "terrier-lakeland", "terrier-norfolk", "terrier-norwich", "terrier-patterdale", "terrier-russell", "terrier-scottish", "terrier-sealyham", "terrier-silky", "terrier-tibetan", "terrier-toy", "terrier-westhighland", "terrier-wheaten", "terrier-yorkshire", "vizsla", "weimaraner", "whippet", "wolfhound-irish"];
const dogsListTest = transformDogs(dogsList);

function transformDogs(arr) {
    let newArr = arr.map(function (item) {
        let newWord = item.replace('-', '').split('').sort().join('');
        return newWord;
    })
    return newArr;
}
function transformInput(str) {
    let newString = str.toLowerCase().replace('/\W/g', '').split('').sort().join('');
    return newString;
}
function getUserInput() {
    let userInput = $('#dogForm input').val();
    return transformInput(userInput);
}

function searchUserInput() {
    let searchTerm = getUserInput();

    for (let i = 0; i > dogsListTest.length; i++) {
        if (dogsListTest[i] === searchTerm) {
            return dogList[i]
        } else {
            return false;
        }

    }
}
function getDogLink() {

    let doggieURL = 'https://dog.ceo/api/breed/' + key + '/images/random';
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
        getDogLink();
        // getDogImages();
    });
}
$(function () {
    watchDogForm();
});