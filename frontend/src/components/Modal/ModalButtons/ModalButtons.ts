import { modalButtonContents } from './modalButtonContents';

(() => {
  const ModalButtons = class extends HTMLElement {
    private type: string;
    private closeButtonElement: HTMLButtonElement | null;

    constructor() {
      super();
      this.type = 'source';
      this.closeButtonElement = null; 
    }

    static get observedAttributes() {
      return ['type'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      if (oldVal !== newVal) {
        switch(attrName){
          case 'type':
            this.type = newVal;
            break;
        }
        this[attrName] = newVal;
        this.render();
      }
    }

    connectedCallback() {
      this.render();
      this.initElement();
      this.changeBtnStyle();
    }

    render(): void {
      this.innerHTML = `
        <section class='source-upload-buttons'>
            ${modalButtonContents[this.type]}
        </section>
        `;
    }

    initElement(): void{
      this.closeButtonElement = this.querySelector('.modal-close-button');
    }

    changeBtnStyle(): void{
      if (this.type === 'effect' && this.closeButtonElement) {
        this.closeButtonElement.style.marginLeft = '0rem';
      }
    }
  };
  customElements.define('audi-modal-buttons', ModalButtons);
})();
