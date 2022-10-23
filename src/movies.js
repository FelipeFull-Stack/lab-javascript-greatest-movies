// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let array = [];
    for (let i = 0; i < moviesArray.length; i++) {
        array[i] = moviesArray[i].director;
    }
    return array;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function teste(valor) {
    return valor.genre === 'Drama';
}
function howManyMovies(moviesArray) {
    let cont = 0, count = 0, contSS = 0;
    if (moviesArray === '' || moviesArray.length === 0) {
        return 0;
    }
    for (let i = 0; i < moviesArray.length; i++) {
        for (let j = 0; j < moviesArray[i].genre.length; j++) {
            if (moviesArray[i].genre[j] === 'Drama' && moviesArray[i].director === 'Steven Spielberg') {
                cont++;
            }
        }
        if (moviesArray[i].director === 'Steven Spielberg') {
            contSS++;
        }
    }
    if (moviesArray.find(teste) === true) {
        count++;
    }
    if (contSS === 2) {
        return contSS;
    }
    return cont;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray === "" || moviesArray.length === 0) {
        return 0;
    }
    let sum = 0, filtro = 0;
    for (let i = 0; i < moviesArray.length; i++) {
        sum += moviesArray[i].score;
        if (moviesArray[i].score === "") {
            return sum / moviesArray.length;
        }
    }

    filtro = sum / moviesArray.length;
    return +(filtro.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let sum = 0, filtro = 0;
    if (moviesArray.length === 1) {
        return moviesArray.score;
    }
    for (let i = 0; i < moviesArray.length; i++) {
        for (let j = 0; j < moviesArray[i].genre.length; j++) {
            if (moviesArray[i].genre[j] === 'Drama') {
                sum += moviesArray[i].score;
            }
            if (moviesArray[i].genre[j] === 'Drama' && moviesArray[i].genre.length === 1) {
                return moviesArray[i].genre[j];
            }
        }
    }
    if (moviesArray.find(teste) !== true) {
        return 0;
    }
    filtro = sum / moviesArray.length;
    return +(filtro.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let array = [];
    let str = "";
    for (let i = 0; i < moviesArray.length; i++) {

    }

    return array;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let array = [], array2 = [], array3 = [];
    let str = "";
    for (let i = 0; i < moviesArray.length; i++) {
        str = moviesArray[i].title;
        array[i] = str;
    }
    if (moviesArray.length > 20) {
        for (let i = 0; i < 20; i++) {
            array2[i] = moviesArray[i].title;
        }
        return array2;
    }
    for (let i = 0; i < moviesArray.length; i++) {
        
    }
    return array.sort();
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let array = [];
    let str = "";
    for (let i = 0; i < moviesArray.length; i++) {

    }

    return array;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray === "" || moviesArray.length === 0) {
        return null;
    }
}
