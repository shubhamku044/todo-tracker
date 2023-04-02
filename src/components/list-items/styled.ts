import styled from "styled-components";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { motion } from "framer-motion";

export const Con = styled.div`
  margin-top: 2rem;

  &>*:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ItemCon = styled(motion.div)`
  background-color: white;
  color: black;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;

  p {
    flex: 1;
  }
`;

export const BinIcon = styled(RiDeleteBin6Line)`
  font-size: 1.2rem;
  color: red;
  cursor: pointer;
`;
