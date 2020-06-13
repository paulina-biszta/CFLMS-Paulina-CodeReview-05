$(document).ready(function() {
    var myMovies = JSON.parse(movies);
    var content = "";
    for (let i = 0; i < myMovies.length; i++) {
        let movie = myMovies[i];
        like = Math.floor(Math.random() * 100);
        content += `
        <div class="movie_wrapper">
            <div class="img_container">
                <img src="${movie.image}">
            </div>
            <div class="movie_title">
                <h3>${movie.title}</h3>
                <p class="movie_description">${movie.description}</p>
                <div class="more">
                    <button class="moreb">More</button>
                    <p class="more_info">${movie.more}</p>
                </div>
                <div class="counterDiv">
                    <p>Like</p>
                    <span class="countBtn">
                        <img class="likeImage" src="img/like.png" alt="thumbs up">
                    </span>
                    <div class="countNum">
                        <h1 class="headerCounter">${like}</h1>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    $("#container").html(content);

    //more info button starts here//

    var morebutton = $('.moreb')
    var moreinf = $('.more_info')
    for (let i = 0; i < morebutton.length; i++) {
        $(morebutton[i]).on('click', show);

        function show() {
            $(moreinf[i]).css("visibility", "visible");
        }
    }

    //like counter starts here//

    var movieLikeCounter = $('.likeImage');
    var countNum = $('.headerCounter');
    for (let i = 0; i < movieLikeCounter.length; i++) {
        $(movieLikeCounter[i]).on('click', countUp);

        function countUp() {
            countNum[i].innerHTML++;
        }
    }

    //sorting starts here//

    $("#popular").on("click", function() {
        let num_order = $(".movie_wrapper").sort(function(a, b) {
            return $(b).find("h1").text() - $(a).find("h1").text()
        })
        $("#container").html(num_order)
    })

    $("#least").on("click", function() {
        let num_order_inverse = $(".movie_wrapper").sort(function(a, b) {
            return $(a).find("h1").text() - $(b).find("h1").text()
        })
        $("#container").html(num_order_inverse)
    })

    $("#alpha").on("click", function() {
        let alph = $(".movie_wrapper").sort(function(a, b) {
            return $(a).find("h3").text() < $(b).find("h3").text() ? -1 : 1
        })
        $("#container").html(alph)
    })
});