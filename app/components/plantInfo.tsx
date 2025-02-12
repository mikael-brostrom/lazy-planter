"use client";

import { useEffect, useState } from "react";


const PlantInfo = (plantData: any) => {
    const plantAuhtor = plantData.plantData.data.author
    console.log(plantAuhtor);
    
    return (
        <div>
            {plantData ? (
                <pre>{plantAuhtor}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};


export default PlantInfo;