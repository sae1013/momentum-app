const createTodayBgImg = () => {
    const images = ["img-1.jpeg","img-2.jpeg","img-3.jpeg"];
    const background = document.querySelector('.background');
    const bgElement = document.createElement('img');
    
    const todayBackgroundImg = images[Math.floor(Math.random() * images.length)];
    bgElement.src = `../src/assets/${todayBackgroundImg}`
    
    background.prepend(bgElement);
} ;

createTodayBgImg();

