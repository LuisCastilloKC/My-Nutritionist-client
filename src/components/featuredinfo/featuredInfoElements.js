import styled from "styled-components";

export const Featured = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const FeautedItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 15px;
    border-radius: 10px;
    
    
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`

export const AppointmentProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const ProfileName = styled.h3`
    padding-right: 50px;
`

export const ProfileAge = styled.div`
    color: gray;
    font-size: 14px;
`

export const ProfileEditButton = styled.span`
    color: gray;
    cursor: pointer;
    height: 10px;
    margin-left: 15px;

    &:hover{
        color: darkgrey;
    }
`

export const ProfileFooterCointainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`