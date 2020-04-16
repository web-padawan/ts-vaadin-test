import { PolymerElement, html } from '@polymer/polymer';
import { ControlStateMixin } from '@vaadin/vaadin-control-state-mixin';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';

export class TestComponent extends ControlStateMixin(ThemableMixin(PolymerElement)) {
  static get is() {
    return 'test-component';
  }

  static get template() {
    return html`
      <button id="button">Button</button>
    `
  }

  get focusElement() {
    return this.shadowRoot?.getElementById('button');
  }
}

customElements.define('test-component', TestComponent);
