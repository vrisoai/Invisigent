/**
 * Pause / resume looping CSS animations inside `root` (descendants and pseudo-elements included).
 *
 * Only `animation-iteration-count: infinite` CSS animations are touched — one-shot entrance
 * animations, Framer Motion (WAAPI) and GSAP tweens are left alone — and only animations this
 * helper paused are ever resumed, so it never fights with other code controlling playback.
 * Resuming continues mid-cycle, which is indistinguishable from never having stopped.
 */
const pausedByUs = new WeakSet<Animation>();

export function setLoopingAnimationsPaused(root: Element, paused: boolean) {
  if (typeof root.getAnimations !== 'function' || typeof CSSAnimation === 'undefined') return;

  for (const anim of root.getAnimations({ subtree: true })) {
    if (!(anim instanceof CSSAnimation)) continue;

    if (paused) {
      if (anim.playState !== 'running') continue;
      if (anim.effect?.getComputedTiming().iterations !== Infinity) continue;
      anim.pause();
      pausedByUs.add(anim);
    } else if (pausedByUs.has(anim)) {
      anim.play();
      pausedByUs.delete(anim);
    }
  }
}
