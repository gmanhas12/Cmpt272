import{Category,Pig} from './pigAttributes';
import{BlackPig} from'./blackPig';
import{WhitePig} from'./whitePig';
import{GreyPig} from'./greyPig';
import{ChestnutPig} from'./chestnutPig';

localStorage;
function deletePig(a: Event){
  var tar = (a.target as Element)!;
  var pigInfo = tar.closest("tr")!;
  var pP = tar.parentElement!;
  var pigKey = (pP.parentElement?.firstChild?.nextSibling?.textContent)!;
  if(a.target){
    if(!(a.target as Element).classList.contains('deleteButton')){
      return;
    }
    localStorage.removeItem(pigKey);
    pigInfo.remove();
  }
}
window.onload = loadPigs;
var clicked:boolean = false;
var submitButton = document.getElementById('submit')!;
submitButton.addEventListener('click', addPig, false);
var moreInfoSection = document.getElementById('pigTable');
moreInfoSection?.addEventListener('click', deletePig, false);
moreInfoSection?.addEventListener('click', Info, false);
var category = (document.getElementById('category') as HTMLInputElement);
category.addEventListener('change', dynamicAtrr, false);
function addPig(){
  var name = (document.getElementById('name') as HTMLInputElement).value;
  var height = (document.getElementById('height') as HTMLInputElement).valueAsNumber;
  var weight = (document.getElementById('weight') as HTMLInputElement).valueAsNumber;
  var breed = (document.getElementById('breed') as HTMLInputElement).value;
  var personality = (document.getElementById('personality') as HTMLInputElement).value;
  var p:Pig = new Pig(name, Category.grey, breed, +height, +weight, personality);
  if( category.value == 'black'){
    var strength = (document.getElementById('strength') as HTMLInputElement).valueAsNumber;
    p = new BlackPig(name, breed, +height, +weight, personality, +strength);
  }
  if(category.value == 'white'){
    var running = (document.getElementById('Running') as HTMLInputElement).valueAsNumber;
    p = new WhitePig(name, breed, +height, +weight,personality, +running);
  } 
  if(category.value == 'grey'){
    var swimming= (document.getElementById('Swimming') as HTMLInputElement).valueAsNumber;
    p = new GreyPig(name, breed, +height, +weight, personality, +swimming);
  } 
  if(category.value == 'chestnut'){
    var language = (document.getElementById('language') as HTMLInputElement).value;
    p = new ChestnutPig(name, breed, +height, +weight, personality, language);
  } 
  let piggy = JSON.stringify(p);
  localStorage.setItem(name, piggy);
  var tableInfo = document.getElementById("pigInfo")! as HTMLElement;
  tableInfo.insertAdjacentHTML('beforeend', 
    `
      <tr>
        <td>${name}</td>
        <td>${category.value}</td>
        <td><button class="moreInfo">More Info</button></td>
        <td><button class="deleteButton">Delete</button></td>
      </tr>
    `
  );
}
function loadPigs(){
  localStorage.removeItem("remove");
  var storageLength = localStorage.length;
  var tableInfo = document.getElementById("pigInfo")! as HTMLElement;
  for(let i = 0; i < storageLength; i++){
    var name = localStorage.key(i)!;
    var val = JSON.parse(localStorage.getItem(name)!);
    var kat = val.category;
    var cat = "";
    if(kat == 0){cat = 'Black';}
    if(kat == 1){cat = 'White';}
    if(kat == 2){cat = 'Grey';}
    if(kat == 3){cat = 'Chestnut';}
    tableInfo.insertAdjacentHTML('beforeend', 
    `  <tr>
        <td>
        ${name}
        </td>
        <td>
        ${cat}
        </td>
        <td>
        <button class="moreInfo">More Info</button>
        </td>
        <td>
        <button class="deleteButton">Delete Pig</button>
        </td>
      </tr>
    `);
  }
}

function Info(a: Event){
  var tar = (a.target as Element)!;
  var pP = tar.parentElement!;
  var name = (pP.parentElement?.firstChild?.nextSibling?.textContent)!;
  var dynamic =  JSON.parse(localStorage.getItem(name)!);
  var dynamicAttr1 = "";
  var dynamicAttr2= "";
  var dynamicCater = dynamic.category;
  if(a.target){
    if(!(a.target as Element).classList.contains('moreInfo')){
      return;
    }
    if(dynamicCater == 0){
      dynamicAttr1 = 'Strength';
      dynamicAttr2 = dynamic.strength;
    } 
    if(dynamicCater == 1){
      dynamicAttr1 = 'Running';
      dynamicAttr2 = dynamic.running; 
    } 
    if(dynamicCater == 2){
      dynamicAttr1 = 'Swimming';
      dynamicAttr2 = dynamic.swimming; 
    }
    if(dynamicCater == 3){
      dynamicAttr1 = 'Language';
      dynamicAttr2 = dynamic.language;
    }
    var infoTable = document.getElementById('info')! as HTMLTableElement;
    infoTable.innerHTML = 
    `
      <thead>
        <tr><th>More Info</th><th></th></tr>
      </thead>
      <tableInfo>
        <tr><td>Name</td><td>${dynamic.name}</td></tr>
        <tr><td>Breed</td><td>${dynamic.breed}</td></tr>
        <tr><td>Height(Hocks)</td><td>${dynamic.height}</td></tr>
        <tr><td>Weight(Stones)</td><td>${dynamic.weight}</td> </tr>
        <tr><td>Personality</td><td>${(dynamic.personality)}</td></tr>
        <tr><td>${dynamicAttr1}</td><td>${dynamicAttr2}</td></tr>
    `;
  }
}
function dynamicAtrr(){
  var form= document.querySelector('form') as HTMLFormElement;
  if(clicked){
    var a = form.getElementsByClassName('specialOption')!;
    var al = a.length;
    var b = form.getElementsByClassName('specialOptionAttr')!;
    var bl = b.length;
    for (let i = 0; i < al; i++) {
      form.removeChild(a[i]);
    }
    for (let i = 0; i < bl; i++) {
      form.removeChild(b[i]);
    }
  }
  if(category.value == 'black'){
    form.insertAdjacentHTML('beforeend', `
    <label for="strength" class="specialOption">Strength</label>
    <input type="number" class = "specialOptionAttr" id ="strength">
    `);
  }
  if(category.value == 'white'){
    form.insertAdjacentHTML('beforeend', `
    <label for="Running" class="specialOption">Running</label>
    <input type="number" class = "specialOptionAttr" id ="Running">
    `);
  } 
  if(category.value == 'grey'){
    form.insertAdjacentHTML('beforeend',
    `<label for="Swimming" class="specialOption">Swimming</label>
    <input type="number" class = "specialOptionAttr" id ="Swimming">
    `);
  } 
  if(category.value == 'chestnut'){
    form.insertAdjacentHTML('beforeend', `
    <label for="language" class="specialOption">Language</label>
    <input type="text" class = "specialOptionAttr" id ="language">
    `);
  }
  clicked = true;
}

