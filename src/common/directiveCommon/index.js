import { directiveFocus } from "./focus.js";
import { directiveThousandsSeparator } from "./thousandsSeparator.js";

export function fnToDoDirective(app) {
  directiveFocus(app); //v-focus
  directiveThousandsSeparator(app); //v-thousandsSeparator
  return {
    app,
  };
}
