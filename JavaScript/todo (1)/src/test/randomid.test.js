import {generateUniqueId} from "../js/utils/helper";



describe('some functions', () => {
    it("generate unic id, needs a string", ()=> {
        expect(typeof generateUniqueId()).toBe("string");
    } );

});