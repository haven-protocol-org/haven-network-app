import styled from "styled-components";
import { Link } from "react-router-dom";
import { dark } from "../../constants/themes.js";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid ${dark.body.border};
`;

export const Nav = styled(Link)`
  height: auto;
  text-decoration: none;
`;

export const Row = styled.div`
  display: flex;
`;

export const Back = styled(Link)`
  font-family: "Inter";
  font-size: 20px;
  color: ${dark.type.secondary};
  letter-spacing: 0;
  line-height: 30px;
  margin-right: 12px;
  text-decoration: none;
  transition: 750ms;

  &:hover {
    color: #fff;
    transition: 750ms;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  color: ${dark.type.primary};
  letter-spacing: 0;
  line-height: 30px;
`;

export const Description = styled.div`
  font-family: "Inter";
  font-size: 14px;
  color: ${dark.type.secondary};
  line-height: 24px;
`;
