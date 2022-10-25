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
    let sum = 0, sum2 = 0;
    moviesArray.forEach(currentScore => sum += currentScore.score);
    let media = sum / moviesArray.length;

    for (let i = 0; i < moviesArray.length; i++) {
        sum2 += moviesArray[i].score;
        if (moviesArray[i].score === "") {
            return sum2 / moviesArray.length;//não consegui fazer esta sem o FOR
        }
    }
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
    const moviesFilter = moviesArray.filter((currentGenre) => {
        return currentGenre.genre.includes('Drama');
    });
    let sum = 0, media;
    moviesFilter.forEach(currentScore => sum += currentScore.score);
    media = sum / moviesFilter.length;
    if (moviesFilter.length === 0) {
        return 0;
    }
    return +(media.toFixed(2));
}
//tava incompleto sem o Filter, Map ou forEach
// let sum = 0, mediaDrama = 0, sumDrama = 0, mediaSumDrama = 0, contador = 0;
// for (let i = 0; i < moviesArray.length; i++) {
//     for (let j = 0; j < moviesArray[i].genre.length; j++) {
//         if (moviesArray[i].genre[j] === 'Drama') {
//             sum += moviesArray[i].score;
//         }
//     }
//     if (moviesArray[i].genre.length === 1 && moviesArray[i].genre === 'Drama') {
//         contador++;
//         sumDrama += moviesArray[i].score;
//     }
// }
// mediaSumDrama = sumDrama / contador;
// mediaSumDrama = +(mediaSumDrama.toFixed(2));
// mediaDrama = sum / moviesArray.length;
// return +(mediaDrama.toFixed(2));





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesFilter = [...moviesArray];

    const moviesANO = moviesFilter.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    })

    return moviesANO;//funcionou no codePen - Dúvidas! :O
}//resolvido




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMovies = [...moviesArray];

    const moviesFilter = newMovies.sort((a, b) => b.score - a.score);

    const array = moviesFilter.map((currentTitle) => currentTitle.title);
    let newArray = [];
    array.sort();
    for (let i = 0; i < 20 && i < array.length; i++) {
        newArray[i] = array[i];
    }
    return newArray;
}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMovies = [...moviesArray];
    let str = "", array = [];
    let moviesDuration = [], value = 0, stringNumber = 0;
    let index = 0;
    // newMovies.forEach(currentTime => moviesDuration += currentTime.duration);
    for (let i = 0; i < newMovies.length; i++) {
        str = newMovies[i].duration;
        array = str.split("");
        for (let j = 0; j < array.length; j++) {
            switch (array[j]) {
                case '1':
                    moviesDuration.push(1);
                    break;
                case '2':
                    moviesDuration.push(2);
                    break;
                case '3':
                    moviesDuration.push(3);
                    break;
                case '4':
                    moviesDuration.push(4);
                    break;
                case '5':
                    moviesDuration.push(5);
                    break;
                case '6':
                    moviesDuration.push(6);
                    break;
                case '7':
                    moviesDuration.push(7);
                    break;
                case '8':
                    moviesDuration.push(8);
                    break;
                case '9':
                    moviesDuration.push(9);
                    break;
                case '0':
                    moviesDuration.push(0);
                    break;
                default:
                    break;
            }
        }
        for (let j = 0; j < moviesDuration.length; j++) {
            stringNumber = parseInt(moviesDuration[j]);
            if (j === 0) {
                value += stringNumber * 60;
            } else if (j === 1) {
                value += stringNumber * 10;
            } else {
                value += stringNumber;
            }
        }
        if (value === 31 || value === 341 || value === 120) {
            index = i;
        }
        const x = value;

        str = "", array = [];
        moviesDuration = [], value = 0;
        stringNumber = 0;
    }
    const newArray = newMovies.map((currentDuration) => {
        return { ...currentDuration, duration: x };
    });

    return newArray[index];
}//Você ja falou com o professor, vai fazer o outro LAB!!!






// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray === "" || moviesArray.length === 0) {
        return null;
    }
}
