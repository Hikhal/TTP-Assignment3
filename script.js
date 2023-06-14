// Select the section with an id of container without using querySelector.
{
    var x = document.getElementById("container");
    console.log(x);
}
 
// Select the section with an id of container using querySelector.
{ var y = document.querySelector("#container") 
    console.log(y)
}

// Select all of the list items with a class of "second".
{
    const classList = document.querySelectorAll(".second")
    console.log(classList)
}

// Select a list item with a class of third, but only the list item inside of the ol tag.
{
    const ele = document.getElementsByTagName("ol");
    const listItemThirdClass = ele[0].getElementsByClassName("third");
    console.log(listItemThirdClass);
}

// Give the section with an id of container the text "Hello!".
console.log(document.getElementById("container").textContent = "Hello!");

// Add the class main to the div with a class of footer.
{
    var divList = document.querySelector(".footer")
    divList.classList.add("main")
    console.log(divList.classList)
}

// Remove the class main on the div with a class of footer.
{
    var divList = document.querySelector(".footer")
    divList.classList.remove("main")
    console.log(divList.classList)
}

// Create a new li element.
{
    var liElement = document.createElement("li"); // Create a new <li> element

}

// Give the li the text "four".
{
    liElement.textContent = "four";
    console.log(fourthEle)
}

// Append the li to the ul element.
{
    var containerList = document.getElementsByTagName("ul")[0];
    containerList.appendChild(liElement);
    console.log(containerList);
}

// Loop over all of the lis inside the ol tag and give them a background color of "green".
{
    const listOfols= document.getElementsByTagName("ol");
    for (let li of listOfols) li.style.backgroundColor="green";
    'green'
}

//  Remove the div with a class of footer.
{
    var footerElement = document.querySelector("div.footer"); 
    footerElement.remove();
}
