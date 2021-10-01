import React, { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    Total: 0,
    PositiveFeedback: 0,
  };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  render() {
    // const { todos } = this.state;

    // const totalTodoCount = todos.length;
    // const completedTodoCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );

    return (
      <div>
        <Section>
          <FeedbackOptions />
          <Statistics />
        </Section>
      </div>
    );
  }
}
export default App;
