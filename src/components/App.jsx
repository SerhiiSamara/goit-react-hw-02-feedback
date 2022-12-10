import { Component } from 'react';

import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';
import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  coutnFeedback = e => {
    if (e.target.name === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
      return;
    }

    if (e.target.name === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
      return;
    }

    if (e.target.name === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
      return;
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.coutnFeedback}
          />
        </Section>
        {this.state.good + this.state.neutral + this.state.bad > 0 ? (
          <Section title="Statistic">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
        <GlobalStyle />
      </>
    );
  }
}
