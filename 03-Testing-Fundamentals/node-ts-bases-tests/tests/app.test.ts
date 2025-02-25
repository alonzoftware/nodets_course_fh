import { describe, expect, it, test } from '@jest/globals'


describe('App', () => {
    // test('Should Be True', () => {
    //     expect(true).toBe(true);
    // });

    test("Sum num1 + num2 should be 65", () => {
        // 1. Arrange :
        const num1 = 30;
        const num2 = 35;

        // 2. Act :
        const result = num1 + num2;

        // 3. Assert :
        expect(result).toBe(65);
    });

});