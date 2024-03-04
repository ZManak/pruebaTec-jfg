import { LitElement, html } from 'lit';
import {styles} from './buttonComponent.styles';

export class ButtonComponent extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor(){
    super();
    this.name='';
  }

  clickEvent(){
    this.dispatchEvent(new CustomEvent(`click-${this.name}`,{bubble:true,composed:true}))
  }

  render() {
    return html`
    <button @click=${()=>{this.clickEvent()}}><slot></slot></button>`;
  }
}
