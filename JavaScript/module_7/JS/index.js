'use strict';
// const posts = [{
//         img: "https://placeimg.com/400/150/arch",
//         title: "Post title 1",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//         link: 'link-1.com'
//     },
//     {
//         img: "https://placeimg.com/400/150/nature",
//         title: "Post title 2",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//         link: 'link-2.com'
//     },
//     {
//         img: "https://placeimg.com/400/150/arch",
//         title: "Post title 3",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//         link: 'link-3.com'
//     }
// ];
// let movie = document.querySelector('.movie');

// function createMovieList(arr) {
//     return arr.reduce(
//         (acc, i) => acc + createMovieCard(i), []
//     );
// }

// let movieCards = createMovieList(posts);

// movie.appendChild(movieCards);

// function createMovieCard({
//     img,
//     title,
//     text,
//     link
// }) {

//     const movieImage = document.createElement('img');
//     movieImage.classList.add('movie__image');
//     movieImage.setAttribute('src', img);
//     movieImage.setAttribute('alt', 'movie image');

//     const movieBody = document.createElement('div');
//     movieBody.classList.add('movie__body');

//     const movieTitle = document.createElement('h2');
//     movieTitle.classList.add('movie__title');
//     movieTitle.textContent = title;


//     const movieDscr = document.createElement('p');
//     movieDscr.classList.add('movie__descr');
//     movieDscr.textContent = text;

//     const movieLink = document.createElement('a');
//     movieLink.classList.add('movie__link');
//     movieLink.setAttribute('href', link);
//     movieLink.textContent = link;

//     movieBody.append(movieTitle, movieDscr, movieLink);


//     movie.appendChild(movieImage);
//     movie.appendChild(movieBody);
// }


const posts = [{
            img: "https://placeimg.com/400/150/arch",
            title: "Post title 1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
            link: 'link-1.com'
        },
        {
            img: "https://placeimg.com/400/150/nature",
            title: "Post title 2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
            link: 'link-2.com'
        },
        {
            img: "https://placeimg.com/400/150/arch",
            title: "Post title 3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
            link: 'link-3.com'
        }

]
    

// function createMovieList(arr) {
//     return arr.reduce(
//         (acc, i) => acc + createMovieCard(i), []
//     );
// }

// let movieCards = createMovieList(posts);

// movie.appendChild(movieCards);



function createMovieCard(post){
    const body = document.body;
    const movie = document.createElement('div');
    movie.classList.add("movie");
    body.append(movie);

    let posts = post.reduce((acc,el) => acc + `<img class="movie__image" src=${el.img} alt="movie image">
    <div class="movie__body">
      <h2 class="movie__title">${el.title}</h2>
      <p class="movie__description">${el.text}</p>
  
      <a class="movie__link" href=${el.link}>${el.link}</a>
    </div>`, "");
    movie.innerHTML = posts;
}

createMovieCard(posts);