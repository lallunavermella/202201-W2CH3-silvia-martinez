let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

let userName

function airlinesPro() {
    airlines(flights)
    let typeOfUser = prompt("Are you a ADMIN or an USER?")
    if (typeOfUser === null || typeOfUser === "") {
        console.log("Good bye")
        return
    }

    typeOfUser = typeOfUser.toLowerCase()
    switch (typeOfUser) {
        case 'admin':
            adminTask(flights)
            break;
        case 'user':
            user(flights)
            break;
        default:
            airlinesPro()
            break;
    }
}

function airlines(arrayFlights) {
    arrayFlights.sort((a, b) => a.id - b.id)
    userName = prompt("Welcome, what's your name?")

    if (userName === null) {
        console.log("Good bye!")
        return
    }

    userName = upperCaseFirstLetter(userName)
    console.log(`Wellcome ${userName}, for today SkyLab <ISDI> airlines have the next fligths:`)

    let flightsScale = []

    for (let i = 0; i < flights.length; i++) {
        if (flights[i].scale === true) {
            flights[i].scale = 'yes'
            stopOver = 'has stopover'

        } else if (flights[i].scale === false) {
            flights[i].scale = 'no'
            stopOver = "hasn't stopover"
        }
        if (flights[i].scale === 'yes') {
            flightsScale.push(arrayFlights[i].scale)
        }
        console.log(`\t fligth ${arrayFlights[i].id} from ${arrayFlights[i].from} to ${arrayFlights[i].to}, it cost ${arrayFlights[i].cost} € and ${stopOver}.`)

    }

    let costMedium = costMediumFligths(flights)
    console.log(`the average cost of our flights is ${costMedium}€. `)

    console.log(`There are ${flightsScale.length} stopover fligths`)

    let lastDestination = []
    for (let i = arrayFlights.length - 5; i < arrayFlights.length; i++) {

        lastDestination.push(arrayFlights[i].to)

    }
    console.log(`The latest destinations for SkyLab <ISDI> airlines flights are: ${lastDestination}`)
}

function upperCaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function costMediumFligths(flightArray) {
    let sumatori = 0

    for (let i = 0; i < flightArray.length; i++) {
        sumatori += flightArray[i].cost;
    }
    return (sumatori / flightArray.length).toFixed(2)
}

function adminTask(arrayFlights) {
    let adminJob = prompt("Do you want to CREATE new fligts or DELETE fligths?")
    if (adminJob === null) {
        console.log(`Good Bye! ${userName}`)
        return;
    }
    adminJob = adminJob.toUpperCase()
    if (adminJob === "CREATE") {
        adminCreateFligth(arrayFlights)
    } else if (adminJob === "DELETE") {
        adminDeleteFligth(arrayFlights)
    }
}

function createNewId(arrayFligths) {
    newFlightId = prompt("Create a new ID")
    if (newFlightId === null) {
        alert('This imput is not valid')
        return
    }

    newFlightId = parseInt(newFlightId)
    if (!isNumber(newFlightId) || newFlightId === "" || newFlightId === " ") {
        alert("This ID is invalid")
    } else if (newFlightId) {
        for (let i = 0; i < arrayFligths.length; i++) {
            if (newFlightId === arrayFligths[i].id) {
                alert('This ID already exist')
                return
            }
        }
    }
    return newFlightId
}

function createNewFlightTo() {
    newFlightTo = prompt("Flight to:")
    if (newFlightTo === null) {
        alert("This imput is not valid")
        return
    }
    if (isNumber(newFlightTo) || newFlightTo === "" || newFlightTo === " ") {
        alert("This imput is not valid")
        return
    }
    newFlightTo = upperCaseFirstLetter(newFlightTo)
    return newFlightTo;
}

function createNewFlightFrom() {
    newFlightFrom = prompt("Fligth from:")

    if (newFlightFrom === null) {
        alert("This imput is not valid")
        return
    }
    if (isNumber(newFlightFrom) || newFlightFrom === "" || newFlightFrom === " ") {
        alert("This imput is not valid")
        return
    }
    newFlightFrom = upperCaseFirstLetter(newFlightFrom)
    return newFlightFrom;
}

function createNewFlightCost() {
    newFlightCost = prompt("This flight cost:")
    if (newFlightCost === null) {
        alert("This imput is not valid")
        return
    }

    newFlightCost = parseInt(newFlightCost)

    if (!isNumber(newFlightCost) || newFlightCost === "" || newFlightCost === " " || Math.sign(newFlightCost) === -1) {
        alert("This cost is not valid")
        return
    }
    return newFlightCost
}
function createNewFlightScale() {
    newFlightScale = prompt("The new fligth has stopovers? ")
    if (newFlightScale === null) {
        alert('This imput is not valid')
        return
    }

    newFlightScale = newFlightScale.toLowerCase().trim()
    switch (newFlightScale) {
        case 'yes':
            newFlightScale = 'yes'
            break;
        case "true":
            newFlightScale = 'yes'
            break;
        case "si":
            newFlightScale = 'yes'
            break;
        case 'false':
            newFlightScale = 'no'
            break;
        case "not":
            newFlightScale = 'no'
            break;
        default:
            newFlightScale = 'no'
            break;
    }
    return newFlightScale
}

