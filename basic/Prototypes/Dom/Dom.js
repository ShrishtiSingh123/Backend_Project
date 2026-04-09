//Example 1
document.getElementById("changeTextBtn")
.addEventListener("click", function() {
    let paragraph = document.getElementById("myparagraph");
    paragraph.textContent = "Text has been changed!";
});

//Example 2
document.getElementById("highlightFirstCity").
addEventListener("click", function() {
    let citylist=document.getElementById("citiesList");
    citylist.firstElementChild.classList.add("highlight");
});

//Example 3
document.getElementById("ChangeOrder").
addEventListener("click", function() {
    let coffeeTypes=document.getElementById("CoffeeType");
    coffeeTypes.textContent="Espresso";
    coffeeTypes.style.color="brown";
    coffeeTypes.style.padding="5px";
});

//Example 4
document.getElementById("addNewItem").addEventListener
("click", function() {
    let newItem=document.createElement("li");
    newItem.textContent="Eggs";
    document.getElementById("shoppingList").appendChild
    (newItem);
});

//Example 5
document.getElementById("removeLastTask").addEventListener
("click", function() {
    let taskList=document.getElementById("todoList");
    taskList.lastElementChild.remove();

});

//Example 6: Event Handling
document.getElementById("clickButton").addEventListener("dblclick", function() {
    alert("Button was clicked!");
});

// Example 7

document.getElementById("TeaList").addEventListener
("click", function(event) {
    if(event.target && event.target.matches(".tea")){
        alert("You clicked on " + event.target.textContent);
    }
});

// Example 8
document.getElementById("Feedbackform")
.addEventListener("submit", function(event) {
event.preventDefault();
let feedback=document.getElementById("feedbackInput").value;
console.log(feedback);
document.getElementById("feedbackdisplay")
.textContent=`Your feedback: ${feedback}`;
});
// Example 9

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("status").textContent="DOM is fully loaded!";
});
//  Example 10
document.getElementById("toggleStyle").
addEventListener("click", function() {
    let description=document.getElementById("descriptionText");
    description.classList.toggle("highlight");
});

