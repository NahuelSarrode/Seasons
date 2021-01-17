import React from 'react'; 

const SeasonDisplay = (props) => {
    return (
        <>
        <h1>Latitud:{props.lat}</h1>
        <h1>Error:{props.error} </h1>
        </>
    );
}

export default SeasonDisplay;