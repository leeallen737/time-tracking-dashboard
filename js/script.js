const timerTitle = document.querySelectorAll('[timer-title]');
//for click event
const dailyButton = document.querySelector('[daily]');
const weeklyButton = document.querySelector('[weekly]');
const monthlyButton = document.querySelector('[monthly]');

//hours to be added from API
const currentHours = document.querySelectorAll('[current-hours]')
const previousHours = document.querySelectorAll('[previous-hours]')



const dataCall = async () => {

    const URL = './data.json'
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)

    //weekly data set (default run)
    for(let i = 0; i < data.length; i++) {
        //titles
        timerTitle[i].innerHTML = `${data[i].title}`
        
        const weekly = (weekData) => {
            currentHours[i].innerHTML = `${weekData.current}hrs`
            previousHours[i].innerHTML = `Last Week - ${weekData.previous}hrs`
        }
        
        weekly(data[i].timeframes.weekly)
    }
    //weekly data set (when clicked)
    weeklyButton.addEventListener('click', e => {
        
         //change button color
         dailyButton.style.color = '#818cf8'
         weeklyButton.style.color = 'white'
         monthlyButton.style.color = '#818cf8'

        for(let i = 0; i < data.length; i++) {
        
        const weekly = (weekData) => {
            currentHours[i].innerHTML = `${weekData.current}hrs`
            previousHours[i].innerHTML = `Last Week - ${weekData.previous}hrs`
        }
        
        weekly(data[i].timeframes.weekly)
    }
    })

    //daily data set (when clicked)
    dailyButton.addEventListener('click', e => {

         //change button color
         dailyButton.style.color = 'white'
         weeklyButton.style.color = '#818cf8'
         monthlyButton.style.color = '#818cf8'
    
        for(let i = 0; i < data.length; i++) {
        
        const daily = (dailyData) => {
            currentHours[i].innerHTML = `${dailyData.current}hrs`
            previousHours[i].innerHTML = `Yesterday - ${dailyData.previous}hrs`
        }
        
        daily(data[i].timeframes.daily)
    }
    })

    //monthly data set (when clicked)
    monthlyButton.addEventListener('click', e => {

        //change button color
        dailyButton.style.color = '#818cf8'
        weeklyButton.style.color = '#818cf8'
        monthlyButton.style.color = 'white'

    
        for(let i = 0; i < data.length; i++) {
        
        const monthly = (monthlyData) => {
            currentHours[i].innerHTML = `${monthlyData.current}hrs`
            previousHours[i].innerHTML = `Last Month - ${monthlyData.previous}hrs`
        }
        
        monthly(data[i].timeframes.monthly)
    }
    })

}

dataCall()
