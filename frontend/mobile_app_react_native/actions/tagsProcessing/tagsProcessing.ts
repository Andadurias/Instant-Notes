/**
 * TAG PROCESSING UTIL
 */
const tagsProcessing = ( tagsInput : String, separator = ';') : String[]  => {
    const lowered = tagsInput.toLowerCase()
    const splitted = lowered.split(separator)
    const trimmed = splitted.map(tag => tag.trim()) 
    const admitedExpression = /[A-Za-z0-9]+/
    const filtered = trimmed.filter( e => admitedExpression.test(e))
    return filtered
}
export default tagsProcessing; 

export const tagsProcessingListToList = (tagsInput : String[]) :String[] => {
    const lowered = tagsInput.map( t => t.toLowerCase())
    const trimmed = lowered.map(t =>  t.trim())
    
    return trimmed;
}

export const testToAddTagToList = (tag : String, list : String[]) :Boolean=> {
    const notVoid = (tag != ' ')
    const notIn = ! list.includes(tag)

    return notVoid && notIn
} 

