import { CreateNameSpaceOptions, CSSModuleClasses } from './types'

const DEFAULT_STATE_PREFIX = 'is-'
let globalNameSpace = ''

/**
 * @description 根据 block 生成对应命名空间
 * @param block BEM block
 */
const createNameSpace = (block: string, options?: CreateNameSpaceOptions) => {
  const namespace = options?.namespace ?? globalNameSpace
  const statePrefix = options?.statePrefix ?? DEFAULT_STATE_PREFIX
  const cssModuleClasses = options?.cssModuleClasses

  /**
   * @description 生成符合 BEM 规范的 CSS 类名
   */
  const bem = (blockSuffix: string, element: string, modifier: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace, block, blockSuffix, element, modifier, cssModuleClasses)
      : ''

  const b = (blockSuffix = '') =>
    _bem(namespace, block, blockSuffix, '', '', cssModuleClasses)

  const e = (element: string) =>
    element ? _bem(namespace, block, '', element, '', cssModuleClasses) : ''

  const m = (modifier: string) =>
    modifier ? _bem(namespace, block, '', '', modifier, cssModuleClasses) : ''

  const be = (blockSuffix: string, element: string) =>
    blockSuffix && element
      ? _bem(namespace, block, blockSuffix, element, '', cssModuleClasses)
      : ''

  const bm = (blockSuffix: string, modifier: string) =>
    blockSuffix && modifier
      ? _bem(namespace, block, blockSuffix, '', modifier, cssModuleClasses)
      : ''

  const em = (element: string, modifier: string) =>
    element && modifier
      ? _bem(namespace, block, '', element, modifier, cssModuleClasses)
      : ''

  /**
   * @description 根据需要生成状态名
   * @param stateName 状态名
   * @param state 状态是否激活 -- 不传入时默认激活状态
   */
  const is = (stateName: string, state?: boolean) => {
    const shouldGenerate = state !== undefined ? state : true
    const cls = stateName && shouldGenerate ? `${statePrefix}${stateName}` : ''
    return cssModuleClasses ? cssModuleClasses[cls] : cls
  }

  return {
    bem,
    b,
    e,
    m,
    be,
    bm,
    em,
    is,
  }
}

/**
 * @description 负责生成完整的 BEM classname
 * @param namespace 命名空间
 * @param block BEM block
 * @param blockSuffix BEM block suffix
 * @param element BEM element
 * @param modifier BEM modifier
 * @param cssModuleClasses 传入的话生成的类名从 css module 对象中获取
 * @returns BEM classname
 */
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string,
  cssModuleClasses?: CSSModuleClasses,
) => {
  let cls = namespace ? `${namespace}-${block}` : block

  blockSuffix && (cls += `-${blockSuffix}`)
  element && (cls += `__${element}`)
  modifier && (cls += `--${modifier}`)

  return cssModuleClasses ? cssModuleClasses[cls] : cls
}

/**
 * @description 配置全局的命名空间 -- 优先级比 createNameSpace options 中的 namespace 低
 */
const setGlobalNameSpace = (namespace: string) => {
  globalNameSpace = namespace
}

export { createNameSpace, setGlobalNameSpace }
