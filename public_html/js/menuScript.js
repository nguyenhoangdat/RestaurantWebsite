function AddFoodListToLocalStorage() {
  for (let i = 0; i < list.length; i++) {
    const e = list[i];
    localStorage.setItem(e.name, JSON.stringify(e));
  }
}

function InitializeFoodList() {

  var foodList = $('#foodList');

  for (let i = 0; i < list.length; i++) {
    const e = list[i];
    var buttonText = '<button class="btn btn-primary add" id="' + e.name + '">+</button><button class="btn btn-primary remove" id="' + e.name + '">-</button>';
    foodList.append("<li class='list-inline-item'><h4>" + e.name + "</h4><p>" + e.price + " zł</p><img alt=''height='200' width='200' class='img-thumbnail' src='" + e.pictureSrc + "'><br>" + buttonText + "</li>");
  }

  $(".add").on("click", function () {
    var objFromLS = JSON.parse(localStorage.getItem(this.id));
    sessionStorage.setItem("cart" + Math.random(), JSON.stringify(objFromLS));
    UpdateTotalPrice();
    toastr.success("Dodano " + this.id + " do koszyka");
  });
}

function StorageToList() {
// o.O
  var values = [],
    keys = Object.keys(sessionStorage),
    i = keys.length;

  while (i--) {
    values.push(sessionStorage.getItem(keys[i]));
  }

  var r = [];
  var listS = values;

  listS.forEach(e => {
    var itemName = e.substring(16, e.lastIndexOf(',"price') - 1);
    list.forEach(e2 => {
      if (e2.name == itemName) {
        r.push(e2);
      }
    });
  });

  return r;
}

function UpdateTotalPrice() {
  var sum = 0;
  var cart = StorageToList();
  cart.forEach(element => {
    sum += element.price;
  });
  var x = document.getElementById("cart-counter");
  x.innerHTML = "<span class='glyphicon glyphicon-shopping-cart'></span> Łączna cena: " + sum + " zł";
  return sum;
}

function ShowCart(){
  var cart = StorageToList();
  var x = $('#cartTable');
  
  cart.forEach(e => {
    x.append("<tr><td>" + e.name + "</td><td>" + e.price + " zł</tr>");
  });

  var x2 = $('#cartTableTotal');
  x2.append("<tr><td>Łącznie: </td><td>" + UpdateTotalPrice() + " zł</tr>");

}