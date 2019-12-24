import React from "react";
import Counter from "./counter";

const Counters = props => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={props.onReset}>
        Reset
      </button>
      {props.counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
        />
      ))}
    </div>
  );
};

export default Counters;
