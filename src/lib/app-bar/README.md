# App-Bar
The app bar component is primaritly used at the top of a page to announce the purpose of the page.  This component is where you would primarily put navigation links on the website or sitewide search functionality.  This bar is meant to be simple and announce the purpose of the page primarily.

## How to use the AppBar
The app bar component has a few different implementations.  By default the component is very simple allowing the user the flexibility to add whatever they desire to the component.  This will allow the user the ultimate flexibility to set up the menus and header content the way they desire.

### Variants
In C-137-React there are a few different types of variants that can be applied to every compenent.  These variants are meant to signify the importance or urgency of the content being displayed.  The variants are the default, success, warning, danger and attention.  We will go over how to use the different variants below.

### Usage
#### Default
Below is the most basic implementation of the component.  It uses the default blue color and displays the content of the component.
```JSX
<AppBar>My AppBar content</AppBar>
```

#### Success
Success variant components are meant to be used to notify the user an action was successful.  You will notice the variant attribute on the react component.
```JSX
<AppBar variant="success">My Success AppBar</AppBar>
```

#### Warning
The warning variant of the component is used to let the user know some risk about the action they are about to take.
```JSX
<AppBar variant="warning">My Warning AppBar</AppBar>
```

#### Danger
The danger variant of the component is used to let the user know things have gone off the rails and there might be some side effects from the actions they have taken.
```JSX
<AppBar variant="danger">My Danger AppBar</AppBar>
```

#### Attention
The attention variant is meant to grab the attention of the user by slightly altering the color of the component.  It is different in the fact the color change is not as drastic as the others.
```JSX
<AppBar variant="attention">My Attention AppBar</AppBar>
```

### Demo
To see a working version of this component visit our [Storybook](//TODO FILL ME OUT).
