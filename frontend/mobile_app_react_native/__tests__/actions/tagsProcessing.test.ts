import { expect } from 'chai';
import 'mocha';

import tagsProcessing from "../../actions/tagsProcessing/tagsProcessing"


describe('Testing tags processing', () => {
    describe ('String to tag', () => {
        it('Should be lower,  separate by ";" and trimmed', () =>
            expect(
                tagsProcessing("HOLA ; soy ;Yo  ")
            ).deep.equal(
                ["hola", "soy", "yo"]
            )
        )
    })
})