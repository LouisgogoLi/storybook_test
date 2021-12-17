import { fnThousandsSeparator } from "@/common/methodCommon";

export function directiveThousandsSeparator(app) {
  // app.directive("thousandsSeparator", {
  //   mounted(el, binding) {
  //     const sNum = fnThousandsSeparator(binding.value);
  //     el.innerHTML = sNum;
  //   },
  //   updated(el, binding) {
  //     const sNum = fnThousandsSeparator(binding.value);
  //     el.innerHTML = sNum;
  //   },
  // });

  //等同上面簡寫
  app.directive("thousandsSeparator", (el, binding) => {
    const sNum = fnThousandsSeparator(binding.value);
    el.innerHTML = sNum;
  });
  return {
    app,
  };
}
