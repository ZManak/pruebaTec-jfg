import { LitElement, html } from "lit";
import { styles } from "./MenuComponent.styles.js";

export class MenuComponent extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <ul>
        <li>
          <a href="http://localhost:8000/src/pages/list-page/index.html"
            >Products</a
          >
        </li>
        <li>
          <a href="http://localhost:8000/src/pages/create-page/index.html"
            >Add Product</a
          >
        </li>
      </ul>
    `;
  }
}
