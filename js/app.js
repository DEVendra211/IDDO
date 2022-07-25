const ctx = document.querySelector('.myChart1').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [75, 25,],
            backgroundColor: [
                'rgba(199, 56, 60)',
                'rgba( 255, 255, 255)',
                'rgba( 255, 255, 255)',

            ],
            borderColor: [
                'rgba(199, 56, 60)',

            ],
            borderWidth: 1
        }]
    },
    // options: {
    //     scales: {
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // }
});

{
const ctx = document.querySelector('.myChart2').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',

            data: [25, 75],
            backgroundColor: [
                'rgba(199, 56, 60)',
                'rgba( 255, 255, 255)',
                'rgba( 255, 255, 255)',

            ],
            borderColor: [
                'rgba(199, 56, 60)',

            ],
            borderWidth: 1
        }]
    },

});
}
{
const ctx = document.querySelector('.myChart3').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            // data: [12, 19, 3, 5, 2, 3],
            data: [75, 25],
            backgroundColor: [
                'rgba(199, 56, 60)',
                'rgba( 255, 255, 255)',
                'rgba( 255, 255, 255)',

            ],
            borderColor: [
                'rgba(199, 56, 60)',

            ],
            borderWidth: 1
        }]
    },
    // options: {
    //     scales: {
    //         y: {
    //             beginAtZero: true   
    //         }
    //     }
    // }
});
}
{
const ctx = document.querySelector('.myChart4').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            // data: [12, 19, 3, 5, 2, 3],
            data: [50, 50],
            backgroundColor: [
                'rgba(199, 56, 60)',
                'rgba( 255, 255, 255)',
                'rgba( 255, 255, 255)',

            ],
            borderColor: [
                'rgba(199, 56, 60)',

            ],
            borderWidth: 1
        }]
    },
    // options: {
    //     scales: {
    //         y: {
    //             beginAtZero: true
    //         }
    //     }
    // }
});
}

$(function () {
    $(".acc a").click(function (e) {
        e.preventDefault();
        if ($(this).next("p").is(":hidden")) {
            $(".acc a").removeClass("active");
            $(this).addClass("active");
            $(".acc p").slideUp();
            $(this).next("p").slideDown();
        }
    });

    $(".btn").click(function (e) {
        e.preventDefault();
        $("body").append('<div class="overlay"></div>');
        $("body").append('<div class="model"><h2>sign <span>up</span></h2></div>');


        var a = $("#sign").html();


        $(".model").append(a)
        // $(".model").append(' <div class="center"><button class="btn-0">create account</button> </div>')

        $(".model").append('<button class="close">&times;</button>')

        $(".model .close, .overlay").click($close);
        $(window).keydown(function (e) {
            if (e.which == 27) {
                $close()
            }
        })
        function $close() {
            $(".model ,.overlay").remove();
        }



    });
    $(".top").click(function () {
        $("html,body").animate({ scrollTop: 0 })

    });

    $(".internal  a").click(function (e) {
        e.preventDefault();
        $(".internal  a").removeClass("active");
        $(this).addClass("active");
        var href = $(this).attr("href");
        var pos = $(href).offset().top;

        $("html,body").animate({
            scrollTop: pos - 80
        })

    })

    let vh = $(window).height();
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        var left = $(this).scrollLeft();
        // console.log(top, left);

        if (top >= 800) {
            $(".top").fadeIn()
        }
        else {
            $(".top").fadeOut()
        }

        //



        if (top >= $("#contact").offset().top - 80) {
            $(".internal a").removeClass("active")
            $(".internal li:eq(4) a").addClass("active")
        }

        else if (top >= $("#about").offset().top - 80) {
            $(".internal a").removeClass("active")
            $(".internal li:eq(3) a").addClass("active")
        }

        else if (top >= $("#WORKS").offset().top - 80) {
            $(".internal a").removeClass("active")
            $(".internal li:eq(2) a").addClass("active")
        }

        else if (top >= $("#Services").offset().top - 80) {
            $(".internal a").removeClass("active")
            $(".internal li:eq(1) a").addClass("active")
        }
        else if (top >= $("#Home").offset().top - 0) {
            $(".internal a").removeClass("active")
            $(".internal li:eq(0) a").addClass("active")
        }
        else {
            $(".internal a").removeClass("active");
        }
    });

    
    $(".mob").click(function () {
        $(this).toggleClass("active");
        $(".wrap-1 .flex").slideToggle();
    })
});