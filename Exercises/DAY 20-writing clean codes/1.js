const showDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if(seconds < 10){
        seconds= '0' + seconds
    }
    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes + ':' + seconds
    const fullTime = dateMonthYear + ' ' + time
    console.log(fullTime)
  }
  setInterval(showDateTime,1000)