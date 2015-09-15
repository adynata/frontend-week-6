// jQuery(function(){
$("article").hide();
        

// });

// var hideArticle = $("article").hide();


// var home = $("#home").show();

$(document).ready(function(){
    $("a").click(function() {
            $("article").hide();
            $("a").css("background", "#fafafa");
            $(this).css("background", "#aaa");
            var navLink = $(this).attr("href");
            console.log("article"+navLink);
            // $("article").transition({
            //     perspective: '100px',
            //     rotate3d: '1,1,0,180deg'
            // });
            $("article"+navLink).show();
            $("article").transition({
                perspective: '1000px',
                rotate3d: '1,1,0,180deg'
            });
    });
});


