import { productTemplate } from './template';

export function productsTemplate(products) {
  return products.map(productTemplate).join('');
}
