import styled from "styled-components";
import { dark } from "../../constants/themes.js";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: ${dark.body.foreground};
  padding: 20px;
  border-radius: 4px;
  text-decoration: none;
  border: 1px solid ${dark.body.border};
`;

export const Row = styled.div`
  padding-top: 4px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 4px;
`;

export const Title = styled.div`
  font-size: 17px;
  color: ${dark.type.primary};
  font-family: "Inter";
  font-weight: 700;
`;

export const Description = styled.div`
  font-size: 14px;
  color: ${dark.type.secondary};
  font-family: "Inter";
`;
