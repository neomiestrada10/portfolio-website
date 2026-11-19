// Click Me button for Hobbies section //
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
        caption: "Catching sunsets."
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
    document.getElementById("images").src = photos[currentPhoto].image;
    document.getElementById("photoCaption").textContent = photos[currentPhoto].caption;
});