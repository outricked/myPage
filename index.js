jQuery(document).ready(function(){

    console.log("hell");
    console.log("width:",screen.width);


    let target = document.querySelector(".flex");

    let observer = new IntersectionObserver((callback, observer) =>{
        callback.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                console.log('in the view');
                let header_about = document.querySelector(".header-about");
                let header_bar = document.querySelector(".header-bar");
                header_about.classList.add("animated");
                header_bar.classList.add("animated");
            } else {
            console.log('out of view');
            }
        });
    });

    observer.observe(target);





    //$("#special").click(function(e){
    // $(".background-container").mousemove(function(e){
    //     //$('#status2').html(e.pageX +', '+ e.pageY);
    //     //alert(e.pageX + ', ' + e.pageY);
    //     mouseX = e.clientX;
    //     mouseY = e.clientY;
    //     console.log(mouseX,mouseY);
        
    // }); 
})