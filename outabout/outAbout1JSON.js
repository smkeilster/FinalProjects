// search for #delete once this is good to go
let xhr = new XMLHttpRequest();



//get function from the database 
function buildContent() {
    xhr.open('GET', "http://127.0.0.1:8000/api/getContent", true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
}

// returns JSON object from the database
function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        let content = response.content;
        console.log(content);
        buildSpan(content);
    }
}

function buildSpan(content) {
    // variables that will be used in multiple statements 
    let anchor;
    let span;
    let containerID;
    let container;
    let row;
    let imageDiv;
    let builtSpan = [];
    // for loop runs through the entire json object returned by the database.
    for (var i = 0; i < content.length; i++) {
        // if statement eliminates duplicate city listings from the join query in the database
        if (builtSpan.indexOf(content[i].anchorLink) >= 0) {
        }
        // relys on the new built Span array to determine if the div already exists #builtSpanArray
        else {
            // creates the span using the unique anchorLink column as the id.
            anchor = content[i].anchorLink;
            // creates span
            span = document.createElement("span");
            console.log(content[i].anchorLink);
            // assigns id for navbar anchor links
            span.id = anchor;
            console.log(span.id);
            // builds span within existing "pageDiv" in the html
            document.getElementById("pageDiv").append(span);
            // creates the div using the unique cityID column as the id
            containerID = content[i].cityID;
            // creates div
            container = document.createElement("div");
            // assigns id for conditional formatting
            container.id = containerID;
            // determines the css using modulus to determine if id is odd or even
            if (containerID % 2 == 1) {
                container.className = "container-fluid oddSection";
            }
            else {
                container.className = "container-fluid evenSection";
            }
            // builds div under corresponding span wihtin the existing "pageDiv" in the html
            document.getElementById("pageDiv").append(container);
            // creates an additional nested div for bootstrap
            row = document.createElement("div");
            // assigns necessary class name for bootstrap
            row.className = "row";
            row.id = containerID;
            console.log(containerID)
            // builds the div within the container div
            document.getElementById(containerID).append(row);
            // creates div
            imageDiv = document.createElement("div");
            // assigns bootstrap css
            imageDiv.className = "col-md-4 hp";
            imageDiv.id = containerID;
            // builds div within the row
            document.getElementById(row.id).appendChild(imageDiv);

            // pulls in the cityState from the database
            let cityState = content[i].cityState;
            // creates the element for the cityState
            let header = document.createElement("h4");
            // creates the text within the element
            let textnode = document.createTextNode(cityState);
            // these three lines nest the variables within the new header in the imageDiv
            header.appendChild(textnode);
            header.className = "h4";
            imageDiv.appendChild(header);
            // conditional format for if the image is available
            if (content[i].imageURL) {
                // creates the image
                let thumbnail = document.createElement("img");
                // pulls in the image URL from the database
                thumbnail.src = content[i].imageURL
                // adds bootstrap css to img
                thumbnail.className = "img-thumbnail imgSize";
                // adds the thumbnail to the image div
                imageDiv.appendChild(thumbnail)
                // shows the correct image source is being pulled
                // console.log(content[i].imageURL)
            }
            let eventsDiv = document.createElement("div");
            eventsDiv.className = "col-md-8 hp";
            eventsDiv.id = containerID;
            document.getElementById(row.id).appendChild(eventsDiv);
        }
        // creates new array #builtSpanArray
        builtSpan.push(content[i].anchorLink);
        // buildEventsContent(containerID, content);
    }
}


// #start
// // this builds the content of the events div, a list of event types and descriptions
// function buildEventsContent(containerID, content, eventsDiv) {
//     // #delete
//     // let right = document.createElement("div");
//     // right.className = "col-md-8";
//     // #delete
//     console.log(content);
//     console.log(containerID);
//     for (var i = 0; i < content.length; i++) {
//         if (containerID === content.cityID) {
//             let type = content[i].type;
//             let eventType = document.createElement("dd");
//             let eventText = document.createTextNode(type);
//             eventType.appendChild(eventText);
//         }
//         document.getElementById(containerID).appendChild(eventType);
//     }
// }

// #delete if all goes well everything below this commented out can be deleted
// function buildRow(containerID) {
//     if (containerID.indexOf(containerID) >= 0) {
//     }
//     else {
//     let row = document.createElement("div");
//     row.className = "row";
//     console.log(containerID)
//     document.getElementById(containerID).append(row);
//     }
// }
// function buildCityDiv(content) {
//     let builtDivs = [];
//     let varcity = document.createElement("div");
//     for (var i = 0; i <= content.length; i++) {
//         if (builtDivs.indexOf(content[i].cityID) >= 0) {
//         }
//         else {
//             let anchor ='id="' + content[i].anchorLink + '" class="hp testDiv"';
//             let varcityTextNode =document.createTextNode(anchor);
//             varcity.appendChild(varcityTextNode);

//             console.log(varcity);
//             builtDivs.push(varcity);
//             // $('#left').append('<div id="' + content[i].anchorLink + '" class="hp testDiv"></div>');
//         }

//         document.getElementById("pageDiv").appendChild(varcity);
//         buildImageDiv(varcity);
//         console.log(varcity);
//     }
// }
// function buildImageDiv(containerID) {
//     console.log(containerID);
//     // #delete
//     // let imageDiv = document.createElement("div");
//     // imageDiv.className = "col-md-4 hp";
//     let builtSpan = [];
//     for (var i = 0; i < content.length; i++) {
//         console.log("i top " + i);
//         if (builtCities.indexOf(content[i].cityID) >= 0) {
//         }
//         else {
//             // this builds the left section
//             let cityState = content[i].cityState;
//             let header = document.createElement("h4");
//             let textnode = document.createTextNode(cityState);
//             header.appendChild(textnode);
//             header.className = "h4";
//             imageDiv.appendChild(header);
//             // console.log(header);

//             if (content[i].imageURL) {
//                 let thumbnail = document.createElement("img");
//                 thumbnail.src = content[i].imageURL
//                 thumbnail.className = "img-thumbnail imgSize";
//                 left.appendChild(thumbnail)
//                 console.log(content[i].imageURL)
//             }
//             builtCities.push(content[i].cityID);
//             // buildEventsDiv(content[i].cityID)
//         }
//         console.log("i" + i);
//         document.getElementById(varcity.id).appendChild(left);
//     }
// }

buildContent()