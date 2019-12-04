import React, { useState } from "react";
import Select from "react-select";

import { FaGreaterThanEqual, FaLessThanEqual, FaEquals } from "react-icons/fa";

import {
  PageLogo,
  PageWrapper,
  PageContent,
  Container,
  StaticSide,
  DynamicSide,
  Equation,
  Variable,
  AddConstraintButton,
  AddVariableButton,
  EqualityConstraints,
  ConversionButton
} from "./styles";
import Logo from "../../assets/img/Logo.png";

const objectiveOptions = [
  {
    value: "min",
    label: "MIN"
  },
  {
    value: "max",
    label: "MAX"
  }
];

const signalOptions = [
  {
    value: "<=",
    label: <FaLessThanEqual />
  },
  {
    value: ">=",
    label: <FaGreaterThanEqual />
  },
  {
    value: "=",
    label: <FaEquals />
  }
];

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

export default function Main() {
  const [objective, setObjective] = useState(objectiveOptions[0]);
  const [objFunction, setObjFunction] = useState([6, 4]);
  const [constraints, setConstraints] = useState([
    {
      values: [1, 2, 6],
      signal: signalOptions[0]
    },
    {
      values: [3, 4, 8],
      signal: signalOptions[1]
    }
  ]);
  const [equalityConstraints, setEqualityConstraints] = useState([
    signalOptions[0],
    signalOptions[0]
  ]);

  function convert() {
    const dualObjFunction = constraints.map(
      constraint => constraint.values.slice(-1)[0]
    );
    const dualEqConstraints = constraints.map(constraint => constraint.signal);

    const variableMatrix = constraints.map(constraint =>
      constraint.values.slice(0, -1)
    );
    const dualVariableMatrix = variableMatrix[0].map((col, i) =>
      variableMatrix.map(row => row[i])
    );

    const dualConstraints = equalityConstraints.map((eqConst, eqConstIdx) => ({
      values: dualVariableMatrix[eqConstIdx],
      signal: eqConst
    }));

    console.log("objFun", dualObjFunction);
    console.log("eqConst", dualEqConstraints);
    console.log("const", dualConstraints);
  }

  function buttonOrSpan(actualIdx, arr) {
    return actualIdx === arr.length - 1 ? (
      <AddVariableButton type="button" onClick={addVariable}>
        +
      </AddVariableButton>
    ) : (
      <span>+</span>
    );
  }

  function hasSumSymbol(actualIdx, arr) {
    return actualIdx !== arr.length - 2 && <span>+</span>;
  }

  function addVariable() {
    setObjFunction([...objFunction, 0]);

    setConstraints(
      constraints.map(constraint => {
        const newValues = [...constraint.values];
        newValues.splice(newValues.length - 1, 0, 0);
        return {
          ...constraint,
          values: newValues
        };
      })
    );

    setEqualityConstraints([...equalityConstraints, signalOptions[0]]);
  }

  function addConstraint() {
    const constraintLength = constraints[0].values.length;
    setConstraints([
      ...constraints,
      {
        values: new Array(constraintLength).fill(0),
        signal: signalOptions[0]
      }
    ]);
  }

  function handleSignalChange(value, constraintIdx) {
    setConstraints(
      constraints.map((constraint, idx) =>
        idx === constraintIdx ? { ...constraint, signal: value } : constraint
      )
    );
  }

  function handleConstraintValueChange(
    value,
    constraintActualIdx,
    variableActualIdx
  ) {
    setConstraints(
      constraints.map((constraint, constraintIdx) =>
        constraintIdx !== constraintActualIdx
          ? constraint
          : {
              ...constraint,
              values: constraint.values.map((variable, variableIdx) =>
                variableIdx !== variableActualIdx
                  ? variable
                  : parseInt(value, 10)
              )
            }
      )
    );
  }

  function handleObjFunctionValueChange(value, variableIdx) {
    setObjFunction(
      objFunction.map((variable, idx) =>
        idx !== variableIdx ? variable : value
      )
    );
  }

  function handleEqualityConstraintSignalChange(value, constraintIdx) {
    setEqualityConstraints(
      equalityConstraints.map((equalityConstraint, idx) =>
        idx !== constraintIdx ? equalityConstraint : value
      )
    );
  }

  function fillEquation(value, variableIdx, arr, signal, constraintIdx) {
    if (variableIdx !== arr.length - 1) {
      return (
        <Variable key={"vv" + value + variableIdx}>
          <input
            type="number"
            value={value}
            onChange={event =>
              handleConstraintValueChange(
                event.target.value,
                constraintIdx,
                variableIdx
              )
            }
          />
          <span>
            X <sub>{variableIdx + 1}</sub>{" "}
          </span>
          {hasSumSymbol(variableIdx, arr)}
        </Variable>
      );
    } else {
      return (
        <Variable key={"vv" + value}>
          <Select
            value={signal}
            onChange={value =>
              handleSignalChange(value, constraintIdx, constraintIdx)
            }
            options={signalOptions}
            styles={selectCustomStyle}
          />
          <input
            type="number"
            value={value}
            onChange={event =>
              handleConstraintValueChange(
                event.target.value,
                constraintIdx,
                variableIdx
              )
            }
          />
          <AddVariableButton type="button" onClick={addVariable}>
            +
          </AddVariableButton>
        </Variable>
      );
    }
  }

  return (
    <PageWrapper>
      <PageLogo>
        <img src={Logo} alt="PrimalDual" />
        <h2>Converter</h2>
      </PageLogo>
      <PageContent>
        <Container>
          <StaticSide>
            <div>
              <Select
                value={objective}
                onChange={setObjective}
                options={objectiveOptions}
                styles={selectCustomStyle}
              />
              <span>Z =</span>
            </div>
            <div>
              <p>S.T.</p>
            </div>
          </StaticSide>
          <DynamicSide>
            <Equation>
              {objFunction.map((variable, idx) => (
                <Variable key={"v" + idx}>
                  <input
                    type="number"
                    value={variable}
                    onChange={event =>
                      handleObjFunctionValueChange(event.target.value, idx)
                    }
                  />
                  <span>
                    X <sub>{idx + 1}</sub>{" "}
                  </span>
                  {buttonOrSpan(idx, objFunction)}
                </Variable>
              ))}
            </Equation>
            {constraints.map((constraint, constraintIdx) => (
              <Equation key={"eq" + constraintIdx}>
                {constraint.values.map((value, idx, arr) =>
                  fillEquation(
                    value,
                    idx,
                    arr,
                    constraint.signal,
                    constraintIdx
                  )
                )}
              </Equation>
            ))}
            <EqualityConstraints>
              {equalityConstraints.map((equalityConstraint, idx) => (
                <li key={"ec" + idx}>
                  <span>
                    X <sub>{idx + 1}</sub>
                  </span>
                  <Select
                    value={equalityConstraint}
                    onChange={value =>
                      handleEqualityConstraintSignalChange(value, idx)
                    }
                    options={signalOptions}
                    styles={selectCustomStyle}
                  />
                  <span>0</span>
                  {idx !== equalityConstraints.length - 1 && <span>,</span>}
                </li>
              ))}
            </EqualityConstraints>
            <AddConstraintButton type="button" onClick={addConstraint}>
              +
            </AddConstraintButton>
          </DynamicSide>
        </Container>
        <ConversionButton>
          <button type="button" onClick={convert}>
            Converter!
          </button>
        </ConversionButton>
      </PageContent>
    </PageWrapper>
  );
}
