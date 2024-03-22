let serverNameInput = document.getElementById("serverName");
let serverForm = document.getElementById("serverForm");

let serverTbody = document.querySelector("#serverTable tbody");

let allServers = {}; // obj
let serverId = 0;

serverForm.addEventListener("submit", submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== "") {
    serverId++;
    allServers["server" + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = "";
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = "";

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement("tr");
    newTr.setAttribute("id", key);

    let tipAverage = sumPaymentTotal("tipAmt") / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, "$" + tipAverage.toFixed(2));

    serverTbody.append(newTr);
  }
}
console.log(allServers);

/* 

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== "") {
    serverId++;
    allServers["server" + serverId] = { serverName };
    console.log(allServers);

    updateServerTable();

    serverNameInput.value = "";
  }
}

allServers = {
  server1: {
    serverName: "server name"
  }
}

allServers["server" + serverId] = { serverName };
  1.  `allServers` object where each server information is stored.
  2.  `["server" + serverId]`, dynamically creates a property name for `allServers` object. 
  3.  `= { serverName }`:
    - Assigns a value to the property `["server" + serverId]`. 
    - The assigned value is an object containing a property named       `serverName`, 
    - with the value of the variable `serverName`.

*/
