var profileLink = document.getElementById("profile-link");
//link that pops up profile details

var listBlock = document.getElementById("list-unstyled");
//unordered list that is not visible

var buttonOpen = document.getElementById("button-open");
// when click on this button unordered list is visible

listBlock.style.display="none";
//set list as invisible when document loads

function makeVisible(){
  listBlock.style.display = "block"; //make list visible
}
buttonOpen.addEventListener('click', makeVisible, false); //call function to make list visible
