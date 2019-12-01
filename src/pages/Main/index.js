import React, { useState } from "react";

import { PageLogo, PageWrapper, Container } from "./styles";
import Logo from "../../assets/img/Logo.png";

export default function Main() {
  const [objective, setObjective] = useState("min");
  const [objFunction, setObjFunction] = useState([]);
  const [constraints, setConstraints] = useState([]);
  const [equalityConstraints, setEqualityConstraints] = useState([]);

  return (
    <PageWrapper>
      <PageLogo src={Logo} />
      <Container>
        <p>Min Z = 2X1 + 3X2 [+]</p>
        <p>S.T. 4X1 >= 8</p>
        <p>+</p>
        <p>X1 > 0, X2 </p>
      </Container>
    </PageWrapper>
  );
}
