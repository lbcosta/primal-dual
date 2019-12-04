import React from "react";
import Select from "react-select";

import {
  Container,
  StaticSide,
  DynamicSide,
  Equation,
  Variable,
  EqualityConstraints,
  ConversionButton
} from "./styles";

const selectCustomStyle = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    display: "none"
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none"
  })
};

export default function Tableau({
  objective,
  objFunction = [],
  constraints = [],
  equalityConstraints = []
}) {
  function fillEquation(value, variableIdx, arr, signal, constraintIdx) {
    if (variableIdx !== arr.length - 1) {
      return (
        <Variable key={"vv-" + value + variableIdx}>
          <input type="number" value={value} />
          <span>
            X <sub>{variableIdx + 1}</sub>{" "}
          </span>
        </Variable>
      );
    } else {
      return (
        <Variable key={"vv-" + value}>
          <Select value={signal} styles={selectCustomStyle} />
          <input type="number" value={value} />
        </Variable>
      );
    }
  }

  return (
    <>
      <Container>
        <StaticSide>
          <div>
            <Select value={objective} styles={selectCustomStyle} />
            <span>Z =</span>
          </div>
          <div>
            <p>S.T.</p>
          </div>
        </StaticSide>
        <DynamicSide>
          <Equation>
            {objFunction.map((variable, idx) => (
              <Variable key={"v-" + idx}>
                <input type="number" value={variable} />
                <span>
                  X <sub>{idx + 1}</sub>{" "}
                </span>
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
                  X <sub>{idx + 1}</sub>
                </span>
                <Select value={equalityConstraint} styles={selectCustomStyle} />
                <span>0</span>
                {idx !== equalityConstraints.length - 1 && <span>,</span>}
              </li>
            ))}
          </EqualityConstraints>
        </DynamicSide>
      </Container>
      <ConversionButton>
        <button type="button">Voltar</button>
      </ConversionButton>
    </>
  );
}
