import { LitElement, html } from "lit";
import { styles } from "./list-page.styles";
import "../../components/Menu/index";
import "../../components/CardComponent/index";

export class ListPage extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      products: { type: Array },
    };
  }

  constructor() {
    super();
    this.products = [];
  }

  firstUpdated() {
    const productsSessionStorage = sessionStorage.getItem("products");
    this.products = JSON.parse(productsSessionStorage);
  }

  render() {
    return html`<h1>Products</h1>
      <div class="container">
        <ul>
          ${this.products.map(
            (product) => html`
              <card-component
                name=${product.name}
                description=${product.description}
                price=${product.price}
                img=${product.img}
              ></card-component>
            `
          )}
        </ul>
      </div>

      <menu-component></menu-component> `;
  }
}
customElements.define("list-page", ListPage);
