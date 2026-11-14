export const easeOut = [0.22, 1, 0.36, 1] as const;

export function inViewFadeUp(delay = 0, distance = 28) {
  return {
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: 0.7, delay, ease: easeOut },
  } as const;
}
