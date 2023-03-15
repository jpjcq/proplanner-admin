import { Button } from "rebass/styled-components";
import styled from "styled-components";

export const Link = styled(Button)`
  padding: 0;
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.policeDark};
  background: none;
`;
