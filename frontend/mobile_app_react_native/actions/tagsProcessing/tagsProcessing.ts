/**
 * TAG PROCESSING UTIL
 */


const tagsProcessing = ( tagsInput : String, separator = ';') : String[]  => {
    const lowered = tagsInput.toLowerCase()
    const splitted = lowered.split(separator)
    const trimmed = splitted.map(tag => tag.trim()) 

    return trimmed
}

export default tagsProcessing; 