import styled from 'styled-components';
import defaultDot from '../../../../assets/paginationbtns/defaultDot.png'
import activeDot from '../../../../assets/paginationbtns/activeDot.png'

interface IDotProps{
    active: boolean
}

export const Dot = styled.div<IDotProps>`
cursor:pointer;
height: 10px;
width: 10px;
margin: 0 42px;
background: url(${(props):string => props.active? activeDot:defaultDot});
`;
