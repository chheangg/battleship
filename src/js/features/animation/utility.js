import { withEventListener } from "../utilities";

export const animationEventBuilder = (el, event) =>
  withEventListener(el, "mouseenter", event);

export const withdrawEventBuilder = (el, event) =>
  withEventListener(el, "mouseleave", event);
