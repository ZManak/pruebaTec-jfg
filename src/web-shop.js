import { LitElement, html } from "lit";
import { styles } from "./web-shop.styles";

class WebShop extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = [styles];

  constructor() {
    super();
    this.header = "Shoppo";
  }

  render() {
    return html`
      <main>
        <h1>Shoppo</h1>
        <menu-component></menu-component>
        <a href="/src/pages/create-page/index.html">Create Page</a>
        <a href="/src/pages/list-page/index.html">List Page</a>
      </main>
    `;
  }
}

customElements.define("webshop-component", WebShop);
