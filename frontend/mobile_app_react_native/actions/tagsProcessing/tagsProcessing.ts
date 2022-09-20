/**
 * TAG PROCESSING UTIL
 */
const tagsProcessing = ( tagsInput : String, separator = ';') : String[]  => {
    const lowered = tagsInput.toLowerCase()
    const splitted = lowered.split(separator)
    const trimmed = splitted.map(tag => tag.trim()) 

    return trimmed
}

export const tagsProcessingListToList = (tagsInput : String[]) :String[] => {
    const lowered = tagsInput.map( t => t.toLowerCase())
    const trimmed = lowered.map(t =>  t.trim())
    
    return trimmed;
}

export default tagsProcessing; 