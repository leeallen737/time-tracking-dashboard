const timerTitle = document.querySelectorAll('[timer-title]');
//for click event
const daily = document.querySelector('[daily]');
const weekly = document.querySelector('[weekly]');
const monthly = document.querySelector('[monthly]');


const currentHours = document.querySelectorAll('[current-hours]')
const previousHours = document.querySelectorAll('[previous-hours]')



const dataCall = async () => {

    const URL = './data.json'
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)

    for(let i = 0; i < data.length; i++) {
    //titles
    timerTitle[i].innerHTML = `${data[i].title}`
    
    const weekly = (weekData) => {
        currentHours[i].innerHTML = `${weekData.current}hrs`
        previousHours[i].innerHTML = `Last Week - ${weekData.previous}hrs`
    }
    
    weekly(data[i].timeframes.weekly)
}

}

weekly.addEventListener('click', e => {
    dataCall()
})



