import React, { useState } from "react";
import Select from "react-select";

import {
  PageLogo,
  PageWrapper,
  PageContent,
  Container,
  StaticSide,
  DynamicSide,
  Equation,
  Variable
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

export default function Main() {
  const [objective, setObjective] = useState(objectiveOptions[0]);
  const [objFunction, setObjFunction] = useState([6, 4]);
  const [constraints, setConstraints] = useState([
    [1, 2],
    [3, 4]
  ]);
  const [equalityConstraints, setEqualityConstraints] = useState([]);

  function buttonOrSpan(actualIdx, arr) {
    return actualIdx === arr.length - 1 ? (
      <button type="button">+</button>
    ) : (
      <span>+</span>
    );
  }

  return (
    <PageWrapper>
      <PageLogo src={Logo} />
      <PageContent>
        <Container>
          <StaticSide>
            <div>
              <Select
                value={objective}
                onChange={setObjective}
                options={objectiveOptions}
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
                <Variable>
                  <input type="number" value={variable} />
                  <span>
                    X <sub>{idx + 1}</sub>{" "}
                  </span>
                  {buttonOrSpan(idx, objFunction)}
                </Variable>
              ))}
            </Equation>
            {constraints.map(constraint => (
              <Equation>
                {constraint.map((variable, idx) => (
                  <Variable>
                    <input type="number" value={variable} />
                    <span>
                      X <sub>{idx + 1}</sub>{" "}
                    </span>
                    {buttonOrSpan(idx, constraint)}
                  </Variable>
                ))}
              </Equation>
            ))}

            <button type="button">+</button>
          </DynamicSide>
        </Container>
      </PageContent>
    </PageWrapper>
  );
}
