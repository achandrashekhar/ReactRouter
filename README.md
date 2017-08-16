**Create your Own React Router**

Although you can use the RR library, you can create your own React Router with only a few lines of code.

You need to be able to think in terms of state-based rendering. If your app is in a particular 'state',
you render a particular page. 

In your parent method, the render method will have a conditional rendering, something in the lines of:

if(this.state.screenName==='something'){
  return() {
  //JSX you want to return
}
} else {
  return() {
  //JSX you want to return 
  }
 }
 
One common mistake to do here is, missing out an 'else'. You always need to return default JSX since every render needs to have one.

**Setting a Parent Prop from a Child component**

Usually, in React, you pass props from a Parent component to a Child component, but in order for a child to be able to change a Parent's state, you would need to pass a callback as a prop from the Parent to the Child component, and invoke this callback on an event or whenever you would like to route to another page/component. 
