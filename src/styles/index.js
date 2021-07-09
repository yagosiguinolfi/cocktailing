import {
    Image as RImage,
    SafeAreaView as RSafeAreaView,
    Text as RText,
    View as RView,
} from "react-native";
import { Card as PCard } from 'react-native-paper';
import styled from "styled-components";
import { colors } from "../utils/colors";

export const Image = styled(RImage)`
    width: auto;
    height: 100%;
    border-radius: 3px;
`;

export const SafeAreaView = styled(RSafeAreaView)`
    flex: 1;
    background-color: #1D000D;
`;

export const Title = styled(RText)`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.lightorange};
`;

export const Container = styled(RView)`
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const Content = styled(RView)`
    flex: 1; 
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 20px;    
`;

export const Card = styled(PCard)`
    align-items: ${({ align }) => align == 'start' ? 'flex-start' : 'center'}
    margin: 10px;
    background-color: ${({ color }) => color ? color : `${colors.white}`};
    border-radius: 5px;
    min-width: 180px;
    min-height: 40px;
`;

export const CardTitle = styled(RText)`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.darkorange};
`;