var assert = require('assert');
var book = require('../lib/grade.js').book1;


describe('Basic Mocha test', function () {
    it('show throw error', function () {
        assert.equal(book.size, 4);
        assert.equal(book.getGradeNumber(), 0);
        book.addGrade(1);
        assert.equal(book.getGradeNumber(), 1);
        book.clearAllGrades();
        assert.equal(book.getGradeNumber(), 0);
    })

    it('Test average work', function () {
        book.clearAllGrades();
        assert.equal(book.getGradeNumber(), 0);
        book.addGrade(10);
        assert.equal(book.getAverage(), 10);
        book.addGrade(50);
        assert.equal(book.getAverage(), 30);
    })

});