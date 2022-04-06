import React from 'react';
import { HomeBody, HomeContainer, HomeItems, Image } from './homeDashboardElements';


const HomeDashboard = () =>{

    return(
        <HomeContainer>
            <HomeItems>
                <HomeBody>
                    <Image src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/users-alt-512.png" /> 
                    <h4>Patients</h4> 
                </HomeBody>
            </HomeItems>
            <HomeItems>
                <HomeBody>
                    <Image src="https://cdn0.iconfinder.com/data/icons/business-startup-10/50/35-512.png" />
                    <h4>Appointments</h4> 
                </HomeBody>
            </HomeItems>
            <HomeItems>
                <HomeBody>
                    <Image src="https://cdn2.iconfinder.com/data/icons/food-and-drink-free/24/Food_Drink_Foods_Noodle_Ramen_Bowl_Meal-512.png" />
                    <h4>Meal Plan</h4>                
                </HomeBody>
            </HomeItems>
            <HomeItems>
                <HomeBody>
                    <Image src="https://cdn0.iconfinder.com/data/icons/infectious-pandemics/480/07-healthy-512.png" />
                    <h4>Summer Plan</h4>           
                </HomeBody>
            </HomeItems>
            <HomeItems>
                <HomeBody>
                    <Image src="https://cdn2.iconfinder.com/data/icons/international-food/64/curry-512.png" />
                    <h4>Foods</h4>             
                </HomeBody>
            </HomeItems> 
        </HomeContainer>
    );
};

export default HomeDashboard;