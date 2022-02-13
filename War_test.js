var expect = chai.expect;

describe('TestFuntion', function() {
    describe('#compareSortNumber', function() {
        it('should compare the objects sortNumber and return 1 if a is greater than b', function () {
            let a = {
                sortNumber: 0.3457534564
            }
            let b = {
                sortNumber: 0.2456886154
            }
            var x = compareSortNumber(a, b);
            expect(x).to.equal(1);
        });
        it('should compare the objects sort number and return -1 if b is greater than a', function() {
            let a = {
                sortNumber: 0.3457534564
            }
            let b = {
                sortNumber: 0.7565443518
            }
            var x = compareSortNumber(a, b);
            expect(x).to.equal(-1);
        });
        it('should compare the objects sort number and return 0 if a is equal to b', function() {
            let a = {
                sortNumber: 0.3457534564
            }
            let b = {
                sortNumber: 0.3457534564
            }
            var x = compareSortNumber(a,b);
            expect(x).to.equal(0);
        });
    });
});