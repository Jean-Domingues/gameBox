import styled from "styled-components";
import colors from "@/config/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 300px;

  h1 {
    color: ${colors.primary};
  }
`;
