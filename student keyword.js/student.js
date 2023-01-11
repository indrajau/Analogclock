//student class
class Student {
    static count = 0;
    //constructor of Student class
    constructor(name, age, ph_no, marks) {
      this.name = name;
      this.age = age;
      this.ph_no = ph_no;
      this.marks = marks;
      Student.count++;
    }
    isEligible() {
      if (this.marks > 40) {
        console.log(this.name + " is Eligible for College");
      } else {
        console.log(this.name + " is Not Eligible for College");
      }
    }
    //counting the student objects
    static Count() {
      console.log("No. of Students : " + Student.count);
    }
  }
  const stu = new Student("Vamsi", 17, 7991843244, 64);
  const stu1 = new Student("Naveen", 17, 7675045470, 58);
  const stu2 = new Student("Sirisha", 17, 9881573211, 33);
  const stu3 = new Student("Sharvani", 17, 9988776655, 52);
  const stu4 = new Student("Vinod", 17, 8093680347, 26);
  stu.isEligible();
  stu1.isEligible();
  stu2.isEligible();
  stu3.isEligible();
  stu4.isEligible();
  Student.count();