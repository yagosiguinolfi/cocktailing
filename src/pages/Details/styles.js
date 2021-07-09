import styled from "styled-components";
import {
  View as RView,
  Text as RText,
  Image as RImage,
} from 'react-native';
import { Card as PCard } from 'react-native-paper';
import { colors } from "../../utils/colors";

export const ViewImage = styled(RView)` 
  flex: 0.5;
  min-height: 180px;
`;

export const Image = styled(RImage)`
  resize-mode: contain;
  height: 100%;
  border-radius: 3px;
`;

export const Text = styled(RText)`
  color: ${colors.white}
`;

export const ViewIngredients = styled(RView)`
  flex: 0.5;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
`;

export const ViewInstructions = styled(RView)`
  flex: 0.5;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
`;

