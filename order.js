var all = [];
var formInfo = document.getElementById('Products');
function Products (quantity,name,address,email){
  this.name = name;
  this.quantity = quantity;
  this.email = email;
  this.address = address;
  all.push(this);
}
// new Products(4,'sam',123,'samhotmail.com');
var bag;
var banana;
var bathroom;
var boots;
var breakfast;
var bubbleGum;
var chair;
var cthulhu;
var dogDuck;
var dragon;
var pen;
var petSweep;
var scissors;
var sweep;
var tauntaun;
var unicorn;
var usb;
var waterCan;
var wineGlass;

function handleform(event){
  event.preventDefault();
  bag = event.target.bag.value;
  banana = event.target.banana.value;
  bathroom = event.target.bathroom.value;
  boots = event.target.boots.value;
  breakfast = event.target.breakfast.value;
  bubbleGum = event.target.bubbleGum.value;
  chair = event.target.chair.value;
  cthulhu = event.target.cthulhu.value;
  dogDuck = event.target.dogDuck.value;
  dragon = event.target.dragon.value;
  pen = event.target.pen.value;
  petSweep = event.target.petSweep.value;
  scissors = event.target.scissors.value;
  sweep = event.target.sweep.value;
  tauntaun = event.target.tauntaun.value;
  unicorn = event.target.unicorn.value;
  usb = event.target.usb.value;
  waterCan = event.target.waterCan.value;
  wineGlass = event.target.wineGlass.value;
  if(event.target.bag.value ){
    name = event.target.name.value;
    email = event.target.email.value;
    address = event.target.address.value;
    var baginput = new Products(bag,name,email,address);
  }
  if(event.target.banana.value ){
    name = event.target.name.value;
    email = event.target.email.value;
    address = event.target.address.value;
    var baginput = new Products(banana,name,email,address);
  }
}
formInfo.addEventListener('submit',handleform);

console.log('handle', event);
