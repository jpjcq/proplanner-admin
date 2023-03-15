import styled from "styled-components";

const Wrapper = styled.div`
  height: 728px;
  margin: 0 14px 14px 14px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadowMedium.outset};
  border-radius: 20px;
`;

export default function Parameters() {
  return <Wrapper>Hello, world!</Wrapper>;
}
