 const allPlants = []

export const addPlant =(seed) =>{

if(Array.isArray(seed) === true){
    for(const oneSeed of seed){
        allPlants.push(oneSeed)
    }

}
else{
 allPlants.push(seed)
}

}

export const usePlants = () => {

return allPlants.map(allPlant =>({...allPlant}))

}