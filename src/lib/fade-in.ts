export default class FadeElement extends HTMLElement {
  static FadeElements: FadeElement[] = [];

  order: number;
  duration: string;
  distance: string;

  /**
   * custom element that can fade in elements, in order
   * @param order The order of the element in the fade sequence. (-1 means it will fade in onMount)
   */
  constructor(order?: number) {
    super();
    this.order = parseInt(this.getAttribute('order') ?? '-1');
    this.duration = this.getAttribute('duration') ?? '100ms';
    this.distance = this.getAttribute('distance') ?? '10px';
    this.style.setProperty('opacity', '0');
    this.style.setProperty('transform', `translateY(${this.distance})`);
  }

  static fadeInAll(delay?: number) {
    setTimeout(() => {
      for (const fadeElement of FadeElement.FadeElements) {
        fadeElement.fadeIn(fadeElement.order * (delay ?? 0));
      }
    });
  }

  fadeIn(delay?: number) {
    setTimeout(() => {
      this.style.setProperty('opacity', '1');
      this.style.setProperty('transform', 'translateY(0px)');
    }, delay ?? 0);
  }

  connectedCallback() {
    setTimeout(() => {
      this.style.setProperty(
        'transition',
        `opacity ${this.duration} ease-out, transform ${this.duration} ease-out`
      );
      if (this.order < 0) {
        this.fadeIn();
      } else {
        FadeElement.FadeElements.push(this);
      }
    });
  }
}
