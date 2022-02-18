import styled from "styled-components";

export const SideNav = styled.div`
    flex: 5;
    height: calc(100vh -50px);
    background-color: rgb(251,251,255);
    position: sticky;
    top: 50px;
`

export const SideNavWrapper = styled.div`
    padding: 20px;
    color: #555;
`

export const SideNavMenu = styled.div`
    margin-bottom: 10px;
`

export const SideNavTitle = styled.h3`
    font-size: 15px;
    color: gray;
`

export const SideNavList = styled.ul`
    list-style: none;
    padding: 5px;
`

export const SideNavListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &:active, &:hover{
        background-color: rgb(228, 228, 250);
    }
`