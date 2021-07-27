/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr){
    let empRec = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return empRec
}

function createEmployeeRecords(arr){
    return arr.map(createEmployeeRecord)
}

function createTimeInEvent(timeStamp){
    const timeStampArr = timeStamp.split(" ")
    let e = { 
        type: "TimeIn",
        date: timeStampArr[0],
        hour: parseInt(timeStampArr[1])
    }
    this.timeInEvents.push(e)
    return this
}

function createTimeOutEvent(timeStamp){
    const timeStampArr = timeStamp.split(" ")

    let e = {
        type: "TimeOut",
        date: timeStampArr[0],
        hour: parseInt(timeStampArr[1])
    }
    this.timeOutEvents.push(e)
    return this
}

function hoursWorkedOnDate(timeStamp){
    let hoursWorked = 0;
    let clockIn = this.timeInEvents.find((date) =>{
        return date.date === timeStamp})
    let clockOut = this.timeOutEvents.find((date) =>{
        return date.date === timeStamp})
        hoursWorked = (clockOut.hour - clockIn.hour)/100
        return hoursWorked
    }

function wagesEarnedOnDate(timeStamp){
    return hoursWorkedOnDate.call(this, timeStamp) * this.payPerHour
}

function allWagesFor(){
    let wage = this.timeInEvents.forEach((timeIn)=>{
        return timeIn.date
    })
    return wage
}

function calculatePayroll(arr){
    let payroll = arr.reduce((memo, employee) => {
        return memo + allWagesFor.call(employee)
    }, 0)
    return payroll
}

function findEmployeeByFirstName(arr, firstName){
    return arr.find((employee)=>{
        return employee.firstName
    })
}