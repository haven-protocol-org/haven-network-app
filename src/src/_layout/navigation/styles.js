import styled from "styled-components";
import { dark } from "../../constants/themes.js";

export const Container = styled.div`
  height: 64px;
  width: 100%;
  position: fixed;
  background: ${dark.body.navigation};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${dark.body.border};
`;

export const Logo = styled.img`
  height: 24px;
  width: 20px;
`;

export const Haven = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 12px;
`;

export const Brand = styled.a`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
`;
