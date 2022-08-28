const requirements = (tags, cards) => {
    return (
        tagsRequirements(tags)
        &&
        cardsRequirements(cards)
    )
}

export default requirements

const tagsRequirements = (tags) => {
    return containsAnyLetter(tags)
}

const cardsRequirements = (cards) => {
    return containsAnyLetter(cards)
}

function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }
