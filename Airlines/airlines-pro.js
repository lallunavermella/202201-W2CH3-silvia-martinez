const flights = [
  { id: 1, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 2, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 3, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 4, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 5, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 6, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 7, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 8, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 9, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 10, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 11, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
let userName;

function costMediumFligths(flightArray) {
  let sumatori = 0;

  for (let i = 0; i < flightArray.length; i++) {
    sumatori += flightArray[i].cost;
  }
  return (sumatori / flightArray.length).toFixed(2);
}
function createNewId(arrayFligths) {
  let newFlightId = Window.prompt("Create a new ID");
  if (newFlightId === null) {
    Window.alert("This imput is not valid");
    return;
  }
  newFlightId = parseInt(newFlightId);
  if (!isNumber(newFlightId) || newFlightId === "" || newFlightId === " ") {
    Window.alert("This ID is invalid");
  } else if (newFlightId) {
    for (let i = 0; i < arrayFligths.length; i++) {
      if (newFlightId === arrayFligths[i].id) {
        alert("This ID already exist");
        return;
      }
    }
  }
  return newFlightId;
}
function createNewFlightTo() {
  let newFlightTo = prompt("Flight to:");
  if (newFlightTo === null) {
    alert("This imput is not valid");
    return;
  }
  if (isNumber(newFlightTo) || newFlightTo === "" || newFlightTo === " ") {
    Window.alert("This imput is not valid");
    return;
  }
  newFlightTo = upperCaseFirstLetter(newFlightTo);
  return newFlightTo;
}

function createNewFlightFrom() {
  let newFlightFrom = prompt("Fligth from:");

  if (newFlightFrom === null) {
    Window.alert("This imput is not valid");
    return;
  }
  if (
    isNumber(newFlightFrom) ||
    newFlightFrom === "" ||
    newFlightFrom === " "
  ) {
    Window.alert("This imput is not valid");
    return;
  }
  newFlightFrom = upperCaseFirstLetter(newFlightFrom);
  return newFlightFrom;
}
function createNewFlightCost() {
  let newFlightCost = Window.prompt("This flight cost:");
  if (newFlightCost === null) {
    Window.alert("This imput is not valid");
    return;
  }

  newFlightCost = parseInt(newFlightCost);

  if (
    !isNumber(newFlightCost) ||
    newFlightCost === "" ||
    newFlightCost === " " ||
    Math.sign(newFlightCost) === -1
  ) {
    Window.alert("This cost is not valid");
    return;
  }
  return newFlightCost;
}
function createNewFlightScale() {
  let newFlightScale = Window.prompt("The new fligth has stopovers? ");
  if (newFlightScale === null) {
    Window.alert("This imput is not valid");
    return;
  }

  newFlightScale = newFlightScale.toLowerCase().trim();
  switch (newFlightScale) {
    case "yes":
      newFlightScale = "yes";
      break;
    case "true":
      newFlightScale = "yes";
      break;
    case "si":
      newFlightScale = "yes";
      break;
    case "false":
      newFlightScale = "no";
      break;
    case "not":
      newFlightScale = "no";
      break;
    default:
      newFlightScale = "no";
      break;
  }
  return newFlightScale;
}

function adminCreateFligth(arrayFlights) {
  do {
    const id = createNewId(arrayFlights);
    if (!id) {
      continue;
    }
    const to = createNewFlightTo();
    if (!to) {
      continue;
    }
    const from = createNewFlightFrom();
    if (!from) {
      continue;
    }
    const cost = createNewFlightCost();
    if (!cost) {
      continue;
    }
    const scale = createNewFlightScale();
    if (!scale) {
      continue;
    }

    arrayFlights.push({ id, to, from, cost, scale });
  } while (
    arrayFlights.length < 15 &&
    Window.confirm("Do you want to create a new fligth?")
  );

  console.table(arrayFlights.sort((a, b) => a.id - b.id));
}

function airlines(arrayFlights) {
  let stopOver;
  arrayFlights.sort((a, b) => a.id - b.id);
  userName = Window.prompt("Welcome, what's your name?");

  if (userName === null) {
    console.log("Good bye!");
    return;
  }

  userName = upperCaseFirstLetter(userName);
  console.log(
    `Wellcome ${userName}, for today SkyLab <ISDI> airlines have the next fligths:`
  );

  const flightsScale = [];

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      flights[i].scale = "yes";
      stopOver = "has stopover";
    } else if (flights[i].scale === false) {
      flights[i].scale = "no";
      stopOver = "hasn't stopover";
    }
    if (flights[i].scale === "yes") {
      flightsScale.push(arrayFlights[i].scale);
    }
    console.log(
      `\t fligth ${arrayFlights[i].id} from ${arrayFlights[i].from} to ${arrayFlights[i].to}, it cost ${arrayFlights[i].cost} € and ${stopOver}.`
    );
  }

  const costMedium = costMediumFligths(flights);
  console.log(`the average cost of our flights is ${costMedium}€. `);

  console.log(`There are ${flightsScale.length} stopover fligths`);

  const lastDestination = [];
  for (let i = arrayFlights.length - 5; i < arrayFlights.length; i++) {
    lastDestination.push(arrayFlights[i].to);
  }
  console.log(
    `The latest destinations for SkyLab <ISDI> airlines flights are: ${lastDestination}`
  );
}
function adminDeleteFligth(arrayFlights) {
  console.table(arrayFlights);
  do {
    const flightToDelete = parseInt(Window.prompt("ID to delete"),10);
    if (
      !isNumber(flightToDelete) ||
      flightToDelete === "" ||
      flightToDelete === " "
    ) {
      Window.alert("This ID is invalid");
      return;
    }
    for (let i = 0; i < arrayFlights.length; i++) {
      if (arrayFlights[i].id === flightToDelete) {
        Window.alert(
          `${userName} you delete the flight: ${arrayFlights[i].id},from: ${arrayFlights[i].from}, to: ${arrayFlights[i].to}`
        );
        arrayFlights.splice(i, 1);
      }
    }
  } while (
    arrayFlights.length !== 0 &&
    Window.confirm("Do you want to delete another flight?")
  );
  console.table(arrayFlights.sort((a, b) => a.id - b.id));
}

function adminTask(arrayFlights) {
  let adminJob = Window.prompt(
    "Do you want to CREATE new fligts or DELETE fligths?"
  );
  if (adminJob === null) {
    console.log(`Good Bye! ${userName}`);
    return;
  }
  adminJob = adminJob.toUpperCase();
  if (adminJob === "CREATE") {
    adminCreateFligth(arrayFlights);
  } else if (adminJob === "DELETE") {
    adminDeleteFligth(arrayFlights);
  }
}

function user(arrayFlights) {
  const searchCost = Window.prompt(
    "Search Fligth Cost. A - more expensive, B - cheaper or C - equal to"
  );
  let idSelectet;
  const listFlight = [];
  if (searchCost === null) {
    console.log("Good bye!");
    return;
  }
  searchCost.toLowerCase();
  const expCost
  if (searchCost === "a" || searchCost === "b" || searchCost === "c") {
    switch (searchCost) {
      case "a":
        expCost = parseInt(prompt("More expensive than:"));
        for (let i = 0; i < arrayFlights.length; i++) {
          if (expCost < arrayFlights[i].cost) {
            listFlight.push(arrayFlights[i]);
          }
        }
        console.table(listFlight.sort((a, b) => b.cost - a.cost));
        idSelectet = parseInt(
          prompt("Do you want tu buy? Please select flight ID")
        );
        for (let i = 0; i < arrayFlights.length; i++) {
          if (idSelectet === arrayFlights[i].id) {
            console.log(
              `Has chosen ${arrayFlights[i].id}, from: ${arrayFlights[i].from}, to: ${arrayFlights[i].to}. Thanks for your purchase.`
            );
          }
        }
        break;

      case "b":
        const cheapCost = parseInt(prompt("Cheaper than:"));
        for (let i = 0; i < arrayFlights.length; i++) {
          if (cheapCost > arrayFlights[i].cost) {
            listFlight.push(arrayFlights[i]);
          }
        }
        console.table(listFlight.sort((a, b) => a.cost - b.cost));
        idSelectet = parseInt(
          prompt("Do you want tu buy? Please select flight ID")
        );
        for (let i = 0; i < arrayFlights.length; i++) {
          if (idSelectet === arrayFlights[i].id) {
            console.log(
              `Has chosen ${arrayFlights[i].id}, from: ${arrayFlights[i].from}, to: ${arrayFlights[i].to}. Thanks for your purchase.`
            );
          }
        }
        break;

      case "c":
        const equalCost = parseInt(prompt("Equal to?"));
        for (let i = 0; i < arrayFlights.length; i++) {
          if (equalCost === arrayFlights[i].cost) {
            listFlight.push(arrayFlights[i]);
          } else if (equalCost !== arrayFlights[i].cost) {
            console.log("there are no flights with this cost");
          }
        }
        console.table(listFlight.sort((a, b) => a.id - b.id));
        idSelectet = parseInt(
          prompt("Do you want tu buy? Please select flight ID")
        );
        for (let i = 0; i < arrayFlights.length; i++) {
          if (idSelectet === arrayFlights[i].id) {
            console.log(
              `Has chosen ${arrayFlights[i].id}, from: ${arrayFlights[i].from}, to: ${arrayFlights[i].to}. Thanks for your purchase.`
            );
          }
        }
        break;
    }
  } else {
    user(arrayFlights);
  }
  console.log(`Come back soon ${userName}!`);
}

function isNumber(inputText) {
  const isNumbers = !Number.isNaN(Number(inputText));
  return isNumbers;
}
function airlinesPro() {
  airlines(flights);
  let typeOfUser = Window.prompt("Are you a ADMIN or an USER?");
  if (typeOfUser === null || typeOfUser === "") {
    console.log("Good bye");
    return;
  }

  typeOfUser = typeOfUser.toLowerCase();
  switch (typeOfUser) {
    case "admin":
      adminTask(flights);
      break;
    case "user":
      user(flights);
      break;
    default:
      airlinesPro();
      break;
  }
}
