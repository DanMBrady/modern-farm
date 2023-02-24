
let htmlString = ""

export const catalog = (foods) => {
    for(const food of foods){
        htmlString += `<section class ="plant">${food.type}</section>`
    }

    return htmlString
}