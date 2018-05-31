var list = [{
    id: 1,
    name: "Spaghetti",
    price: 15,
    category: "main",
    pictureSrc: "images/food/spaghetti.jpg"
},
{
    id: 2,
    name: "Lazania",
    price: 20,
    category: "main",
    pictureSrc: "images/food/Lasagne.jpg"
},
{
    id: 3,
    name: "Coca-cola",
    price: 5,
    category: "drinks",
    pictureSrc: "images/food/cola.jpg"
},
{
    id: 4,
    name: "Piersi z kurczaka",
    price: 23,
    category: "main",
    pictureSrc: "images/food/chicken.jpg"
},
{
  id: 5,
  name: "Zapiekany wędzony łosoś",
  price: 30,
  category: "main",
  pictureSrc: "images/food/losos.jpg"
},
{
  id: 6,
  name: "Szarlotka z lodami",
  price: 14,
  category: "dessert",
  pictureSrc: "images/food/szarlotka.jpg"
},
{
  id: 7,
  name: "Pierogi z mięsem",
  price: 18,
  category: "main",
  pictureSrc: "images/food/pierogi.jpg"
},
{
  id: 8,
  name: "Omlet",
  price: 10,
  category: "breakfast",
  pictureSrc: "images/food/omlet.jpg"
},
];

$(function() {
  AddFoodListToLocalStorage();
  InitializeFoodList();

});


function InitializeFoodList() {

    var foodList = $('#foodList');
  
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      var buttonText = '<button class="btn btn-primary add" id="' + element.name + '">+</button><button class="btn btn-primary" name="remove">-</button>';
      foodList.append("<li class='list-inline-item'><h4>" + element.name + "</h4><p>" + element.price + " zł</p><img alt=''height='200' width='200' class='img-thumbnail' src='" + element.pictureSrc + "'><br>" + buttonText + "</li>");
    }
    
    $( ".add" ).on( "click", function() {
      var objFromLS = JSON.parse(localStorage.getItem(this.id));
      sessionStorage.setItem("cart" + Math.random(), JSON.stringify(objFromLS));
    });
  }

function AddFoodListToLocalStorage(){
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    localStorage.setItem(element.name, JSON.stringify(element));
  }  
}

function GetCart(){
  var cart = [];

  Object.keys(sessionStorage).forEach(function(key){
    console.log(sessionStorage.getItem(key));
    var retrieveItem = JSON.parse(localStorage.getItem(key));
    cart.push(retrieveItem);
 });

  cart.forEach(element => {
    console.log(element);
  });
}

function GetFoodListFromLocalStorage()
{
  var retrieved = [];
  for (let i = 0; i < localStorage.length; i++) {
    const element = localStorage[i];
    var retrieveItem = JSON.parse(localStorage.getItem(element.name));
    retrieved.push(retrieveItem);
  }
}