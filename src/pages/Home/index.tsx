import React from "react";
import { GiClick } from "react-icons/gi";
import Button from "../../components/Button";
import colors from "@/config/colors";

import * as S from "./styles";

function Home() {
  return (
    <S.Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "300px",
      }}
    >
      <h1>React template</h1>
      <div>
        <Button onClick={() => alert("Você clicou no botão!")}>
          Clique aqui <GiClick color={colors.primary} />
        </Button>
      </div>
    </S.Container>
  );
}

export default Home;
