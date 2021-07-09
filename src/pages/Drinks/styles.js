import styled from "styled-components";
import { Card as PCard } from 'react-native-paper';
import { colors } from "../../utils/colors";

export const Card = styled(PCard)`
  margin-top: 5px;
  padding: 5px;
  background-color: ${({ color }) => color ? color : `${colors.white}`};
  border-radius: 5px;
  width: 45%;
  height: 180px;
  `;