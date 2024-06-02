import { ThemedView } from "@/components/ThemedView";
import styled from "styled-components/native";

export const SearchAndFilterContainer = styled(ThemedView)`
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-self: center;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const FilterIconContainer = styled(ThemedView)`
    color: ${props => props.theme.text};
    padding-left: 10px;
`;