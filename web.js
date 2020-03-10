
        // document.addEventListener('mousemove', e => {
        //     document.querySelector('.cursor').setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        // })

        //   document.addEventListener('click', () => {
        //     document.querySelector('.cursor').classList.add("expand");

        //     setTimeout(() => {
        //         document.querySelector('.cursor').classList.remove("expand");
        //     }, 500)
        // })








$(document).ready(function(){

$(".web").mouseenter()


var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });




      $(".web").mouseover(function(){
    $(".webt").css("display", "block");
  });

  $(".web").mouseout(function(){
    $(".webt").css("display", "none");
  });

    $(".video").mouseover(function(){
    $(".videot").css("display", "block");
  });

  $(".video").mouseout(function(){
    $(".videot").css("display", "none");
  });

    $(".book").mouseover(function(){
    $(".bookt").css("display", "block");
  });

  $(".book").mouseout(function(){
    $(".bookt").css("display", "none");
  });


    // $("p")
    //     .mouseenter(function() {
    //         cursor.css({
    //             transform: "scale(3)"
    //         });
    //     })
    //     .mouseleave(function() {
    //         cursor.css({
    //             transform: "scale(1)"
    //         });
    //     });


    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(.2)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
});