document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelectorAll(".chuyenslide ul li");
    var slides = document.querySelectorAll(".cacslide ul li");
    //auto slide
    var thoigian = setInterval(function(){
        autoSlide();
    },5000);
    function autoSlide(){
        var vtslide = 0;
        var slideht = document.querySelector(".cacslide ul li.active");
        for(vtslide=0;slideht=slideht.previousElementSibling;vtslide++){}
        for(var i=0;i<slides.length;i++){
            slides[i].classList.remove("active");
            nut[i].classList.remove("kichhoat");
        }
        if(vtslide < slides.length - 1){
            slides[vtslide].nextElementSibling.classList.add("active");
            nut[vtslide].nextElementSibling.classList.add("kichhoat");
        }
        else if(vtslide == slides.length - 1){
            slides[0].classList.add("active");
            nut[0].classList.add("kichhoat");
        }
    }
    //xu ly nut
    for(var i=0;i<nut.length;i++){
        nut[i].addEventListener("click",function(){
            clearInterval(thoigian);
            for(var k=0;k<nut.length;k++){
                nut[k].classList.remove("kichhoat");
            }
            this.classList.add("kichhoat");
            var nutkichhoat = this;
            for(var vtnut=0;nutkichhoat = nutkichhoat.previousElementSibling;vtnut++){
            }
            for(var j=0;j<slides.length;j++){
                slides[j].classList.remove("active");
                slides[vtnut].classList.add("active");
            }
        });
    }
},false);