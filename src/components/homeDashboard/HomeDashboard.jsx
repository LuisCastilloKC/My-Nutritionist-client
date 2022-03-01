import React from 'react';
import { HomeBody, HomeContainer, HomeItems, Client, Appointment, MealPlan, Summer, Food } from './homeDashboardElements';


const HomeDashboard = () =>{

    return(
        <HomeContainer>
            <HomeItems>
                <HomeBody>
                    <Client src="https://cdn0.iconfinder.com/data/icons/infectious-pandemics/480/07-healthy-512.png" />
                </HomeBody>
            </HomeItems>
            <HomeItems>
                <HomeBody>
                    <Appointment src="https://cdn2.iconfinder.com/data/icons/food-and-drink-free/24/Food_Drink_Foods_Noodle_Ramen_Bowl_Meal-512.png" />
                </HomeBody>
            </HomeItems>
            <HomeItems>
                <HomeBody>
                    <MealPlan src="https://cdn2.iconfinder.com/data/icons/food-and-drink-free/24/Food_Drink_Foods_Noodle_Ramen_Bowl_Meal-512.png" />               
                </HomeBody>
            </HomeItems>
            <HomeItems>
                <HomeBody>
                    <Summer src="https://cdn2.iconfinder.com/data/icons/food-and-drink-free/24/Food_Drink_Foods_Noodle_Ramen_Bowl_Meal-512.png" />          
                </HomeBody>
            </HomeItems>
            <HomeItems>
                <HomeBody>
                    <Food src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/girl-2-512.png" />            
                </HomeBody>
            </HomeItems> 
        </HomeContainer>
    );
};

export default HomeDashboard;