//Array storage class
let carouselArr = [];

class Carousel {
    _sequence;
    get sequence() {
        return this._sequence;
    }
    set sequence(value) {
        this._sequence = value;
    }
    _size;
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    _interval;
    get interval() {
        return this._interval;
    }
    set interval(value) {
        this._interval = value;
    }


    constructor(image, description, link) {
        this.image = image;
        this.description = description;
        this.link = link;
    }

    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                let image = document.createElement("img");
                let divCarousel = document.getElementById("carousel");
                divCarousel.appendChild(image);
                image.style.height= "100%";
                divCarousel.style.paddingTop = "3%";
                divCarousel.style.display= "flex";
                divCarousel.style.justifyContent= "center";
                let url = document.createElement("a");
                let divCarouselTitle = document.getElementById("carousel-title");
                divCarouselTitle.appendChild(url);
                Carousel.sequence = 0;
                Carousel.size = arr.length;
                Carousel.Next(); //start
                Carousel.interval = setInterval(function () { Carousel.Next(); }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        if (Carousel.sequence < Carousel.size-1) {
            Carousel.sequence = Carousel.sequence + 1;
        } else {
            console.log(Carousel.sequence);
            Carousel.sequence = 0;
        }

        let carousel = carouselArr[Carousel.sequence];
        let imageArr = document.getElementById("carousel").getElementsByTagName('img');
        let image = imageArr[0];
        image.src = `./img/${carousel.image}`;
        let descriptionArr = document.getElementById("carousel-title").getElementsByTagName('a');
        console.log(descriptionArr);
        let description = descriptionArr[0];
        description.innerHTML = carousel.description;
        description.href = carousel.link;
        

    }
};
