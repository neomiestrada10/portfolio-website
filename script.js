let photos = [
    {
        image: "food.jpeg",
        caption: "Discovering new food places."
    },
    {
        image: "exploring.jpeg",
        caption: "Exploring my city."
    },
    {
        image: "nature.jpeg",
        caption: "Enjoying nature's beauty."
    },
    {
        image: "music.jpg",
        caption: "Listening to live music."
    }
];

let currentPhoto = 0;
document.getElementById("changePhoto").addEventListener("click", function () {
    currentPhoto++;
    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }
    document.getElementById("myPhoto").src = photos[currentPhoto].image;
    document.getElementById("photoCaption").textContent = photos[currentPhoto].caption;
});