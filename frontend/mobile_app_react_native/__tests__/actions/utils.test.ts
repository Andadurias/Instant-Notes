import { expect } from 'chai';
import 'mocha';

import stringToHash from "../../actions/utils/stringToHash"


describe('Testing some utils', () => {
    describe ('String to tag', () => {
        it('Should be a number', () =>
            expect(
                typeof(stringToHash("hola"))
            ).equals(
                "number"
            )
        )
        it('Should be different', () =>
            expect(
               stringToHash("hola") == stringToHash("hila") 
            ).equals(
                false
            )
        )
    })

})