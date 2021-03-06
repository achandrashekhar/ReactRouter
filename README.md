**Create your Own React Router**

Although you can use the RR library, you can create your own React Router with only a few lines of code.

You need to be able to think in terms of state-based rendering. If your app is in a particular 'state',
you render a particular page. 

In your parent method, the render method will have a conditional rendering, something in the lines of: <br/>

if(this.state.screenName==='something'){ <br/>
  return() {<br/>
  //JSX you want to return<br/>
}<br/>
} else {</br>
  return() {<br/>
  //JSX you want to return <br/>
  }<br/>
 }<br/>
 
One common mistake to do here is, missing out an 'else'. You always need to return default JSX since every render needs to have one.

**Setting a Parent Prop from a Child component**

Usually, in React, you pass props from a Parent component to a Child component, but in order for a child to be able to change a Parent's state, you would need to pass a callback as a prop from the Parent to the Child component, and invoke this callback on an event or whenever you would like to route to another page/component. 

In my example above, I pass the handleClick() fucntion as a prop to my Child Components. <br/>
I just call this.setState within that function in order to change my Parent's state. </br>

Here is the Parent-Child Hierarchy in the example: <br/><br/>
App.js<br/>
  |</br>
   --FirstPage.js</br>
  |<br/>
   --SecondPage.js <br/> <br/>
   
   **Running this Example** <br>
   After you do a git clone, <br/>
   $npm install<br>
   $cd my-app<br/>
   $npm start<br/>
   
   browse to http://localhost:3000 and click on the buttons to see the magic!<br/>
   Happy Routing!
   
