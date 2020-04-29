import { PolymerElement, html } from '@polymer/polymer';
import { ControlStateMixin } from '@vaadin/vaadin-control-state-mixin';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import '@vaadin/vaadin-button';

export class TestComponent extends ControlStateMixin(ThemableMixin(ElementMixin(PolymerElement))) {
  static get is() {
    return 'test-component';
  }

  static get template() {
    return html`
      <button id="button">Button</button>

      <vaadin-button>Button</vaadin-button>
    `
  }

  get focusElement() {
    return this.$.button;
  }

  ready() {
    super.ready();

    const button = this.shadowRoot?.querySelector('vaadin-button')!;
    button.disabled = true;
  }
}

customElements.define('test-component', TestComponent);
