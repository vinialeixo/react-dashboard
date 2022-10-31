import "./ChartBar.css";

const ChartBar = (props) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <div className="char-bar__label"></div>
    </div>
  );
};
