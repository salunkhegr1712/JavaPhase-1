import { CanDeactivateFn } from '@angular/router';

export const thirdGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  let k=prompt("do you want to go out ?")?.toLowerCase()
  let m :boolean = (k=="yes" || k=="y")
  return m?true :false;
};
