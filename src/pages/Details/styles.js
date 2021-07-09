import styled from "styled-components";
import {
  View as RView,
  Text as RText,

} from 'react-native';
import { Card as PCard } from 'react-native-paper';
import { colors } from "../../utils/colors";

export const ViewImage = styled(RView)` 
  flex: 0.5; 
  height: 180px;
`;

export const Text = styled(RText)`
  color: ${colors.white}
`;

export const ViewIngredients = styled(RView)`
  flex: 0.5;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const ViewnInstructions = styled(RView)`
  flex: 1; 
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 20px;
`;

