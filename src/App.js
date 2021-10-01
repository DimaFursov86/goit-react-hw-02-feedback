import React, { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    total: 0,
    positiveFeedback: 0,
  };
  handleIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
    this.setState({
      total: this.state.total + 1,
    });
    if (this.state.good === 0 && this.state.neutral === 0) {
      this.setState({
        positiveFeedback: 100,
      });
    } else {
      this.setState({
        positiveFeedback: Math.floor(
          (100 / this.state.total) * this.state.good
        ),
      });
    }
  };
  handleIncrementNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
    this.setState({
      total: this.state.total + 1,
    });
  };
  handleIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
    this.setState({
      total: this.state.total + 1,
    });
  };
  handleIPercentage = () => {
    this.setState({
      positiveFeedback: (100 / this.state.total) * this.state.good,
    });
  };
  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  render() {
    // const {good, neutral, bad } = this.state;

    // const totalTodoCount = todos.length;
    // const completedTodoCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );

    return (
      <div>
        <Section>
          <FeedbackOptions
            options={[
              this.handleIncrementGood,
              this.handleIncrementNeutral,
              this.handleIncrementBad,
            ]}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}
export default App;
