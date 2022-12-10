const book1 = document.getElementById("book1")
const book2 = document.getElementById("book2")
const book3 = document.getElementById("book3")
const p = document.getElementById("display")
book1.addEventListener('click', handleClick)

book2.addEventListener('click', handleClick)
const xy = document.getElementById("xy")
book3.addEventListener('click', handleClick)


async function handleClick(e) {
    e.preventDefault();
    console.log(e.target.innerText.split(" ")[0])
    book(e.target.innerText.split(" ")[0])
    xy.innerText = e.target.innerText
}


function book(val) {
    if (val == "Alice") {
        read("./AliceInWonderland.txt", "Alice In WonderLand");
    }
    if (val == "Dr.") {
        read("./JekyllAndHyde.txt", "Jekyll And Hyde");
    }
    if (val == "Lord") {
        read("./LOTR.txt", "Lord Of The Rings");
    }
}

function read(url, title) {
    var client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = function () {
        var data = client.responseText;
        p.innerText = data;
    }
    client.send();
}