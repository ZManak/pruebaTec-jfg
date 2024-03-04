import { LitElement, html, css } from "lit";

export class CardComponent extends LitElement {
  static styles = css`
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 10px;
      margin: 10px;
      width: 250px;
      word-wrap: break-word;
    }
  `;

  static get properties() {
    return {
      name: { type: String },
      img: { type: String },
      description: { type: String },
      price: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "";
    this.img = "";
    this.description = "";
    this.price = "";
  }

  delete(e) {
    const products = JSON.parse(sessionStorage.getItem("products"));
    const index = products.findIndex((product) => product.name === e);
    products.splice(index, 1);
    sessionStorage.setItem("products", JSON.stringify(products));
    this.dispatchEvent(
      new CustomEvent("delete-product", { bubbles: true, composed: true })
    );
    window.location.reload();
  }

  render() {
    return html` <div class="card">
      <div>
        <h4><b>${this.name}</b></h4>
        <p>${this.description}</p>
        <p>${this.price}</p>
        <img src=${this.img} alt="Avatar" style="width:100%" />
        <button
          @click=${(e) => {
            this.delete(e.target.parentElement.querySelector("h4").innerText);
          }}
        >
          Delete
        </button>
      </div>
    </div>`;
  }
}

customElements.define("card-component", CardComponent);
