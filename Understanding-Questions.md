# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* An onclick event happens.
* A click handlers handles that event.
* dispatch is called to run another function in actions.
* the action addOne will return a constant in this case add one.
* the dispatch receives that action and then dispatches the action to be done in reducers.
* reducers carries out said action by adding 1 to the total.
* the state is updated to reflect this and re-renders.
* TotalDisplay shows the total plus 1.
