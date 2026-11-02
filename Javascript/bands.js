let bandList = [];

function addBand() {
    let input = document.getElementById("band");
    let output = document.getElementById("list");
    let band = input.value;
    bandList.push(band);
    output.textContent = "["+ bandList.join(', ')+"]";
    input.value= "";
}

function clearList(){
    bandList [];
    let output = document.getElementById("list");
    output.textContent = "["+ bandList.join(', ')+"]";

}