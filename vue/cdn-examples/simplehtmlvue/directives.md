# Vue.js Directives - Options API

## Common Directives

### `v-model`

- **Usage**: `v-model="data"`
- **Description**: Creates a two-way binding on an input element or component. It automatically picks the correct way to update the element based on the input type.

### `v-if`

- **Usage**: `v-if="condition"`
- **Description**: Conditionally renders an element or template based on the truthiness of the expression.

### `v-show`

- **Usage**: `v-show="condition"`
- **Description**: Conditionally shows or hides an element based on the truthiness of the expression. Unlike `v-if`, it does not remove the element from the DOM, only toggles its CSS `display` property.

### `v-for`

- **Usage**: `v-for="(item, index) in items"`
- **Description**: Loops through an array or object and renders the contained template for each item.

### `v-bind`

- **Shorthand**: `:`
- **Usage**: `v-bind:attribute="data"`
- **Description**: Binds an attribute to an expression. It dynamically updates the element's attribute based on the provided data.

### `v-on`

- **Shorthand**: `@`
- **Usage**: `v-on:event="handler"`
- **Description**: Listens to a DOM event and triggers the specified method or expression when the event occurs.

### `v-pre`

- **Usage**: `v-pre`
- **Description**: Skips compilation for this element and all its children. It can be used to display raw mustache tags without being interpreted by Vue.js.

### `v-cloak`

- **Usage**: `v-cloak`
- **Description**: This directive will remain on the element until the associated Vue instance finishes compilation. It can be used to hide uncompiled mustache bindings until the Vue instance is ready.

### `v-once`

- **Usage**: `v-once`
- **Description**: Renders the element and component only once. Subsequent re-renders will skip the element/component and reuse the previously rendered markup.

## Custom Directives

Vue.js also allows you to create custom directives to encapsulate behavior and apply it to DOM elements.

### `Vue.directive`

- **Usage**: `Vue.directive('directiveName', { options })`
- **Description**: Registers a global custom directive with the specified name and options.

### Directive Hook Functions

Custom directives can define several hook functions to control their behavior:

- **`bind`**: Called once when the directive is first bound to the element.
- **`inserted`**: Called once when the bound element is inserted into the parent node.
- **`update`**: Called when the component is updated, but not necessarily re-rendered.
- **`componentUpdated`**: Called after the component and its children have been re-rendered.
- **`unbind`**: Called once when the directive is unbound from the element.
