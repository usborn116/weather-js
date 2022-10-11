const srch = document.getElementById('srch');
const temp = document.getElementById('showtmp');
const desc = document.getElementById('desc');
const img = document.querySelector('img');

async function getweather(){
    const city = document.getElementById('city').value
    const unit = document.getElementById('unit').value;
    let unittemp
    if (unit == 'C'){
        unittemp = 'metric';
    } else {
        unittemp = 'imperial'
    };
    const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units='+unittemp+'&APPID=89e74adc6a9963458de47ec6e993dc74', {mode: 'cors'});
    const info = await data.json();
    console.log(info)
    const tmp = info.main.temp+' degrees'
    const description = info.weather[0].main
    temp.textContent = tmp;
    desc.textContent = description;
    getimg(description);
};

async function getimg(forecast){
    const imgsearch = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=71BOTCUg66j0u5nMkEfiXOZb4fgZy6EV&s='+forecast, {mode: 'cors'});
    const info = await imgsearch.json();
    img.src = info.data.images.original.url;
}