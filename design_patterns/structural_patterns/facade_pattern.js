class Inventory {
  constructor() {
    this.shampoo = 20;
    this.conditioner = 20;
    this.hairSerum = 1000;
  }

  checkAvailability({ productName, amount }) {
    switch (productName) {
      case 'shampoo':
        return amount <= this.shampoo;
      case 'conditioner':
        return amount <= this.conditioner;
      default:
        return amount <= this.hairSerum;
    }
  }

  //check availability of products
  //hint: define a function that checks availability
}

class BuyingProduct extends Inventory {
  buyProduct(product) {
    let order;
    if (this.checkAvailability(product)) {
      order = new BuyProduct();
    } else {
      order = new PreOrderProduct();
    }

    return order.showDetails(product);
  }
}

class BuyProduct {
  showDetails({ productName, amount }) {
    console.log(
      `${amount} bottles of ${productName} are available. Click on "buy" to purchase them.`
    );
    return `${amount} bottles of ${productName} are available. Click on "buy" to purchase them.`;
  }
}

class PreOrderProduct {
  showDetails({ productName, amount }) {
    console.log(
      `${amount} bottles of ${productName} are not available. You can Pre-order them on the next page.`
    );
    return `${amount} bottles of ${productName} are not available. You can Pre-order them on the next page.`;
  }
}

var customer = new BuyingProduct();
customer.buyProduct({ productName: 'shampoo', amount: 2 });
customer.buyProduct({ productName: 'hair serum', amount: 900 });
