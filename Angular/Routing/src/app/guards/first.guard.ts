import { CanActivateFn } from '@angular/router';

export const firstGuard: CanActivateFn = (route, state) => {

  console.log("the first guard is called!")
  return false;
};
