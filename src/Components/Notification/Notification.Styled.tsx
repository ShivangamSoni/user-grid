import styled from "styled-components";

import type { NotificationType } from "../../Context/SiteState/types";

interface WrapperProps {
    type: NotificationType;
}

export const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    top: 0;
    right: 0;

    width: MIN(350px, 96%);

    font-size: 1rem;
    margin: 0.5em;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid transparent;

    ${({ type }) => {
        switch (type) {
            case "info": {
                return {
                    color: "#004085",
                    backgroundColor: "#cce5ff",
                    borderColor: "#b8daff",
                };
            }
            case "success": {
                return {
                    color: "#155724",
                    backgroundColor: "#d4edda",
                    borderColor: "#c3e6cb",
                };
            }
            case "error": {
                return {
                    color: "#721c24",
                    backgroundColor: "#f8d7da",
                    borderColor: "#f5c6cb",
                };
            }
            case "warning": {
                return {
                    color: "#856404",
                    backgroundColor: "#fff3cd",
                    borderColor: "#ffeeba",
                };
            }
        }
    }}
`;

export const Title = styled.h3`
    font-size: 1.15rem;
`;

export const Description = styled.p`
    font-size: 0.8rem;
    margin-top: 0.5em;
`;

export const Button = styled.button`
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;

    background-color: transparent;
    color: inherit;

    font-size: 1.2rem;

    position: absolute;
    top: 0;
    right: 0;

    padding: 0;
    margin: 2px 5px;
`;
