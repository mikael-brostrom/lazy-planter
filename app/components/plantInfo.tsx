"use client";

import { useEffect, useState } from "react";


const PlantInfo = (plantData: any) => {
    const plantAuhtor = plantData.plantData.data.author
    const familyName = plantData.plantData.data.family_common_name
    const observations = plantData.plantData.data.observations
    console.log(plantAuhtor);
    
    return (
        <div>
            {plantData ? (
                <pre>{plantAuhtor}---
                {familyName}---{observations}
                </pre>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};


export default PlantInfo;