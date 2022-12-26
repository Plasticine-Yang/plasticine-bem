# plasticine-bem

A library for generating bem specifications.

## Usage

```shell
pnpm i plasticine-bem
```

You can create a bem namespace by calling `createNameSpace` function.

The first param is the block of bem, and the second param is an options object which you can config the namespace.

```ts
const ns = createNameSpace('form', {
  namespace: 'pl',
})
```

You can also config the global namspace by calling the `setGlobalNameSpace` function.

```ts
setGlobalNameSpace('pl')
const ns = createNameSpace('form')

ns.b() // ==> pl-form
```

You can generate b, e, m, be, bm, em and bem by calling methods on ns object.

```ts
// b
ns.b() // ==> pl-form

// you can also declare the block suffix
ns.b('item') // ==> pl-form-item

// e
ns.e('label') // ==> pl-form__label

// m
ns.m('primary') // ==> pl-form--primary

// be
ns.be('item', 'label') // ==> pl-form-item__label

// bm
ns.bm('item', 'primary') // ==> pl-form-item--primary

// em
ns.em('label', 'primary') // ==> pl-form__label--primary

// bem
ns.bem('item', 'label', 'primary') // ==> pl-form-item__label--primary
```

Sometimes you may want to generate the corresponding class name when the value of a state is a specific value. You can use `is` method of ns object to complete that.

```ts
const isActive = true
const ns = createNameSpace('button')

ns.is('active', isActive) // ==> is-active
```

```ts
const isActive = false
const ns = createNameSpace('button')

ns.is('active', isActive) // ==> ""
```

It will generate `is-active` by default if you not pass the second state param.

```ts
ns.is('active') // ==> is-active
```

## Options

### namespace

The namespace for target classname. Its priority is higher than the global.

```ts
import { setGlobalNameSpace, createNameSpace } from 'plasticine-bem'

setGlobalNameSpace('foo')
const ns = createNameSpace('form', { namespace: 'bar' })
ns.b() // ==> bar-form
```

### statePrefix

You can change the prefix of the return value of `ns.is()` if you don't like the default `is-` prefix.

```ts
const ns = createNameSpace('form', { statePrefix: 'have-' })
ns.is('active') // ==> have-active
```

### cssModuleClasses

In order to integrate with css modules.

```ts
// Assume that this is the compilation result of the css module.
const cssModuleClasses = {
  form: 'style-module__form--1f3gh',
}

const ns = createNameSpace('form', { cssModuleClasses })
ns.b() // ==> style-module__form--1f3gh
```
