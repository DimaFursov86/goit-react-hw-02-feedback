import React, { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotal: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    total: this.props.initialTotal,
    positiveFeedback: 0,
    visible: false,
  };
  handleIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
    if (this.state.good === 0) {
      this.setState({
        positiveFeedback: Math.floor((100 / (this.state.total + 1)) * 1),
      });
    } else {
      this.setState({
        positiveFeedback: Math.floor(
          (100 / (this.state.total + 1)) * (this.state.good + 1)
        ),
      });
    }
  };
  handleIncrementNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
    if (this.state.good === 0) {
      this.setState({
        positiveFeedback: 0,
      });
    } else {
      this.setState({
        positiveFeedback: Math.floor(
          (100 / (this.state.total + 1)) * this.state.good
        ),
      });
    }
  };
  handleIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
    if (this.state.good === 0) {
      this.setState({
        positiveFeedback: 0,
      });
    } else {
      this.setState({
        positiveFeedback: Math.floor(
          (100 / (this.state.total + 1)) * this.state.good
        ),
      });
    }
  };
  show = (e) => {
    if (e.target.nodeName === "BUTTON") {
      this.setState({ visible: true });
    }
  };

  render() {
    return (
      <div>
        <Section>
          <FeedbackOptions
            options={[
              this.handleIncrementGood,
              this.handleIncrementNeutral,
              this.handleIncrementBad,
            ]}
            onLeaveFeedback={this.show}
          />
          {this.state.visible ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positiveFeedback}
            />
          ) : (
            <Notification message={"No feedback given"} />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
