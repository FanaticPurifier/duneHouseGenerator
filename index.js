const names = require('./templates/names.json')
const homeworld = require('./templates/homeworld.json')
const domain = require('./templates/domain.json')
const a = require('indefinite')

const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

const buildHouse = (names, domain, homeworld) => {
    let house = {
        "name": getRandomElement(names),
        "homeworldName": getRandomElement(homeworld.planetName),
        "homeworldType": getRandomElement(homeworld.terrain),
        "primaryDomain": getRandomElement(domain),
        // The following setters reduce the primaryDomain object down to single randomly chosen Areas of Expertise and Specialisation
        setAreaOfExpertise(){
            house.primaryDomain.areaOfExpertise = getRandomElement(house.primaryDomain.areaOfExpertise)
        },
        setSpecialisation(){
            house.primaryDomain.areaOfExpertise.specialisation = getRandomElement(house.primaryDomain.areaOfExpertise.specialisation)
        }
    }
    
    house.setAreaOfExpertise(house);
    house.setSpecialisation(house);
    const writeDescription = (house) => {
      console.log(`${house.name} from the planet ${house.homeworldName}`);
      console.log(`${house.homeworldName} is ` + a(`${house.homeworldType} planet`));
      console.log(`${house.name} is known across the galaxy for its ${house.primaryDomain.domainName}. They are experts in ${house.primaryDomain.domainName} ${house.primaryDomain.areaOfExpertise.expertiseName}.`);
      console.log(`For example, ${house.primaryDomain.areaOfExpertise.specialisation}.`);
    };
    
    writeDescription(house)
};

buildHouse(names, domain, homeworld);