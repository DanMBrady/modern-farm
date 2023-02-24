import { createPlan } from './plan.js'
import { createCorn } from './seeds/corn.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

const yearlyPlan = createPlan()
const cornSeed = createCorn()
const asparagusSeed = createAsparagus()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()




const allSeeds = plantSeeds(yearlyPlan)
console.log(allSeeds)
const fullHarvest = harvestPlants(allSeeds)

console.log(fullHarvest)
const fullCatalog = catalog(fullHarvest)
document.body.innerHTML = catalog(fullHarvest)


