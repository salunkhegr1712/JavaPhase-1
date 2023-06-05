import { CanDeactivateFn } from '@angular/router';

export const thirdGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  return confirm("do you really want to exit ? ")?true :false;
};
