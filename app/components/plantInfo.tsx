"use client";

import { useEffect, useState } from "react";


const PlantInfo = (plantData: any) => {
    
    return (
        <div>
            {plantData ? (
                <pre>{JSON.stringify(plantData, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};


export default PlantInfo;