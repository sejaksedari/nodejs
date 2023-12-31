

// Overall QNA:
    // Emang di webApp ini gabisa resubmit input setelah input pertama selesai ya? kyk misalnya search Avatar, trs pas search Avengers gabisa harus mulai dari awal? 


// jQUERY Workflow ___________________________________________________________________

/*
// url: 'http://www.omdbapi.com/?apikey=d56a422a&s=' + $('.input-keyword').val() ,
// To activate the api, search uncomment the line above in the code below 

$('.search-button').on('click', function() { // awas JS case sensitive!! Click sm click beda

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=d56a422a&s=' + $('.input-keyword').val() ,
        // setiap ada success, callback!
        success: results => {
            const movies = results.Search; // pas dites di https://web.postman.co/workspace/ ada "Search" di awal JSON nya, kudu dihapus, kita cuma butuh objeknya aja
            // console.log(movies); // bentuknya udah JSON gaperlu diparse
            let cards = '';
            movies.forEach((m) => {
                cards += showCards(m);
            });
            $('.movie-container').html(cards); // jQuery, tolong carikan saya element yg kelasnya: movie-container. Lalu, isi htmlnya ganti pakai cards
    
            // jQeuery, tolong carikan saya element yg nama kelasnya "modal-detail-button", ketika ada event on click, kita jalankan function berikut: (sebaiknya jgn pake arrow function karena ga punya scope this. kadang kalo ada event handler kyk gini kita butuh this nya )
            // setiap ada event, callback!
            $('.modal-detail-button').on('click', function() {
                // console.log($(this).data('imdbID')); // buat ngecek aja dulu: cara ngambil ${m.imdbID} di tiap cards
    
                // panggil ajax lagi
                $.ajax({
                    // jQuery, ambil tombol INI, lalu ambil atrribut data imdbID nya
                    url: 'http://www.omdbapi.com/?apikey=d56a422a&i=' + $(this).data('imdbidxxx'),
                    success: m => {
                        // semua isi dari modal-body masukin sini sm kyk cards td
                        const movieDetail = showMovieDetail(m);
                        $('.modal-body').html(movieDetail); // JQuery, tolong carikan saya element yg classnya modal-body, ganti htmlnya dengan movieDetail
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });

});
*/


// Fetch Workflow ___________________________________________________________________

/*
// ambil element tombol search pake DOM selection, kalo ngambil 1 element pake .querySelector, kalo banyak .querySelectorAll
const searchButton = document.querySelector('.search-button');

// kasih event si tombolnya, ketika diklik lakukan sesuatu
// pake function() bukan => takutnya butuh this
searchButton.addEventListener('click', function() {

    const inputKeyword = document.querySelector('.input-keyword');
    // syntax: fetch(resources, init) // kita ga pake init di sini
    fetch('http://www.omdbapi.com/?apikey=d56a422a&s=' + inputKeyword.value)
        .then((response) => response.json()) // masih promise
        .then((response) => { // udah jadi objek, terus lanjut datanya diapain
            const movies = response.Search; // masuk ke property Search
            let cards = ''; // pake let biar bisa ditumpuk
            movies.forEach((m) => cards += showCards(m)); // looping pake for each
            const movieContainer = document.querySelector('.movie-container'); // cariin element dong
            movieContainer.innerHTML = cards; // timpa innterHTML dr element yg dicari dengan cards
        
            // ketika tombol detail diklik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function() { // butuh this, pake function biasa aja
                    const imdbid = this.dataset.imdbidxxx;
                    // console.log(imdbidxxx); // cek imdb id dapet gak
                    // jangan lupa, url fetch kedua itu bukan &s= tapi &i=, cek lagi dokumentasi api
                    fetch('http://www.omdbapi.com/?apikey=d56a422a&i=' + imdbid)
                        .then(response => response.json())
                        .then(response => { // response = param m in jquery
                            const movieDetail = showMovieDetail(response); // response = param m in jquery
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML= movieDetail;
                        });
                });
            });

        });

});
*/


// Fetch Workflow 2 (Refactor, Async Await) ____________________________________________________________
/*
const searchButton = document.querySelector('.search-button');


// ketika tombol diklik
searchButton.addEventListener('click', async function() { // kasih tau JS bakal ada async, yg mana? yg await
    try {
        // ambil keyword
        const inputKeyword = document.querySelector('.input-keyword');
        // [Tunggu Async function getMovies] jalanin function getMovies buat ambil input dari user, fetch api
        const movies = await getMovies(inputKeyword.value);
        console.log(movies);
        // [Update UI] function looping cards, tumpuk, dan simpen ke container
        updateUI(movies);
    } catch(err) {
        console.log(err);
        alert(err);
    }
});


// fungsi getMovies sebelum ada Error Handling
// function getMovies(keyword) {
//     return fetch('http://www.omdbapi.com/?apikey=d56a422a&s=' + keyword)
//         .then(response => response.json())
//         .then(response => response.Search);
// }


// [ASYNC] fungsi ngereturn object berupa data
function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=d56a422a&s=' + keyword)
        .then((response) => {
            if( !response.ok ) {
                console.log(response);
                // throw new Error(response.statusText); // bakal dilempar & ditangkep sama catch
                throw new Error("Api Key Salah!"); // bakal dilempar & ditangkep sama catch
            }
            // console.log(response);
            return response.json(); // kalo ok yg dikerjakan ini
        })
        .then((response) => {
            if( response.Response === "False" ) {
                // console.log(response);
                // throw new Error(response.Error);
                throw new Error("Cari yang Bener!");
            }
            return response.Search; // kalo bener
        });
};

// function looping cards, tumpuk, dan simpen ke container,
// fungsi cuma dijalanin aja, ga ngereturn nilai, gaperlu kasih return
function updateUI(movies) {
    let cards = '';
    movies.forEach((m) => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
};



//_____________________________________________

// ketika tombol "Detail" diklik
// harus pake Event Binding soalnya si tombol Show Details baru bisa diakses setelah cards terbentuk semua
// ketika element apapun diclick di dalam document (tapi kalo tombol show details, do something)
document.addEventListener('click', async function(e) {
    if( e.target.classList.contains('modal-detail-button')) {
        console.log("Show Details Terclick");
        const imdbid = e.target.dataset.imdbidxxx;
        // [Tunggu Async function getMoviesDetail]
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

// [ASYNC] return response
function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=d56a422a&i=' + imdbid)
        .then(response => response.json())
        .then(response => response);
};

// function tampilin modal body
// fungsi cuma dijalanin aja, ga ngereturn nilai, gaperlu kasih return
function updateUIDetail(response) {
    const movieDetail = showMovieDetail(response);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML= movieDetail;
};

*/



// FUNCTION GENERAL >>>>

function showCards(m) {
    return `<!-- kolom dibuat > 4, margin y 3 -->
            <div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbidxxx="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
};

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
};