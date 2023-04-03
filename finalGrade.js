// Write your function here:

function finalGrade(one, two, three) {
    const grades = [one, two, three];
    const invalid = grades.some(grade => (grade < 0 || grade > 100));
    if (invalid) return 'You have entered an invalid grade.';

    const avg = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
    switch (true) {
        case avg < 60:
            return 'F';
        case avg < 70:
            return 'D';
        case avg < 80:
            return 'C';
        case avg < 90:
            return 'B';
        default:
            return 'A';
    }
}


// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(2, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!