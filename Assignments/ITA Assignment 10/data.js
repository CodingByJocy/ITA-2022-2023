
let student1 = new Student('Ryan Taylor', '456 Oak Street', '(555) 555-1234', 'Physics')
let student2 = new Student('Samantha Davis', '789 Maple Avenue', '(555) 555-5678', 'History')
let student3 = new Student('Ethan Jackson', '123 Pine Street', '(555) 555-9012', 'Mathematics')

function Student(name, address, phone, course) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.course = course;

this.getInfo = function () { 
    return 'name:' + this.name + '\n'+
    'address:' + this.address + '\n' +
    'phone:' + this.phone + '\n' +
    'course:' + this.course + '\n'

}}

 let student1Info = student1.getInfo()
 let student2Info = student2.getInfo()
 let student3Info = student3.getInfo()

 console.log(student1Info)
