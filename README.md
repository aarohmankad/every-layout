# Every Layout

This is a collection of Styled Components for the awesome [Every Layout](https://every-layout.dev/), by [Heydon Pickering](https://twitter.com/heydonworks) & [Andy Bell](https://twitter.com/andybelldesign)

Here's an excerpt from [](https://every-layout.dev/) to explain why these components are important:

> ## Relearn CSS layout
>
> If you find yourself wrestling with CSS layout, it’s likely you’re making decisions for browsers they should be making themselves. Through a series of simple, composable layouts, Every Layout will teach you how to better harness the built-in algorithms that power browsers and CSS.
> Employing algorithmic layout design means doing away with @media breakpoints, “magic numbers”, and other hacks, to create context-independent layout components. Your future design systems will be more consistent, terser in code, and more malleable in the hands of your users and their devices.

## Installation

```bash
npm i every-layout
```

## Usage

You can destructure the default export for whichever components you'd like. For example:

```javascript
import { Cover, Stack } from 'every-layout';
// OR
const { Cover, Stack } = require('every-layout');
```

## Component Customization

Every component has some sane defaults, but can be overriden for custom styling. You can also pass any component a `style` prop to add your own styles.

### Stack

A stack of items on top of each other. The `Stack` component stacks all of it's `children` with the specified margin between them.

Example:

    <Stack space="1.5rem">
      <h2>Header</h2>
      <img src={logo} className="App-logo" />
      <p>Paragraph</p>
    </Stack>

| Prop    | Usage        | Default |
| ------- | ------------ | ------- |
| `space` | `margin-top` | `1rem`  |

### Sidebar

Any two components that can go next to each other if there is enough space. Otherwise, `Sidebar` reverts to stacking them on top of each other. The first child is the "sidebar", and the second child is the "content". More than two children will result in undefined behaviour.

Example:

    <Sidebar
      space="1rem"
      contentMinWidth="50%"
      sidebarWidth="20rem"
      elastic={false}
    >
      <div>Hello</div>
      <div>Hi</div>
    </Sidebar>

| Prop              | Usage                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------ | ------- |
| `space`           | `margin`                                                                                   | `1rem`  |
| `elastic`         | Whether or not sidebar width is specified, must be used in conjunction with `sidebarWidth` | `false` |
| `sidebarWidth`    | `flex-basis`                                                                               | `20rem` |
| `contentMinWidth` | Width at which the sidebar breaks to go on top on content, `min-width`                     | `50%`   |

### Cover

`Cover` treats one of it's children as the "principal" component, and will center it vertically within it. Other components will be spread between the top and bottom, pushed to the edge of the container's boundaries.

The principal component must have a `principal` className.

Example:

    <Cover minHeight="100vh" padding="1rem" margin="1rem">
      <Stack className="principal">
        <h1>How To Create A Book Cover</h1>
        <p>With Flexbox & Love</p>
      </Stack>
      <p>By Heydon Pickering and Aaroh Mankad</p>
    </Cover>

| Prop        | Usage                                               | Default |
| ----------- | --------------------------------------------------- | ------- |
| `padding`   | `padding`                                           | `1rem`  |
| `margin`    | `margin`                                            | `1rem`  |
| `minHeight` | Default height of the Cover component, `min-height` | `100vh` |
