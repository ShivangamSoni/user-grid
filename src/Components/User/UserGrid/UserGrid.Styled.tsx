import styled from "styled-components";
import { SetWidth } from "../../../CommonStyled";

export const Grid = styled.div`
    ${SetWidth}

    margin-top: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
`;
