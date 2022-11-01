const stringToHash = (word : String): number => {
    const number = word.split('')
                       .map( e => e.charCodeAt(0))
                       .reduce(
                        (previous, current) => previous *100 + current,
                        0
                       );
    return number;
                    
}
export default stringToHash