![npm](https://img.shields.io/npm/v/vuex-map-computed)

# Vuex ...mapComputed

When you are binding directly a Vuex state property to the form via `v-model` you need to create [Two-way Computed Property](https://vuex.vuejs.org/guide/forms.html#two-way-computed-property).

This simple method takes an inspiration from `mapGetters`, `mapMutations` and `mapActions` methods and helps to create such property the same way: `mapComputed`.

## Installation

`npm i vuex-map-computed`
or
`yarn add vuex-map-computed`

## Usage

First import the method:

```javascript
import { mapComputed } from "vuex-map-computed";
```

Consider we want to bind to a Vuex property called `message`:

```html
// MyComponent.vue <input v-model="email" />
```

### Rely on Convention

In case you have a Vuex state field named `message` it is expected you having a getter with the same name `message` and a setter named `setMessage` (with prefix `set*`). In such case you can simply map the computed property as this:

```javascript
// MyComponent.vue
computed: {
    ...
    ...mapComputed("moduleName", ["message"])
    ...
}
```

### Using Configuration

If you want to define getters and setters yourself, it is also possible:

```javascript
// MyComponent.vue
computed: {
    ...
    ...mapComputed("moduleName", [
      { name: "message", getter: "getMessage", setter: "setMessage" }
    ])
    ...
}
```

You can skip the `name`, in such case a value of `getter` is used as the name.

**Only modules are supported. That means you can't use this method with root store!**

## License

This code is published under the MIT license, you can do whatever you want with it, but it is provided with absolutely no warranty.
