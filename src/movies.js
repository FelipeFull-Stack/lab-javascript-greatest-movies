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
function howManyMovies(moviesArray) {
    const moviesFilter = moviesArray.filter((currentName) => {
        return (currentName.director === 'Steven Spielberg' && currentName.genre.includes('Drama'))
    });
    return moviesFilter.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const mediaMovie = moviesArray.filter((currentScore) => {
        return currentScore.score === 8;
    });
    let media = (mediaMovie[0].score + mediaMovie[1].score) / mediaMovie.length;
    return +(media.toFixed(2));
}

// if (moviesArray === "" || moviesArray.length === 0) {
//     return 0;
// }
// let sum = 0, filtro = 0;
// for (let i = 0; i < moviesArray.length; i++) {
//     sum += moviesArray[i].score;
//     if (moviesArray[i].score === "") {
//         return sum / moviesArray.length;
//     }
// }

// filtro = sum / moviesArray.length;
// return +(filtro.toFixed(2));




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let sum = 0, mediaDrama = 0, sumDrama = 0, mediaSumDrama = 0, contador = 0;
    if (moviesArray.length === 1) {
        return moviesArray.score;
    }
    for (let i = 0; i < moviesArray.length; i++) {
        for (let j = 0; j < moviesArray[i].genre.length; j++) {
            if (moviesArray[i].genre[j] === 'Drama') {
                sum += moviesArray[i].score;
            }
        }
        if (moviesArray[i].genre.length === 1 && moviesArray[i].genre === 'Drama') {
            contador++;
            sumDrama += moviesArray[i].score;
        }
    }
    if (moviesArray.length === 1) {
        return moviesArray.score;
    }
    mediaSumDrama = sumDrama / contador;
    mediaSumDrama = +(mediaSumDrama.toFixed(2));
    mediaDrama = sum / moviesArray.length;
    return +(mediaDrama.toFixed(2));


}






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let array = [], array2 = [];
    let str = "";
    for (let i = 0; i < moviesArray.length; i++) {

    }
    array = moviesArray;
    return array.sort();
}




function teste(a, b) {
    return b - a;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let array = [], array2 = [];
    let str = "";
    let cont = 0;
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
    return array.sort();
}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let str = "", teste = "";
    let soma = 0;
    let array = [];

    for (let i = 0; i < moviesArray.length; i++) {
        teste[i] = moviesArray[i].duration;
        for (let j = 0; j < teste.length; j++) {
            if (typeof teste[j] === 'number') {
                str = teste[j];
                if (j === 0) {
                    soma += str * 60;
                }
                if (j > 0 && j < 3) {
                    soma += str;
                }
            }
        }
    }
    if (soma > 0) {
        return soma;
    }
    return array;
}






// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray === "" || moviesArray.length === 0) {
        return null;
    }
}
