// Sample data for movies
const moviesData = [
  {
    title: 'Movie Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    poster: '../../public/images/space_jam.jpg',
  },
  {
    title: 'Movie Title 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    poster: '../../public/images/dune_2.jpg',
  },
  {
    title: 'Movie Title 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    poster: '../../public/images/dune.jpg',
  },
  {
    title: 'Movie Title 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    poster: '../../public/images/space_jam.jpg',
  },
  // Add more movie data here as needed
];

// Compile Handlebars template
const movieTemplate = Handlebars.compile(
  document.getElementById('movie-template').innerHTML
);

// Render movies
moviesData.forEach((movie) => {
  const html = movieTemplate(movie);
  document
    .getElementById('movie-container')
    .insertAdjacentHTML('beforeend', html);
});
