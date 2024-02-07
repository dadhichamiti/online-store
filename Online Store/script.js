let inventory = [];

// Adding a product
let productId=0;
function addProduct() {
  const productName = document.getElementById('productName').value;
  const productPrice = parseFloat(document.getElementById('productPrice').value);
  const productQuantity = parseInt(document.getElementById('productQuantity').value);

  const newProduct = {
    id:productId++, // used Math random() for id generation of decimal numbers 
    name: productName,
    price: productPrice,
    quantity: productQuantity
  };

  inventory.push(newProduct); // push() method adds new items to the end of an array...
  if(productName != newProduct.name)
  {
  document.getElementById('output').innerHTML = ('Product added successfully!');
  }
  else{
    document.getElementById('output').innerHTML = ('Product already exist!');
  }
}


// Updatig new quantity of product

function updateQuantity() {
  const productName = document.getElementById('updateProductName').value;
  const product = inventory.find(product => product.name === productName);

  if (product) {
    const newQuantity = document.getElementById('updateProductQuantity').value;
    product.quantity = newQuantity;
    document.getElementById('output').innerHTML = ('Quantity updated successfully!');
  } else {
    document.getElementById('output').innerHTML = ('Product not found!');
  }
}

// displaying all inventory product

function displayInventory() {
  let output = '<h2>Current Inventory</h2>';
  output += '<ul>';

  for (const product of inventory) { // for of loop is used to add array of inventory to product....
    output += `<li>  Id: ${product.id} - Name: ${product.name} - Price: ${product.price.toFixed(2)} - Quantity: ${product.quantity}  </li>`;
  }

  output += '</ul>';
  document.getElementById('output').innerHTML= (output);
}

// calculating total

function calculateTotalValue() {
  const totalValue = inventory.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  document.getElementById('output').innerHTML = (`Total Inventory Value: ${totalValue.toFixed(2)}`);
}


function deleteProduct(){
  const deleteProductName = document.getElementById('productNameDelete').value;

  inventory= inventory.filter((obj)=> { return obj.name!=deleteProductName})
  console.log('array of obj',inventory)  

}