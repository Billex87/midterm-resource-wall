$(document).ready( () => {
  $('.order-button').click(function() {
    const button = $(this);
    const div = button.parent()
    const container = div.parent()
    const p = container.find("p")
    const price = container.find(".foot").find("p").text()
    console.log("THE P", p.html());
    console.log("Price", price);
    cartArr.push({name:p.html(), price:price});
    console.log(cartArr);

    // $.ajax({
    //   method: "POST",
    //   url: "/api/orders/"
    // }).done((res) => {
    //   console.log('Add item to order');
    // })
  })

  let cartArr = [];


  const createCartItem = function(cartArr) {
    const $cart= $(`<li>${cartArr.name}</li>
    `);
      return $cart;
  }

  const renderCart = function(cartItems) {
   const container = $(".nav-popup ul");
   for (let item of cartItems) {
     const cartElement = createCartItem(item);
     container.append(cartElement);
   }
 };

});
