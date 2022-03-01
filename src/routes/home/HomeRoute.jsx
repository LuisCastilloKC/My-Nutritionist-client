import React from 'react';
import HomeDashboard from '../../components/homeDashboard/HomeDashboard';
import { CenterBox } from '../../styles/centerBoxElements';

const HomeRoute = () =>{

    return(
        <CenterBox>
            <HomeDashboard />
        </CenterBox>
    );
};

export default HomeRoute;