import styled from "styled-components";

export const Featured = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const FeauturedAppointmentItem = styled.div`
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
    padding-right: 5px;
`

export const ProfileAge = styled.div`
    color: gray;
    font-size: 14px;
`

export const ProfileEditButton = styled.div`
    text-align: center;
    color: gray;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: 90px;
    cursor: pointer;
    transition: background-color 0.5s ease;
  
    &:hover{
        background-color: #F5F5F5;
    }
`

export const AppointmentMiddleContainer = styled.div`
// Ready to Style
`
export const  AppointmentPhoneNumber = styled.span`
// Ready to Style
`
export const ProfileFooterCointainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`
export const AppointmentTime = styled.span`

`
export const AppointmentConsult = styled.span`
    color: green;
    font-weight: bold;
    cursor: pointer;
    
    &:hover{
        color: darkgreen;
    }

`
