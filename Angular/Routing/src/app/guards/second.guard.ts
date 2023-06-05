import { CanActivateChildFn } from '@angular/router';

export const secondGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
