const removeMain = document.getElementById("main")
removeMain.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Malyn Steffey is the champion";
document.body.append(newHeader);





