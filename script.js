// 1
{
    var x = document.getElementById("container");
    console.log(x);
}
 
// 2
{ var y = document.querySelector("#container") 
    console.log(y)
}

// 3
{
    const classList = document.querySelectorAll(".second")
    console.log(classList)
}

// 4
{
    const ele = document.getElementsByTagName("ol");
    const listItemThirdClass = ele[0].getElementsByClassName("third");
    console.log(listItemThirdClass);
}

// 5
console.log(document.getElementById("container").textContent = "Hello!");

// 6
{
    var divList = document.querySelector(".footer")
    divList.classList.add("main")
    console.log(divList.classList)
}

// 7
{
    var divList = document.querySelector(".footer")
    divList.classList.remove("main")
    console.log(divList.classList)
}

// 8
{
    var liElement = document.createElement("li"); // Create a new <li> element

    var containerList = document.getElementsByTagName("ul")[0];
    newEle = document.createElement("li");
    newEle.className = "fourth";
    containerList.appendChild(newEle);
    console.log(containerList);
}

// 9
{
    var fourthEle = document.getElementsByClassName("fourth")[0];
    fourthEle.textContent = "four";
    console.log(fourthEle)
}

// 10
{
    var containerList = document.getElementsByTagName("ul")[0];
    newEle = document.createElement("li");
    newEle.className = "fourth";
    containerList.appendChild(newEle);
    console.log(containerList);
}

// 11
{
    const listOfols= document.getElementsByTagName("ol");
    for (let li of listOfols) li.style.backgroundColor="green";
    'green'
}

// 12
{
    var footerElement = document.querySelector("div.footer"); 
    footerElement.remove();
}
