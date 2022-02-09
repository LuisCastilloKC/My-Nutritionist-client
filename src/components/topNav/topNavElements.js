import styled from 'styled-components'

export const TopNav = styled.div`
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
`

export const TopNavWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    font-weight: bold;
    font-size: 25px;
    color: lightgreen;
    cursor: pointer;
`

export const TopNavIconContainer = styled.div`
    position: relative;
`

export const TopIconBadge = styled.span`
width: 15px;
    position: absolute;
    top: -5px;
    right: 5px;
    background-color: green;
    color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`