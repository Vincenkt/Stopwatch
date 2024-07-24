const BtnComponent = (props) => {
  return (
    <div>
      {props.status === 0 ? (
        <button
          className="stopwatchBtn stopwatchBtnGreen"
          onClick={props.start}
        >
          Start{" "}
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button className="stopwatchBtn stopwatchBtnRed" onClick={props.stop}>
            Stop
          </button>
          <button
            className="stopwatchBtn stopwatchBtnYellow"
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      {props.status === 2 ? (
        <div>
          <button
            className="stopwatchBtn stopwatchBtnGreen"
            onClick={props.resume}
          >
            Resume
          </button>
          <button
            className="stopwatchBtn stopwatchBtnYellow"
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BtnComponent;
