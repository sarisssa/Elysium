import styled, { css } from "styled-components";

const getButtonStyles = props => {
    if (props.isGoogleSignIn) return googleSignInStyles;

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const CustomButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    letter-spacing: 0.5px;
    padding: 12px 10px;
    font-size: 11px;
    line-height: 20px;

    
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;

    @media screen and (min-width: 800px) {
        padding: 15px 20px;
        font-size: 15px;
    }

    ${getButtonStyles}
`;