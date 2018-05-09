let xhr = new XMLHttpRequest();
let content;

function buildContent() {
    xhr.open('GET', "http://127.0.0.1:8000/api/getContent", true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e) {
    // document.getElementById("left").innerHTML = "";
    if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        content = response.content;
        console.log(response);
        buildCityDiv(content);
    }
}

function buildCityDiv(content) {
    let builtDivs = [];
    let varcity = document.createElement("div");
    for (var i = 0; i <= content.length; i++) {
        if (builtDivs.indexOf(content[i].cityID) >= 0) {
        }
        else {
            let anchor ='id="' + content[i].anchorLink + '" class="hp testDiv"';
            let varcityTextNode =document.createTextNode(anchor);
            varcity.appendChild(varcityTextNode);
            
            console.log(varcity);
            builtDivs.push(varcity);
            // $('#left').append('<div id="' + content[i].anchorLink + '" class="hp testDiv"></div>');
        }
        
        document.getElementById("pageDiv").appendChild(varcity);
        buildImageDiv(varcity);
        console.log(varcity);
    }
    
}
function buildImageDiv(varcity) {
    console.log(varcity);
    let left = document.createElement("div");
    left.className = "col-md-4 hp";
    let builtCities = [];

    for (var i = 0; i < content.length; i++) {
        console.log("i top " + i);
        if (builtCities.indexOf(content[i].cityID) >= 0) {
        }
        else {
            // this builds the left section
            let cityState = content[i].cityState;
            let header = document.createElement("h4");
            let textnode = document.createTextNode(cityState);
            header.appendChild(textnode);
            header.className = "h4";
            left.appendChild(header);
            // console.log(header);

            if (content[i].imageURL) {
                let thumbnail = document.createElement("img");
                thumbnail.src = content[i].imageURL
                thumbnail.className = "img-thumbnail imgSize";
                left.appendChild(thumbnail)
                console.log(content[i].imageURL)
            }
            builtCities.push(content[i].cityID);
            buildEventsDiv(content[i].cityID)
        }
        console.log("i" + i);
        document.getElementById(varcity.id).appendChild(left);
    }
}

// this builds the right section
function buildEventsDiv(theCityID) {
    let right = document.createElement("div");
    right.className = "col-md-8";
    console.log(theCityID);

    for (var i = 0; i < content.length; i++) {
        if (content[i].cityID === theCityID) {
            let type = content[i].type;
            let eventType = document.createElement("dd");
            let eventText = document.createTextNode(type);
            eventType.appendChild(eventText);
            right.appendChild(eventType);
        }
        document.getElementById("right").appendChild(right);
    }
}

