import styled from "styled-components";
import { SetWidth } from "../../CommonStyled";

export const Wrapper = styled.header`
    ${SetWidth}

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    color: #fff;
`;

export const Nav = styled.nav``;

export const LinksList = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li``;

export const Link = styled.button`
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;

    background-color: transparent;

    font-size: 0.8rem;
    padding: 0.3em 1em;

    transition: color 250ms linear;

    color: #adb7be;

    &:hover,
    &:active {
        color: #fff;
    }
`;
