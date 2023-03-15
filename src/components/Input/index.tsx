import styled from "styled-components";

export const ModalInput = styled.input`
  width: min-content;
  margin-right: 17px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.policeDark};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 4px;
  padding: 18px 42px;
  white-space: nowrap;
  &:last-child {
    margin-right: 0;
  }
  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.policeLight};
  }
`;