function adminCreateFligth(arrayFlights) {
    do {
        let id = createNewId(arrayFlights)
        if (!id) {
            continue
        }
        let to = createNewFlightTo()
        if (!to) {
            continue
        }
        let from = createNewFlightFrom()
        if (!from) {
            continue
        }
        let cost = createNewFlightCost()
        if (!cost) {
            continue
        }
        let scale = createNewFlightScale()
        if (!scale) {
            continue
        }

        arrayFlights.push({ id: id, to: to, from: from, cost: cost, scale: scale })

    } while (arrayFlights.length < 15 && confirm("Do you want to create a new fligth?"));

    console.table(arrayFlights.sort((a, b) => a.id - b.id))
}

function adminDeleteFligth(arrayFlights) {
    console.table(arrayFlights)
    do {
        let flightToDelete = parseInt(prompt("ID to delete"))
        if (!isNumber(flightToDelete) || flightToDelete === "" || flightToDelete === " ") {
            alert("This ID is invalid")
            return
        } else {
            for (let i = 0; i < arrayFlights.length; i++) {

                if (arrayFlights[i].id === flightToDelete) {
                    alert(`${userName} you delete the flight: ${arrayFlights[i].id},from: ${arrayFlights[i].from}, to: ${arrayFlights[i].to}`)
                    arrayFlights.splice(i, 1);
                }
            }
        }

    } while (arrayFlights.length !== 0 && confirm('Do you want to delete another flight?'))
    console.table(arrayFlights.sort((a, b) => a.id - b.id))
}

function user(arrayFlights) {
    let searchCost = prompt("Search Fligth Cost. A - more expensive, B - cheaper or C - equal to")
    let idSelectet
    let listFlight = []
    if (searchCost === null) {
        console.log("Good bye!")
        return
    }
    searchCost.toLowerCase()
    if (searchCost === "a" || searchCost === "b" || searchCost === "c") {
        switch (searchCost) {
            case "a":
                let expCost = parseInt(prompt("More expensive than:"))
                for (let i = 0; i < arrayFlights.length; i++) {
                    if (expCost < arrayFlights[i].cost) {
                        listFlight.push(arrayFlights[i])
                    }
                }
                console.table(listFlight.sort((a, b) => b.cost - a.cost));
                idSelectet = parseInt(prompt("Do you want tu buy? Please select flight ID"))
                for (let i = 0; i < arrayFlights.length; i++) {
                    if (idSelectet === arrayFlights[i].id) {
                        console.log(`Has chosen ${arrayFlights[i].id}, from: ${arrayFlights[i].from}, to: ${arrayFlights[i].to}. Thanks for your purchase.`)
                    }
                }
                break;

            case "b":
                let cheapCost = parseInt(prompt("Cheaper than:"))
                for (let i = 0; i < arrayFlights.length; i++) {
                    if (cheapCost > arrayFlights[i].cost) {
                        listFlight.push(arrayFlights[i])
                    }
                }
                console.table(listFlight.sort((a, b) => a.cost - b.cost));
                idSelectet = parseInt(prompt("Do you want tu buy? Please select flight ID"))
                for (let i = 0; i < arrayFlights.length; i++) {
                    if (idSelectet === arrayFlights[i].id) {
                        console.log(`Has chosen ${arrayFlights[i].id}, from: ${arrayFlights[i].from}, to: ${arrayFlights[i].to}. Thanks for your purchase.`)
                    }
                }
                break;

            case "c":
                let equalCost = parseInt(prompt("Equal to?"))
                for (let i = 0; i < arrayFlights.length; i++) {
                    if (equalCost === arrayFlights[i].cost) {
                        listFlight.push(arrayFlights[i])
                    } else if (equalCost !== arrayFlights[i].cost) {
                        console.log("there are no flights with this cost")
                    }
                }
                console.table(listFlight.sort((a, b) => a.id - b.id));
                idSelectet = parseInt(prompt("Do you want tu buy? Please select flight ID"))
                for (let i = 0; i < arrayFlights.length; i++) {
                    if (idSelectet === arrayFlights[i].id) {
                        console.log(`Has chosen ${arrayFlights[i].id}, from: ${arrayFlights[i].from}, to: ${arrayFlights[i].to}. Thanks for your purchase.`)
                    }
                }
                break;
        }

    } else {
        user(arrayFlights)
    }
    console.log(`Come back soon ${userName}!`)
}

function isNumber(inputText) {
    let isNumber = !isNaN(Number(inputText))
    return isNumber
}
