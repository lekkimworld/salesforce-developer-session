import {LightningElement} from "lwc";

export default class RestCallOut extends LightningElement {
  error;
  accounts;
  customerCount;
  customers;

  connectedCallback() {
    return fetch(`https://lekkim-simple-api.herokuapp.com/api/customers`)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        this.customerCount = obj.length;
        this.customers = obj;
      })
      .catch((err) => {
        this.error = err;
      });
  }

  readRandomCustomer() {
    const idx = Math.floor(Math.random() * this.customerCount);
    console.log(`Using idx ${idx}`);
    const c = this.customers[idx];
    console.log(`Picked customerNo ${c.customerNumber}`);
    return fetch(
      `https://lekkim-simple-api.herokuapp.com/api/accounts/${c.customerNumber}`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        this.accounts = obj;
      })
      .catch((err) => {
        this.error = err;
      });
  }
}