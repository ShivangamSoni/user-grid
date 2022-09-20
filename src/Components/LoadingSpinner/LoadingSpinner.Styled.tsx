import styled, { keyframes } from "styled-components";

export const Spinner = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgb(0, 0, 0, 0.2);
`;

const FadeAnimation = keyframes`
0%, 49%, 100% {
  opacity: 0;
}
50% {
  opacity: 1;
}
`;

interface CircleProps {
    idx: number;
}

export const Circle = styled.div<CircleProps>`
    width: 50px;
    height: 50px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
        ${({ idx }) => {
            const rotation = (360 / 12) * idx;
            return `rotate(${rotation}deg)`;
        }};

    animation: ${FadeAnimation} 1200ms infinite ease-in-out both;
    animation-delay: ${({ idx }) => `-${1200 - 100 * idx}ms`};

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;

        width: 20%;
        height: 20%;
        border-radius: 50%;

        background-color: white;
    }
`;
