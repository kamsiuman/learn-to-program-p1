var gradeBook = {
    size: 4,
    count: 0,

    _grade: [],

    addGrade: function (newGrade) {
        this._grade.push(newGrade);
    },

    getGradeNumber: function () {
        return this._grade.length;
    }

}

exports.book1 = gradeBook;