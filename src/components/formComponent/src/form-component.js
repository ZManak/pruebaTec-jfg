import { LitElement, html } from "lit";
import { styles } from "./from-component.styles";

export class FormComponent extends LitElement {
  static styles = [styles];

  computedWeight(price) {
    return `${price} credits`;
  }

  static get properties() {
    return {
      name: { type: String },
      description: { type: String },
      price: { type: String },
      image: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "";
    this.image = "";
    this.description = "";
    this.price = "";
  }

  setValue(prop) {
    const input = this.shadowRoot.getElementById(prop);
    switch (prop) {
      case "name":
        this.name = input.value;
        break;
      case "description":
        this.description = input.value;
        break;
      case "price":
        this.price = this.computedWeight(input.value);
        break;
      case "image":
        this.image = input.value;
        break;
      default:
        break;
    }
  }

  submitProduct() {
    this.dispatchEvent(
      new CustomEvent("submit-product", {
        bubbles: true,
        composed: true,
        detail: {
          name: this.name,
          description: this.description,
          price: this.price,
          img: this.image,
        },
      })
    );
  }

  render() {
    return html` <input
        id="name"
        placeholder="Name"
        @input=${() => this.setValue("name")}
      />
      <br />
      <input
        id="description"
        placeholder="Description"
        @input=${() => this.setValue("description")}
        type="text"
      />
      <br />
      <input
        id="price"
        placeholder="Price in credits"
        @input=${() => this.setValue("price")}
        type="number"
      />
      <br />
      <input
        id="image"
        placeholder="Image URL"
        @input=${() => this.setValue("image")}
        type="url"
      />
      <br />
      <button @click=${() => this.submitProduct()}>Add to Inventory</button>`;
  }
}
