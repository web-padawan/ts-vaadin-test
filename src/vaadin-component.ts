import { PolymerElement, html } from '@polymer/polymer';
import { ControlStateMixin } from '@vaadin/vaadin-control-state-mixin';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';

export class TestComponent extends ControlStateMixin(ThemableMixin(ElementMixin(PolymerElement))) {
  static get is() {
    return 'test-component';
  }

  static get template() {
    return html`
      <button id="button">Button</button>
    `
  }

  get focusElement() {
    return this.$.button;
  }
}

customElements.define('test-component', TestComponent);
