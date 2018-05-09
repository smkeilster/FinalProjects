let xhr = new XMLHttpRequest();
let cities;
let events;

function buildContent() {
    xhr.open('GET', "http://127.0.0.1:8000/api/getContent", true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e) {
    document.getElementById("left").innerHTML = "";
    if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        cities = response.cities;
        events = response.events;
        buildCities()
        console.log(response)
    }
}


function buildCities() {
    let left = document.createElement("div");
    let right = document.createElement("div");
    left.className = "col-md-4";
    right.className = "col-md-8";



    console.log(cities)
    for (city in cities) {
        // this builds the left section
        let cityState = cities[city].cityState
        let header = document.createElement("h4");
        let textnode = document.createTextNode(cityState);
        header.appendChild(textnode);
        left.appendChild(header)
        
        if (cities[city].imageURL) {
            let thumbnail = document.createElement("img");
            thumbnail.src = cities[city].imageURL
            thumbnail.className = "img-thumbnail imgSize";
            left.appendChild(thumbnail)
        }
        buildEvents(cities[city].cityID)
    }
    document.getElementById("left").appendChild(left);
}

 // this builds the right section
function buildEvents(cityID) {
    console.log(cityID);
    console.log(events.cityID===cityID);

        for(event in events){
        console.log(event);
        }
        // let type=events[i].type
        // let eventType = document.createElement("dd");
        // let descrip =document.createElement("dt");
        // let titleText = document.createTextNode(type);
        // let bfastText = document.createTextNode(breakfast);
        // title.appendChild(titleText);
        // bfast.appendChild(bfastText);
        // right.appendChild(title);
        // right.appendChild(bfast)

        // document.getElementById("right").appendChild(right);
}

