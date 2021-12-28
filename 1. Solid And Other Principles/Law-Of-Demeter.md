# The Law Of Demeter

- A unit should have only limited knowledge about other units
- A unit should only talk to its immediate friends
- A unit should not talk to strangers

## Example

### Act of making a purchase in a shop

#### Problematic

```js
class Customer {
  constructor() {
    this.wallet = new CustomerWallet();
  }
  addMoney(deposit) {
    this.amount += deposit;
  }
  takeMoney(debit) {
    this.amount -= debit;
  }
}

class Shopkeepr {
  processPurchase(product, customer) {
    const price = product.price();
    customer.wallet.takeMoney(price);
    // ...
  }
}
```

The shopkeeper takes the wallet from the customer's pocket and then proceeds to open the wallet and take the desired amount without in any way interacting with the customer directly.

#### Solution

```js
class Shopkeeper {
  processPurchase(product, customer) {
    const price = product.price();
    customer.requestPayment(price);
    // ...
  }
}
```

This now seems more reasonable. The Shopkeeper is talking to the Customer directly. The customer, in turn, will talk to their CustomerWallet instance, retrieving the desired amount and then handing it to the shopkeeper.

### Document object model (DOM)

#### Problematic

```js
function displayHappyBirthday(name) {
  const container = document.createElement("div");
  container.className = "message birthday-message";
  container.appendChild(document.createTextNode(`Happy Birthday ${name}!`));
  document.body.appendChild(container);
}
```

Does the preceding code abide by the LoD? Here the function is directly talking to the DOM. The `Happy Birthday` message mechanism should not be required to have knowledge about the DOM. It would, therefore, be appropriate to build another abstraction that bridges two strangers.

Instead, we can have a more generic `displayMessage` function that is interfacing directly with the DOM.

```js
function displayHappyBirthday(name) {
  return displayMessage(`Happy Birthday ${name}!`, "birthday-message");
}
```
