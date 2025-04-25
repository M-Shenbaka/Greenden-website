//Selecting side Nav bar,Menu icon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var close_sidenav = document.getElementById("close_sidenav")


menuicon.addEventListener("click",function()
{
    sidenav.style.right = 0
})

close_sidenav.addEventListener("click",function()
{
    sidenav.style.right = "-50%"
})


//Product search functionality
var container = document.getElementById("Product-container")
var search = document.getElementById("search")
var productList = container.querySelectorAll("div") 
search.addEventListener("keyup",function(event)
{
    var enteredValue = event.target.value.toUpperCase()

    for(let count = 0; count < productList.length; count++)
    {
        var productname = productList[count].querySelector("h1").textContent.toUpperCase()
        if(productname.indexOf(enteredValue) < 0)
        {
            productList[count].style.display = "none"
        }
        else{
            productList[count].style.display = "block"
        }
    }
})