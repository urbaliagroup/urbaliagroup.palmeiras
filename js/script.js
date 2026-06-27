document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const next = document.querySelector(".gallery-next");
    const prev = document.querySelector(".gallery-prev");

    let current = 0;

    function changeSlide(index){

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    next.addEventListener("click", () => {

        current++;

        if(current >= slides.length){

            current = 0;

        }

        changeSlide(current);

    });

    prev.addEventListener("click", () => {

        current--;

        if(current < 0){

            current = slides.length - 1;

        }

        changeSlide(current);

    });

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            current=index;

            changeSlide(current);

        });

    });

    setInterval(()=>{

        current++;

        if(current >= slides.length){

            current=0;

        }

        changeSlide(current);

    },6000);

});
/*=====================================================
        GALERÍA PREMIUM + LIGHTBOX + VIDEOS
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*================ LIGHTBOX =================*/

    const images = document.querySelectorAll(".moment-card img");

    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox img");

    const btnClose = document.querySelector(".lightbox-close");
    const btnPrev = document.querySelector(".lightbox-prev");
    const btnNext = document.querySelector(".lightbox-next");

    let currentIndex = 0;

    function openLightbox(index){

        currentIndex = index;

        lightbox.classList.add("active");

        lightboxImg.src = images[currentIndex].src;

        document.body.style.overflow = "hidden";

    }

    function closeLightbox(){

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    function nextImage(){

        currentIndex++;

        if(currentIndex >= images.length){

            currentIndex = 0;

        }

        lightboxImg.src = images[currentIndex].src;

    }

    function prevImage(){

        currentIndex--;

        if(currentIndex < 0){

            currentIndex = images.length - 1;

        }

        lightboxImg.src = images[currentIndex].src;

    }

    images.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            openLightbox(index);

        });

    });

    btnClose.addEventListener("click",closeLightbox);

    btnNext.addEventListener("click",nextImage);

    btnPrev.addEventListener("click",prevImage);

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            closeLightbox();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("active")) return;

        if(e.key==="Escape") closeLightbox();

        if(e.key==="ArrowRight") nextImage();

        if(e.key==="ArrowLeft") prevImage();

    });

    /*================ VIDEOS =================*/

    document.querySelectorAll(".video-card").forEach(card=>{

        const video = card.querySelector("video");
        const button = card.querySelector(".play-btn");

        button.addEventListener("click",()=>{

            document.querySelectorAll(".video-card video").forEach(v=>{

                if(v!==video){

                    v.pause();

                    v.currentTime=0;

                    v.controls=false;

                    const b=v.parentElement.querySelector(".play-btn");

                    if(b){

                        b.style.display="flex";

                    }

                }

            });

            video.controls=true;

            video.play();

            button.style.display="none";

        });

        video.addEventListener("ended",()=>{

            video.controls=false;

            button.style.display="flex";

        });

        video.addEventListener("pause",()=>{

            if(video.currentTime!==video.duration){

                button.style.display="flex";

            }

        });

    });

});