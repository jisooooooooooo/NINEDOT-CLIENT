export type AnimationData = Record<string, unknown>;

export type AnimationModule = { default: AnimationData } | AnimationData;

export type AnimationImporter = () => Promise<AnimationModule>;

export function isAnimationModule(x: unknown): x is { default: AnimationData } {
  return typeof x === 'object' && x !== null && 'default' in (x as Record<string, unknown>);
}

export function resolveAnimation(mod: AnimationModule): AnimationData {
  return isAnimationModule(mod) ? mod.default : mod;
}
