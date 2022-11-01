const requirements = (tags:String[], cards:String):Boolean => {
    return (
        cardsRequirements(cards)
    )
}

export default requirements

export const tagsRequirements = (tags:String):Boolean => {
    return containsAnyLetter(tags)
}

const cardsRequirements = (cards:String):Boolean => {
    return containsAnyLetter(cards)
}

function containsAnyLetter(str : any) :Boolean {
    return /[a-zA-Z]/.test(str);
  }
