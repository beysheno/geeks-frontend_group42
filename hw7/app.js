// URL(UNI) - Unified Resource Locator(Identier)
// HTTP(S) - Hyper Text Transfer Protocol (secured)
// Parsing html+css=>dom(+rendering)
// executing js<=v8

let originalArray = [1500, 400, 800, 750, 8000, 250, 150, 640, 100, 370];

function buildArrayItem(value) {
  let div = document.createElement("div");
  div.className = "array-item";
  div.textContent = value;
  return div;
}
function renderArray(array, container) {
  container.innerHTML = "";
  const $arrayItems = array.map((item) => buildArrayItem(item));
  container.append(...$arrayItems);
}
let $originalArray = document.querySelector("#original .array");
renderArray(originalArray, $originalArray);

let $updatedArray = document.querySelector("#updated .array");
renderArray(["?", "?", "?", "?", "?"], $updatedArray);

document.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;
  let action = event.target.textContent;
  if (action === "Discount 40%") {
    let updatedArray = originalArray.map((item) => item * 40 / 100);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "KGS to KZT") {
    let updatedArray = originalArray.map((item) => Math.floor(item * 5.69));
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter > 1000") {
    let updatedArray = originalArray.filter((item) => item < 1000);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter div to 100") {
    let updatedArray = originalArray.filter((item) => item % 100 === 0);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "reduce MAX") {
    let updatedArray = originalArray.reduce((max,item)=>{
      if(item > max){
        return item
      }else{
        return max
      }
    });
    renderArray([updatedArray], $updatedArray);
  } else if (action === "reduce MIN") {
    let updatedArray = originalArray.reduce((min,item)=>{
      if(item < min){
        return item
      }else{
        return min
      }
    });
    renderArray([updatedArray], $updatedArray);
  }else if (action === "slice top 3") {
    let updatedArray = originalArray.slice(0, 3);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "slice last 4") {
    let updatedArray = originalArray.slice(-4);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "sort ascending") {
    let[...originalArrayCopy] = [...originalArray]

    let updatedArray = originalArrayCopy.sort((a, b) => a-b
    );
    renderArray(updatedArray, $updatedArray);
  } else if (action === "sort descending") {
    let[...originalArrayCopy] = [...originalArray]
    
    let updatedArray = originalArrayCopy.sort((a, b) => b-a);
    renderArray(updatedArray, $updatedArray);
  }
});
