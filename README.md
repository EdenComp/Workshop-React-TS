# Workshop 1 - Kanban App in React

The goal of this workshop is to create a [Kanban-like](https://www.digite.com/kanban/what-is-kanban/) application using the React library in Typescript
<br/><br/>
## Step 0: Initialization

All the installation steps required to do the exercises are detailed in the [SETUP.md](./SETUP.md)
<br/><br/>
## Step 1: Create your first component

`Components` are the core of React. They represent a single element in a web page, like a `text` box, a `button`, a `div` etc. All combined together, they create a fully working web page. These components are re-usable, they prevent you from code duplication.

You will learn how to [create components](https://www.w3schools.com/react/react_components.asp) right now in the first step!

> In this workshop, we recommend you to use `Functional Components`, instead of `Javascript classes`. [Here](https://djoech.medium.com/functional-vs-class-components-in-react-231e3fbd7108) is a little explanation of the differences.

In `src/App.ts`, create a component that will display the application title, which is just a string.
In Typescript, we must specify the type of the return value of the function: for all TSX React components, you can use `JSX.Element`.

```tsx
function Title(): JSX.Element {
    return (...)
}
```

Then, in your `app function`, you should have:

```tsx
function App(): JSX.Element {
  return (
    ...
      <Title />
    ...
  );
}
```
<br/><br/>
## Step 2: Show content with Components from Material UI

Now that you know how to create a component in React, let's get into Material UI.
Material UI is a library of pre-built components that you can use in your React app.
Discover [here](https://dev.to/amberjones/5-delightful-things-about-material-ui-5402) the advantages of using a components library such as Material UI.

The goal of this task is to create the `Task` component: this component will represent a task with all its information, including:
- A title
- A description
- A due time

To do so, you must use the [Material UI Components](https://mui.com/components/), such as [Box](https://mui.com/material-ui/react-box/) or [Typography](https://mui.com/material-ui/react-typography/).

:bulb: We let you figure out which components you may use from the link below!

> From now, we recommend you to create a `Components` folder in your `src` folder, and to create one file per component and naming it with the name of your component. For instance, the `Task` component should be located in `src/Components/App.tsx`.

:bulb: Don't forget to [export](https://medium.com/swlh/javascript-import-export-basics-ed7d94caf4c0) your functions to reuse them in your `src/App.tsx`!


## Authors

| [<img src="https://github.com/RezaRahemtola.png?size=85" width=85><br><sub>Reza Rahemtola</sub>](https://github.com/RezaRahemtola) | [<img src="https://github.com/EdenComp.png?size=85" width=85><br><sub>Florian Lauch</sub>](https://github.com/EdenComp) | [<img src="https://github.com/Samoten777.png?size=85" width=85><br><sub>Laure Gagner</sub>](https://github.com/Samoten777) | [<img src="https://github.com/nicolasheude.png?size=85" width=85><br><sub>Nicolas Heude</sub>](https://github.com/nicolasheude) 
| :---: | :---: | :---: | :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
