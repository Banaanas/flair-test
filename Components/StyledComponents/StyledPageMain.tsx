import { motion } from "framer-motion";
import styled from "@emotion/styled";

const StyledPageMain = styled(motion.main)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  font-weight: bold;
  text-align: justify;
  transition: filter, 300ms ease;
`;

export default StyledPageMain;
