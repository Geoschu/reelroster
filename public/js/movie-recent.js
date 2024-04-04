
const apiKey = '3d58e39c66d0b00b5939a3d8794fb1d8';
const apiUrl= `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-02-03&sort_by=release_date.desc=2024-04-02`;
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'; 

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const moviesList = document.querySelector('.movie-posters-recent');
        data.results.slice(0, 18).forEach(movie => {
            const movieElement = document.createElement('div');
            const posterUrl = `${imgBaseUrl}${movie.poster_path}`; 
            movieElement.innerHTML = `
                <img class='movie-poster' src="${posterUrl}" alt="${movie.title}" />
                <h2 class='movie-title'>${movie.title}</h2>
            `;
            moviesList.appendChild(movieElement);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

    const apiUrl2 = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(apiUrl2)
    .then(response => response.json())
    .then(data => {
        const moviesList = document.querySelector('.movie-posters-trend');
        data.results.slice(0, 18).forEach(movie => {
            const movieElement = document.createElement('div');
            const posterUrl = `${imgBaseUrl}${movie.poster_path}`; 
            movieElement.innerHTML = `
                <img class='movie-poster' src="${posterUrl}" alt="${movie.title}" />
                <h2 class='movie-title'>${movie.title}</h2>
            `;
            moviesList.appendChild(movieElement);
        });
    })
    .catch(error => console.error('Error fetching data:', error));