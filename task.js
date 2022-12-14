function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
     this.subjectName = subjectName;
}

Student.prototype.addMark = function(marks) {
  if(this.marks === undefined){ 
    this.marks = [marks];
    } else {
      this.marks.push(marks);
    }
}

Student.prototype.addMarks = function(...marks) {
  if(this.marks === undefined){ 
    this.marks = [...marks];
    } else {
      this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function() {
    let sum = 0;
      for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
      }
    return sum / marks.length;
  }

  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.reason = reason;
}


// ваш код для остальных методов