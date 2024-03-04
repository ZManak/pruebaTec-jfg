import { LitElement, html } from "lit";
import { styles } from "./web-shop.styles";
import "./components/Menu/index";

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
      </main>
    `;
  }
}

customElements.define("webshop-component", WebShop);
