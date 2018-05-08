let xhr = new XMLHttpRequest();

function buildContent() {
    xhr.open('GET', "http://127.0.0.1:8000/api/getContent", true);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e) {
    document.getElementById("left").innerHTML = "";
    if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        let content = response.content;
        let left = document.createElement("div");
        let right = document.createElement("div");
        left.className = "col-md-4";
        right.className = "col-md-8";



        console.log(content)
        for (i = 0; i < content.length; i++) {
            // this builds the left section
            let sectionTitle = content[i].sectionTitle
            let header = document.createElement("h4");
            let textnode = document.createTextNode(sectionTitle);
            header.appendChild(textnode);
            left.appendChild(header)

            let thumbnail = document.createElement("img");
            thumbnail.src = content[i].photoURL
            thumbnail.className = "img-thumbnail imgSize";
            left.appendChild(thumbnail)

            // this builds the right section
            let breakfast=content[i].breakfast
            let bfast = document.createElement("dd");
            let title =document.createElement("dt");
            let titleText = document.createTextNode("Breakfast");
            let bfastText = document.createTextNode(breakfast);
            title.appendChild(titleText);
            bfast.appendChild(bfastText);
            right.appendChild(title);
            right.appendChild(bfast)

            let morning=content[i].morning
            let ming = document.createElement("dd");
            let mingText = document.createTextNode(morning);
            ming.appendChild(mingText);
            right.appendChild(ming)

            let lunch=content[i].lunch
            let lch = document.createElement("dd");
            let lchText = document.createTextNode(lunch);
            lch.appendChild(lchText);
            right.appendChild(lch)

        }
        document.getElementById("left").appendChild(left);
        document.getElementById("right").appendChild(right);

    }
}


