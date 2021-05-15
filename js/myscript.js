$(document).ready(function(){

        /* Hide or Show Scroll Button */
        $(document).scroll(function(){

            var scrollFromTop = $(this).scrollTop();

            if (scrollFromTop > 500) {
                $("#toTop").css("display", "inline");
            }
            else {
                $("#toTop").css("display", "none");
            }
        })

        /* Move to top of page when to top button click */
        $("#toTop").click(function(){
            $("html").animate({scrollTop: 0}, 600);
        })


})