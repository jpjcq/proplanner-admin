import { motion } from "framer-motion";
import styled from "styled-components";

const SearchBar = styled(motion.input)`
  min-width: 313px;
  height: 52px;
  padding: 0 30px;
  border: none;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.boxShadowMedium.outset};
  &::placeholder {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.policeLight};
  }
`;

export default SearchBar;
