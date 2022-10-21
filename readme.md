JSX Exercises
=============

[Download Starter Code](https://curric.springboard.com/software-engineering-career-track/default/exercises/react-jsx-intro.zip)

Part 1
------

For this assignment you will be creating three components:

**_FirstComponent_**

renders an **_h1_** with the text “My very first component”.

**_NamedComponent_**

renders a **_p_** that should accept a property of “name” and display text “My name is _name_”.

**_App_**

renders a **_div_** with instances of the other two components.

Part 2
------

Define a **_Tweet_** component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

Create an **_App_** component that renders at least three tweets.

Part 3
------

Create a component called **_Person_**. Inside of this component, render a **_p_** tag which displays “Learn some information about this person”. Each person should have name and age properties.

If the person is over 18 years old, display an additional **_h3_** that says “please go vote!”. Otherwise, display an **_h3_** that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.

Add a property called hobbies to your **_Person_** component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an **_li_**.

Add an **_App_** component that renders at least three copies of the **_Person_** component on the page.

Further Study
-------------

### Componentizing Components

You may recall that bootstrap’s UI elements are referred to in the [documentation](https://getbootstrap.com/docs/4.3/components/alerts/) as “components.” Using your knowledge of React so far, build a couple bootstrap components as React components. Good candidates include the Alert, Button, and Card components.

Don’t worry about building Bootstrap components that use JavaScript (e.g. Carousels, Popovers, Modals, etc). You’ll need to learn a bit more about React in order to implement these components.

Solution
--------

[View our Solution](https://curric.springboard.com/software-engineering-career-track/default/exercises/react-jsx-intro/solution/index.html)