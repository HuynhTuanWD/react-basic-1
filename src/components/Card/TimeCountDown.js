import React from "react";
import moment from "moment";

class TimeCountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainTime: props.remainTime,
    };
  }
  componentDidMount() {
    const { removeCardFromId, id } = this.props;
    this.timer = setInterval(() => {
      if (this.state.remainTime <= 0) {
        removeCardFromId(id);
      }
      this.setState({ remainTime: this.state.remainTime - 1 });
    }, 1000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    let formattedPreTime = moment();
    formattedPreTime = formattedPreTime
      .hours(0)
      .minutes(0)
      .seconds(this.state.remainTime);
    let formattedNextTime = moment();
    formattedNextTime = formattedNextTime
      .hours(0)
      .minutes(0)
      .seconds(nextState.remainTime);
    if (this.state.remainTime < 60) {
      return true;
    }
    if (
      formattedPreTime.get("hours") !== formattedNextTime.get("hours") ||
      formattedPreTime.get("minutes") !== formattedNextTime.get("minutes")
    ) {
      return true;
    }
    return false;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("TimeCountDown Render");
    let formattedTime = moment();
    formattedTime = formattedTime
      .hours(0)
      .minutes(0)
      .seconds(this.state.remainTime);
    return (
      <span>
        {this.state.remainTime >= 60
          ? `${formattedTime.get("hours")} hrs ${formattedTime.get(
              "minutes"
            )} mins`
          : `${formattedTime.get("seconds")} seconds`}
      </span>
    );
  }
}

export default TimeCountDown;
