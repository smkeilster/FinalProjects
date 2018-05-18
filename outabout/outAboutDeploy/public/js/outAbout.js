let xhr = new XMLHttpRequest();



//get function from the database 
function buildContent() {
    xhr.open('GET', "http://127.0.0.1:8000/api/getContent", true);
    // xhr.open('GET', "https://out-and-about-203118.appspot.com/api/getContent", true);
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
    let eventsDiv;
    let builtSpan = [];
    // for loop runs through the entire json object returned by the database.
    for (var i = 0; i < content.length; i++) {
        // if statement eliminates duplicate city listings from the join query in the database
        if (builtSpan.indexOf(content[i].anchorLink) >= 0) {
        }
        // relys on the new built Span array to determine if the div already exists #builtSpanArray
        //move events into here but right an if statement to determing if the current city id + event id already exist, if it does, do nothing
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
            imageDiv.className = "col-md-4";
            imageDiv.id = containerID;
            // builds div within the row
            row.appendChild(imageDiv);
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
                thumbnail.src = content[i].imageURL;
                // adds bootstrap css to img
                thumbnail.className = "img-thumbnail imgSize";
                // adds the thumbnail to the image div
                imageDiv.appendChild(thumbnail)
                // shows the correct image source is being pulled
                // console.log(content[i].imageURL)
            }
            // creates the Events Div
            eventsDiv = document.createElement("div");
            // applies bootstrap css
            eventsDiv.className = "col-md-8";
            // passes the container ID to the div
            eventsDiv.id = containerID;
            row.appendChild(eventsDiv);
            // this makes the list within the events div
            eventsList = document.createElement("dl");
            // passes the container ID to the list, lowest level
            eventsList.id = containerID;
            // appends list to div
            eventsDiv.appendChild(eventsList);
        }
        // this adds the dt event types
        let type = content[i].type;
        let eventType = document.createElement("dt");
        let typeText = document.createTextNode(type);
        eventType.appendChild(typeText);
        eventsDiv.appendChild(eventType);
        // this adds the dd description
        let description = content[i].description;
        let eventDescription = document.createElement("dd");
        let descriptionText = document.createTextNode(description);
        eventDescription.appendChild(descriptionText);
        eventType.appendChild(eventDescription);
        // this adds the a link out to the website
        let linkDescription = document.createElement("a");
        linkDescription.href = content[i].descriptionLink;
        eventDescription.appendChild(linkDescription);
        // this adds the icon
        if (content[i].descriptionLink) {
        let icon = document.createElement("i");
        icon.className = "far fa-arrow-alt-circle-right";
        linkDescription.appendChild(icon);
        }
        // creates new array #builtSpanArray with unique anchorLinks
        builtSpan.push(content[i].anchorLink);
        // buildEventsContent(containerID, content, eventsDiv);
    }
}
buildContent()