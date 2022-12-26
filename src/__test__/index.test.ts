import { createNameSpace, setGlobalNameSpace } from '..'

describe('bem with namespace', () => {
  const ns = createNameSpace('form', {
    namespace: 'pl',
    statePrefix: 'is-',
  })

  const nsWithCSSModule = createNameSpace('form', {
    namespace: 'pl',
    cssModuleClasses: {
      'pl-form': 'style-module__pl-form--1f3gh',
      'pl-form-item': 'style-module__pl-form-item--2fght',
      'pl-form__label': 'style-module__pl-form__label--3zxg9',
      'pl-form--primary': 'style-module__pl-form--primary--4xbg8',
      'pl-form-item__label': 'style-module__pl-form-item__label--5avcx7',
      'pl-form-item--primary': 'style-module__pl-form-item--primary--6rtcx5',
      'pl-form__label--primary':
        'style-module__pl-form__label--primary--7zxpi3',
      'pl-form-item__label--primary':
        'style-module__pl-form-item__label--primary--8qu4p2',
    },
    statePrefix: 'is-',
  })

  test('b', () => {
    expect(ns.b()).toMatchInlineSnapshot('"pl-form"')
    expect(nsWithCSSModule.b()).toMatchInlineSnapshot(
      '"style-module__pl-form--1f3gh"',
    )
  })

  test('b with blockSuffix', () => {
    expect(ns.b('item')).toMatchInlineSnapshot('"pl-form-item"')
    expect(nsWithCSSModule.b('item')).toMatchInlineSnapshot(
      '"style-module__pl-form-item--2fght"',
    )
  })

  test('e', () => {
    expect(ns.e('label')).toMatchInlineSnapshot('"pl-form__label"')
    expect(nsWithCSSModule.e('label')).toMatchInlineSnapshot(
      '"style-module__pl-form__label--3zxg9"',
    )
  })

  test('m', () => {
    expect(ns.m('primary')).toMatchInlineSnapshot('"pl-form--primary"')
    expect(nsWithCSSModule.m('primary')).toMatchInlineSnapshot(
      '"style-module__pl-form--primary--4xbg8"',
    )
  })

  test('be', () => {
    expect(ns.be('item', 'label')).toMatchInlineSnapshot(
      '"pl-form-item__label"',
    )
    expect(nsWithCSSModule.be('item', 'label')).toMatchInlineSnapshot(
      '"style-module__pl-form-item__label--5avcx7"',
    )
  })

  test('bm', () => {
    expect(ns.bm('item', 'primary')).toMatchInlineSnapshot(
      '"pl-form-item--primary"',
    )
    expect(nsWithCSSModule.bm('item', 'primary')).toMatchInlineSnapshot(
      '"style-module__pl-form-item--primary--6rtcx5"',
    )
  })

  test('em', () => {
    expect(ns.em('label', 'primary')).toMatchInlineSnapshot(
      '"pl-form__label--primary"',
    )
    expect(nsWithCSSModule.em('label', 'primary')).toMatchInlineSnapshot(
      '"style-module__pl-form__label--primary--7zxpi3"',
    )
  })

  test('bem', () => {
    expect(ns.bem('item', 'label', 'primary')).toMatchInlineSnapshot(
      '"pl-form-item__label--primary"',
    )
    expect(
      nsWithCSSModule.bem('item', 'label', 'primary'),
    ).toMatchInlineSnapshot(
      '"style-module__pl-form-item__label--primary--8qu4p2"',
    )
  })

  test('is with true', () => {
    const isHover = true
    expect(ns.is('hover', isHover)).toMatchInlineSnapshot('"is-hover"')
  })

  test('is with false', () => {
    const isHover = false
    expect(ns.is('hover', isHover)).toMatchInlineSnapshot('""')
  })

  test('')
})

describe('bem without namespace', () => {
  const ns = createNameSpace('form', {
    statePrefix: 'is-',
  })

  const nsWithCSSModule = createNameSpace('form', {
    cssModuleClasses: {
      form: 'style-module__form--1f3gh',
      'form-item': 'style-module__form-item--2fght',
      form__label: 'style-module__form__label--3zxg9',
      'form--primary': 'style-module__form--primary--4xbg8',
      'form-item__label': 'style-module__form-item__label--5avcx7',
      'form-item--primary': 'style-module__form-item--primary--6rtcx5',
      'form__label--primary': 'style-module__form__label--primary--7zxpi3',
      'form-item__label--primary':
        'style-module__form-item__label--primary--8qu4p2',
    },
    statePrefix: 'is-',
  })

  test('b', () => {
    expect(ns.b()).toMatchInlineSnapshot('"form"')
    expect(nsWithCSSModule.b()).toMatchInlineSnapshot(
      '"style-module__form--1f3gh"',
    )
  })

  test('b with blockSuffix', () => {
    expect(ns.b('item')).toMatchInlineSnapshot('"form-item"')
    expect(nsWithCSSModule.b('item')).toMatchInlineSnapshot(
      '"style-module__form-item--2fght"',
    )
  })

  test('e', () => {
    expect(ns.e('label')).toMatchInlineSnapshot('"form__label"')
    expect(nsWithCSSModule.e('label')).toMatchInlineSnapshot(
      '"style-module__form__label--3zxg9"',
    )
  })

  test('m', () => {
    expect(ns.m('primary')).toMatchInlineSnapshot('"form--primary"')
    expect(nsWithCSSModule.m('primary')).toMatchInlineSnapshot(
      '"style-module__form--primary--4xbg8"',
    )
  })

  test('be', () => {
    expect(ns.be('item', 'label')).toMatchInlineSnapshot('"form-item__label"')
    expect(nsWithCSSModule.be('item', 'label')).toMatchInlineSnapshot(
      '"style-module__form-item__label--5avcx7"',
    )
  })

  test('bm', () => {
    expect(ns.bm('item', 'primary')).toMatchInlineSnapshot(
      '"form-item--primary"',
    )
    expect(nsWithCSSModule.bm('item', 'primary')).toMatchInlineSnapshot(
      '"style-module__form-item--primary--6rtcx5"',
    )
  })

  test('em', () => {
    expect(ns.em('label', 'primary')).toMatchInlineSnapshot(
      '"form__label--primary"',
    )
    expect(nsWithCSSModule.em('label', 'primary')).toMatchInlineSnapshot(
      '"style-module__form__label--primary--7zxpi3"',
    )
  })

  test('bem', () => {
    expect(ns.bem('item', 'label', 'primary')).toMatchInlineSnapshot(
      '"form-item__label--primary"',
    )
    expect(
      nsWithCSSModule.bem('item', 'label', 'primary'),
    ).toMatchInlineSnapshot('"style-module__form-item__label--primary--8qu4p2"')
  })

  test('is with true', () => {
    const isHover = true
    expect(ns.is('hover', isHover)).toMatchInlineSnapshot('"is-hover"')
  })

  test('is with false', () => {
    const isHover = false
    expect(ns.is('hover', isHover)).toMatchInlineSnapshot('""')
  })

  test('')
})

test('setGlobalNameSpace', () => {
  setGlobalNameSpace('pl')
  const ns = createNameSpace('form')

  expect(ns.b()).toMatchInlineSnapshot('"pl-form"')
})
