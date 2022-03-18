import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const StyledLogo = styled.img.attrs({
    src: `${logo}`
})`
    width: 100px;
    height: 100px;
    border: 10px solid #ffffff;
    z-index: 9999
`;