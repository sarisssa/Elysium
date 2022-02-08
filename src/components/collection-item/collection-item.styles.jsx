import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    
    @media screen and (min-width: 800px) {
        width: 22vw;
    }
    
    &:hover {
        .image {
            opacity: 0.8;
        }
        button {
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 285px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    cursor: pointer;
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-top: 10px;
`;

export const NameContainer = styled.span`
    font-size: 13px;
    text-transform: uppercase;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    font-size: 12px;
    font-weight: bold;
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 220px;
    display: none;
`;