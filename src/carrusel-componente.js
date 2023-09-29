import { LitElement, html, css } from 'lit';

class CarruselElement extends LitElement {
  static styles = css`
    .carrusel-container {
      display: flex;
      overflow: hidden;
      position: relative;
      width: 300px;
    }

    .carrusel-slide {
      flex: 0 0 100%;
      transition: transform 0.3s ease-in-out;
    }

    img {
      width: 100%;
      height: auto;
    }

    .carrusel-button {
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      padding: 10px;
      border: none;
      outline: none;
      z-index: 2;
    }

    .carrusel-button.left {
      left: 0;
    }

    .carrusel-button.right {
      right: 0;
    }
  `;

  static properties = {
    imagen: { type: Array },
    imagenActual: { type: Number },
  };

  constructor() {
    super();
    this.imagen = [];
    this.imagenActual = 0;
  }

  render() {
    return html`
      <div class="carrusel-container">
        <button
          class="carrusel-button left"
          @click=${this.imagenPrevia}
          ?disabled=${this.imagenActual === 0}
        >
          &#8249;
        </button>
        <div class="carrusel-slide">
          <img src=./imagenes/${this.imagen[this.imagenActual]} alt="Imagen del carrusel" />
        </div>
        <button
          class="carrusel-button right"
          @click=${this.imagenSiguiente}
          ?disabled=${this.imagenActual === this.imagen.length - 1}
        >
          &#8250;
        </button>
      </div>
    `;
  }

  imagenPrevia() {
    if (this.imagenActual > 0) {
      this.imagenActual -= 1;
      this.requestUpdate();
    }
  }

  imagenSiguiente() {
    if (this.imagenActual < this.imagen.length - 1) {
      this.imagenActual += 1;
      this.requestUpdate();
    }
  }
}

customElements.define('carrusel-element', CarruselElement);
