import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 50px;
`

export const HomeItems = styled.div`
    flex: 1;
    margin: 0px 20px;
    width: 220px;
    padding: 15px;
    border-radius: 10px;

    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

export const HomeBody = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`
export const Client = styled.img`
    width: 50px;
    height: 50px;
`
export const Appointment = styled.img`
    width: 50px;
    height: 50px;
`
export const MealPlan = styled.img`
    width: 50px;
    height: 50px;
`
export const Summer = styled.img`
    width: 50px;
    height: 50px;
`
export const Food = styled.img`
    width: 50px;
    height: 50px;
`


