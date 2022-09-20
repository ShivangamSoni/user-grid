import styled from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    display: grid;
    grid-template-columns: 30% 70%;

    min-height: 100px;

    padding: 1rem 0.5rem;
    border-radius: 5px;

    &:hover {
        box-shadow: 0 0 0.3rem rgb(255, 255, 255, 0.3),
            0 0 0.5rem rgb(255, 255, 255, 0.5);
    }
`;

export const CardHeader = styled.div`
    max-height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardAvatar = styled.div`
    & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
    }
`;

export const CardFooter = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: center;

    margin-left: 10px;
`;

export const CardTitle = styled.h2`
    font-size: 1rem;
    color: #353535;
`;

export const CardSubTitle = styled.h3`
    font-size: 0.8rem;
    color: #adb7be;
`;
