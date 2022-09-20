import { expect } from 'chai';
import 'mocha';

import tagsProcessing, { tagsProcessingListToList } from "../../actions/tagsProcessing/tagsProcessing"


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
    describe('List of tags to list of tags', () => {
        it('Should be lower and trimmed', () =>
            expect(
                tagsProcessingListToList(["hOla ", " Y O "])
            ).deep.equal(["hola","y o"])
        )
    })
})