const getNotesDistribution = (students) => students.reduce((notes, student) => {
    student.notes.forEach(note => notes[note] = (notes[note] || 0) + 1)
    return notes
}, {})

console.log(getNotesDistribution([
    {
        "name": "Steve",
        "notes": [5, 5, 3, -1, 6]
    },
    {
        "name": "John",
        "notes": [3, 2, 5, 0, -3]
    }
]))