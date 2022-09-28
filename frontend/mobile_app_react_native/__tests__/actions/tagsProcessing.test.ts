import { expect } from 'chai';
import 'mocha';

import tagsProcessing, { tagsProcessingListToList, testToAddTagToList } from "../../actions/tagsProcessing/tagsProcessing"


describe('Testing tags processing', () => {
    describe ('String to tag', () => {
        it('Should be lower,  separate by ";" and trimmed', () =>
            expect(
                tagsProcessing("HOLA ; soy ;Yo  ")
            ).deep.equal(
                ["hola", "soy", "yo"]
            )
        )
        it('Should not be empty', () =>
            expect(
                tagsProcessing("Aa;   ;11 ;")
            ).deep.equal(
                ["aa","11"]
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
    describe('Some requirement to add a tag to a list' , () => {
        it('Should not be empty', () =>
            expect(
                testToAddTagToList(' ', ["hello"])
            ).equal(false)
        );
        it('Should add a word', () =>
            expect(
                testToAddTagToList('tomate', ["hello"])
            ).equal(true)
        )
        it('Should not repeat ', () =>
            expect(
                testToAddTagToList('hello', ["hello"])
            ).equal(false)
        )
    })
})