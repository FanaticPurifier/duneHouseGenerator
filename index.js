const names = require('./templates/names.json')
const homeworld = require('./templates/homeworld.json')
const domain = require('./templates/domain.json')

const buildHouse = (names, domain, homeworld) => {
    let house = {
        "name": names[Math.floor(Math.random() * names.length)],
        "homeworldName": homeworld.planetName[Math.floor(Math.random() * homeworld.planetName.length)],
        "homeworldType": homeworld.terrain[Math.floor(Math.random() * homeworld.terrain.length)],
        "primaryDomain": domain[Math.floor(Math.random() * domain.length)],
        setAreaOfExpertise(){
            house.primaryDomain.areaOfExpertise = house.primaryDomain.areaOfExpertise[Math.floor(Math.random() * house.primaryDomain.areaOfExpertise.length)]
        },
        setSpecialisation(){
            house.primaryDomain.areaOfExpertise.specialisation = house.primaryDomain.areaOfExpertise.specialisation[Math.floor(Math.random() * house.primaryDomain.areaOfExpertise.specialisation.length)]
        }
        //"areaOfExpertise": domain.findIndex((current) => current.domainName == this.primaryDomain)
    }
    // house.homeworld.planetName = homeworld.planetName[Math.floor(Math.random() * homeworld.planetName.length)]
    
    house.setAreaOfExpertise(house)
    house.setSpecialisation(house)
    console.log(`${house.name} from the planet ${house.homeworldName}`)
    console.log(`${house.homeworldName} is a ${house.homeworldType} planet`)
    console.log(`${house.name} is known across the galaxy for it's ${house.primaryDomain.domainName}. They are experts in ${house.primaryDomain.domainName} ${house.primaryDomain.areaOfExpertise.expertiseName}.`)
    console.log(`For example, ${house.primaryDomain.areaOfExpertise.specialisation}`)
};

buildHouse(names, domain, homeworld);