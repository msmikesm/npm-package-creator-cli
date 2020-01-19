import * as dumb from '../index';

describe('Test dumbPrint', () => {
    test('Should return string = Foo-Bar', () => {
        expect(dumb.dumbPrint('Foo', 'Bar')).toStrictEqual('Foo-Bar');
    });
});
