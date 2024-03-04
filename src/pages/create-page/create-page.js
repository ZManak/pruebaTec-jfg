import { LitElement, html, css } from "lit";
import { styles } from "./create-page.styles";
import "../../components/formComponent/index";
import "../../components/Menu/index";
export class CreatePage extends LitElement {
  static styles = [styles];

  static get properties() {
    return {};
  }

  sendInfoProductToPost(e) {
    let productSessionStorage = [
      {
        name: "Dancing Catctus",
        img: "https://i.imgur.com/1zvz1Zz.jpg",
        description: "This is a dancing cactus",
        price: 100,
      },
      {
        name: "Irreverent Chair",
        img: "https://i.imgur.com/9qzq5t2.jpg",
        description: "This is an irreverent chair",
        price: 200,
      },
    ];
    if (sessionStorage.getItem("products")) {
      productSessionStorage = JSON.parse(sessionStorage.getItem("products"));
    }
    const products = [...productSessionStorage, e.detail];
    sessionStorage.setItem("products", JSON.stringify(products));
    alert("Product added");
    window.location.href = "/index.html";
  }

  render() {
    return html`<h1>Add Product</h1>
      <form-component
        @submit-product=${(e) => {
          this.sendInfoProductToPost(e);
        }}
      ></form-component>
      <menu-component></menu-component>`;
  }
}
customElements.define("create-page", CreatePage);
