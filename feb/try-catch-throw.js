(function() {
    'use strict'
    let UserException = message => {
        this.name = 'UserException'
        this.message = message
    }
    let getMonthName = mo => {
        mo = mo - 1// Adjust month number for array index (1=Jan, 12=Dec)
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
        if (months[mo] !== undefined) {
            console.log(months[mo])
            return months[mo]
        } else {
            throw new UserException("InvalidMonthNo")
        }    
    }
    try {
        let month1 = 10
        let month2 = 15 // out of bounds
        let monthName1 = getMonthName(month1)
        let monthName2 = getMonthName(month2)
    }
    catch(e) {
        let monthName = 'unknown'
        logMyErrors(e.message, e.name)
    }
    function logMyErrors(message, name) {
        console.log(name + ' error! ' + message)
    }
})()
