import styled from "styled-components";

export const Wrapper = styled.header`
    padding-left: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background: #000;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
`
export const NavBar = styled.nav`
    margin-left: 52px;
    a{
        margin 0 33px;
        cursor: pointer;
        color: #B09A81;
        text-decoration: none;
        font-size: 20px;
    }
    a.active
`