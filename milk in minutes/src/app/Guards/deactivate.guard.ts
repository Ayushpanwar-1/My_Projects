import { CanDeactivateFn } from '@angular/router';
import { SingleProductComponent } from '../single-product/single-product.component';

export const deactivateGuard: CanDeactivateFn<SingleProductComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate1?component.canDeactivate1():true;  
};
