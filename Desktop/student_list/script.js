class Student {
	constructor(name) {
		this.name = name;
		this.subject = [];
	}

	addSubject(subjectName, score) {
		const subject = { name: subjectName,
						score: score }
		this.subjects.push(subject);
	}
}

const studentNameInput = document.getElementById('student-name')
const addStudentButton = document.getElementById('add-student')
const studentList = document.getElementById('student-list')
const listSubject = document.createElement('section')

let students = []

addStudentButton.addEventListener('click', () => {
	const studentName = studentNameInput.value;
	const student = new Student(studentName);
	students.push(student); 
	displayStudentName();
})

function displayStudentName() {
	studentList.innerHTML = ''
	students.forEach((student, index) => {
		const listName = document.createElement('section')
		listName.innerHTML = 
			`<p>${student.name}</p>
			<button id="add-subject-${index}">Add Subject</button>`
		studentList.append(listName)

		const addSubjectButton = document.getElementById(`add-subject-${index}`);
		const subjectsSection = document.getElementById(`subjects-${index}`);

		addSubjectButton.addEventListener('click', () => {
			let subjectName = prompt('Enter subject name: ')
			let subjectScore = prompt('Enter score: ')

			student.addSubject(subjectName, subjectScore)
		})
	})
};


