import { Canvas } from '~/utils/canvas.js';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('onScrollActivate', {
    // dirId: 'xxx,',
    mounted(el, binding) {
      // console.log(this.dirId)
      setTimeout(() => {
        Canvas.addOnScrollActivateElement({
          elNode: el,
          options: binding.value,
          arg: binding.arg,
        });
      }, 150);
    },
    updated(el, binding) {
      Canvas.updateOnScrollActiveElement(
          {
            elNode: el,
            options: binding.value,
            arg: binding.arg,
          }
      )

    },
    unmounted(el) {
      Canvas.removeScrollActiveElement(el);
    },
  });
});

// const onScrollActivateOptions = {
//   activeRange: Number,
//   activateOnce: Boolean,
//   activateCallback: String,
//   trackOnly: Boolean,
//   bidirectionalActivation: Boolean (default: false),
//   activeRangeOrigin: 'top' | 'middle' (Default)
//   activeRangeMargin: Number
//   scrollSpeed: Number,
//   fixToParentId: Boolean,
//   scrollCallback: string
// }
