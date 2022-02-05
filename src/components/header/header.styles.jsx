import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 55 px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    svg {
        height: auto;
        width: 70px;
    }

    @media screen and (max-width: 800px) {
        width: 45px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 75%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.95;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
`;