"use strict";

/*
 Project: Simple Shopping Cart - Correction

* Description:
* Create a simple shopping cart where you can add items, remove items, and calculate the total cost. you’ll use functions, arrays, objects, comparison operators, logical operators, and if-else statements.

Instructions:

	* 1.	Step 1: Create an array to hold shopping cart items. Each item should be an object containing name, price, and quantity.

	* 2.	Step 2: Write a function addItem() that takes the name, price, and quantity as parameters and adds the item to the shopping cart array.
	
  * 3.	Step 3: Write a function removeItem() that takes an item name and removes it from the shopping cart. If the item is not found, display an appropriate message using an if-else statement.
	
  * 4.	Step 4: Write a function calculateTotal() that loops through the array and calculates the total price of all items in the cart. Use comparison operators to check if the cart is empty and handle that case.
	
  * 5.	Step 5: Write a function checkDiscount() that applies a discount if the total is over $100. Use a logical operator to check this condition and an if-else statement to either apply the discount or not.
	
  * 6.	Step 6: Test the functions by adding/removing a few items and calculating the total price.
*/

let shoppingCart = [];

// add items
function addItem(name, price, qty) {
  let item = {
    name,
    price,
    qty,
  };
  shoppingCart.push(item);
}

// remove items
function removeItems(itemName) {
  let found = false;
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].name === itemName) {
      shoppingCart.splice(i, 1);
      found = true;
      break;
    }
  }
  if (!found) console.log("Item not found!!!");
}

// calculate total
function calculateTotal() {
  let total = 0;
  if (shoppingCart.length === 0) {
    console.log("your cart is empty");
  } else {
    for (let i = 0; i < shoppingCart.length; i++) {
      total += shoppingCart[i].price * shoppingCart[i].qty;
    }
    console.log("Total: $" + total);
  }
  return total;
}

// check discount
function checkDiscount() {
  let total = calculateTotal();
  if (total > 100) {
    const totalAfterDiscount = total * 0.9;
    console.log("Discount applied! Total after discount: $" + totalAfterDiscount);
  } else {
    console.log("No discount applied. The total is: $" + total);
  }
}

// Test values
addItem("T-shirt", 10, 2);
addItem("Jeans", 95, 1);
addItem("Socks", 25, 4);
addItem("Gloves", 15, 1);
calculateTotal();
checkDiscount();
removeItems("Gloves");
calculateTotal();
checkDiscount();
// log
console.log(shoppingCart);
