// input
const userDetails = [
    {
        name: "Mr Rashid",
        birthYear: 1999,
        currentYear: 2022,
        district: "Dhaka",
        prostNo: 1200,
        priority: 2
    },
    {
        name: "Mr Raju",
        birthYear: 1995,
        currentYear: 2022,
        district: "Rajshahi",
        prostNo: 1211,
        priority: 1
    }
]

// expected output 
/**
 * 
 * [
 *      {
 *          cardNumber: 'RA22121995000002',
 *          gift: 'R',
 *          priority: 1
 *      },
 *      {
 *          cardNumber: 'DH22121999000001',
 *          gift: 'W',
 *          priority: 2
 *      }
 * ]
 */

const cardDistribution = arrayObj => {
    const generatedCards = [];
    arrayObj.forEach((value, index) => {
        const cardFirstPart = processCity(value.district) + processYear(value.currentYear) + processPostal(value.prostNo) + value.birthYear;
        const requiredPadding = 16 - cardFirstPart.length;
        const cardNumber = cardFirstPart + generateSerial(index + 1, requiredPadding);
        generatedCards.push({ cardNumber, gift: parseInt(cardNumber.toString().substr(-1)) % 2 === 0 ? 'R' : 'W', priority: value.priority })
    })
    const sortedCards = generatedCards.sort((firstItem, secondItem) => firstItem.priority - secondItem.priority);
    return sortedCards;
}

const processCity = city => city.replace(" ", "").slice(0, 2).toUpperCase();
const processYear = year => year.toString().substr(-2);
const processPostal = postal => postal.toString().substr(0, 2);
const generateSerial = (index, padding) => index.toString().padStart(padding, '0');


console.log(cardDistribution(userDetails));