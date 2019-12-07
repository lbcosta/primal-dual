import React from "react";
import Select from "react-select";

import {
  Container,
  StaticSide,
  DynamicSide,
  Equation,
  Variable,
  EqualityConstraints
} from "./styles";

const selectCustomStyle = {
  dropdownIndicator: provided => ({
    ...provided,
    display: "none"
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: "none"
  }),
  placeholder: provided => ({
    ...provided,
    display: "none"
  })
};

export default function Tableau({
  objective,
  objFunction = [],
  constraints = [],
  equalityConstraints = [],
  reset
}) {
  function hasSumSymbol(actualIdx, arr) {
    return actualIdx !== arr.length - 1 && <span>+</span>;
  }

  function fillEquation(value, variableIdx, arr, signal, constraintIdx) {
    if (variableIdx !== arr.length - 1) {
      return (
        <Variable key={"vv-" + value + variableIdx}>
          <input type="number" value={value} disabled />
          <span>
            Y <sub>{variableIdx + 1}</sub>{" "}
          </span>
          {hasSumSymbol(variableIdx, objFunction)}
        </Variable>
      );
    } else {
      return (
        <Variable key={"vv-" + value}>
          <Select value={signal} styles={selectCustomStyle} isDisabled />
          <input type="number" value={value} disabled />
        </Variable>
      );
    }
  }

  return (
    <>
      <Container>
        <StaticSide>
          <div>
            <Select value={objective} styles={selectCustomStyle} isDisabled />
            <span>W =</span>
          </div>
          <div>
            <p>S.T.</p>
          </div>
        </StaticSide>
        <DynamicSide>
          <Equation>
            {objFunction.map((variable, idx) => (
              <Variable key={"v-" + idx}>
                <input type="number" value={variable} disabled />
                <span>
                  Y <sub>{idx + 1}</sub>{" "}
                </span>
                {hasSumSymbol(idx, objFunction)}
              </Variable>
            ))}
          </Equation>
          {constraints.map((constraint, constraintIdx) => (
            <Equation key={"eq-" + constraintIdx}>
              {constraint.values.map((value, idx, arr) =>
                fillEquation(value, idx, arr, constraint.signal, constraintIdx)
              )}
            </Equation>
          ))}
          <EqualityConstraints>
            {equalityConstraints.map((equalityConstraint, idx) => (
              <li key={"ec-" + idx}>
                <span>
                  Y <sub>{idx + 1}</sub>
                </span>
                <Select
                  value={equalityConstraint}
                  styles={selectCustomStyle}
                  isDisabled
                />
                <span>0</span>
                {idx !== equalityConstraints.length - 1 && <span>,</span>}
              </li>
            ))}
          </EqualityConstraints>
        </DynamicSide>
      </Container>
    </>
  );
}
