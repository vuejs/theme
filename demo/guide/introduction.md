# Introduction

Vue (pronounced /vjuː/, like **view**) is a **progressive framework** for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with [modern tooling](https://example.com) and [supporting libraries](https://github.com/vuejs/awesome-vue#components--libraries).

If you’d like to learn more about Vue before diving in, we <a id="modal-player" class="vuemastery-trigger"  href="#">created a video</a> walking through the core principles and a sample project.

## Getting Started

The easiest way to try out Vue.js is using the [Hello World example](https://codepen.io/team/Vue/pen/KKpRVpx). Feel free to open it in another tab and follow along as we go through some basic examples.

The [Installation](https://example.com) page provides more options of installing Vue. Note: We **do not** recommend that beginners start with `vue-cli`, especially if you are not yet familiar with Node.js-based build tools.

## Declarative Rendering

At the core of Vue.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:

```html
<div id="counter">
  Counter: {{ counter }}
</div>
```

```js
const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(Counter).mount('#counter')
```

We have already created our very first Vue app! This looks pretty similar to rendering a string template, but Vue has done a lot of work under the hood. The data and the DOM are now linked, and everything is now **reactive**. How do we know? Take a look at the example below where `counter` property increments every second and you will see how rendered DOM changes:

```js{8-10}
const CounterApp = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

const CounterApp = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
```

In addition to text interpolation, we can also bind element attributes like this:

```html
<div id="bind-attribute">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds to see my dynamically bound
    title!
  </span>
</div>
```

```js
const AttributeBinding = {
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')
```

Here we're encountering something new. The `v-bind` attribute you're seeing is called a **directive**. Directives are prefixed with `v-` to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM. Here we are basically saying "_keep this element's `title` attribute up-to-date with the `message` property on the current active instance._"
