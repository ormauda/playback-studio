import {logArgs} from '../log-args';

class SampleClass {
    @logArgs
    addOne(num: number): number {
        return num + 1;
    }
}

describe('logArgs decorator on a class method', () => {
    beforeEach(() => {
        console.log = jest.fn();
    });

    it('should log the method arguments', () => {
        const sample = new SampleClass();

        sample.addOne(0);

        expect(console.log).toHaveBeenCalledWith("Function arguments: 0");
    });

    it(`should not change the original method's return value`, () => {
        const sample = new SampleClass();

        const result = sample.addOne(0);

        expect(result).toEqual(1);
    })
});