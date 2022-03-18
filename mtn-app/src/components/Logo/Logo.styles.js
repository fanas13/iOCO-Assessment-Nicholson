import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const StyledLogo = styled.img.attrs({
    src: `${logo}`
})`
    width: 90px;
    height: 90px;
    border: 5px solid #ffffff;
    z-index: 9999
`;