var gradeBook = {
    size: 4,
    count: 0,
    total: 0,

    _grades: [],

    addGrade: function (newGrade) {
        this._grades.push(newGrade);
        this.total += newGrade;
    },

    getGradeNumber: function () {
        return this._grades.length;
    },

    getAverage: function () {
        return this.total / this._grades.length;
    },

    clearAllGrades: function () {
        this.total = 0;
        this._grades.length = 0;
    }

}

exports.book1 = gradeBook;