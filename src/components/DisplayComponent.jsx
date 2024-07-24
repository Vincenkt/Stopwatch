const DisplayComponent = (props) => {
  return (
    <div>
      <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
      {/* &nbsp; */}
      <span style={{ width: "20px", paddingRight: "40px" }}>:</span>
      <span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</span>
      {/* &nbsp; */}
      <span style={{ width: "20px", paddingRight: "40px" }}>:</span>
      <span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
      {/* &nbsp; */}
    </div>
  );
};

export default DisplayComponent;
