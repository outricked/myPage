console.log("hello");


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