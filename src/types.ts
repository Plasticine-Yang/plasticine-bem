export type CSSModuleClasses = { readonly [key: string]: string }

export interface CreateNameSpaceOptions {
  defaultNameSpace?: string

  /**
   * @description 在 is 方法中使用，作为生成的类名的前缀
   * @default 'is-'
   * @example
   * const ns = createNameSpace('form', { defaultNameSpace: 'pl', statePrefix: 'is-' })
   * ns.is('active', active) // ==> is-active
   */
  statePrefix?: string

  /** @description 使用 css module 中的类名 */
  cssModuleClasses?: CSSModuleClasses
}
