
const harvest = []

export const harvestPlants = (plants) => {

   for (const plant of plants) {
      if (plant.type !== "Corn") {
         for (let i = 0; i < plant.output; i++) {
            harvest.push({ ...plant });
         }
      }
      else if (plant.type === "Corn") {
         for (let i = 0; i < plant.output / 2; i++) {
            harvest.push({ ...plant });
         }

      }
   }
   return harvest
}