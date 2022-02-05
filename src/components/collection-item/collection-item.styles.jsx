import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
    display: flex;
    width: 22vw;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    
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
    height: 95%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    cursor: pointer;
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`

`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;