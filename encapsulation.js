class Student 
{
    setStudentdetails(name,id)
    {
        this.name = name;
        this.id = id;
    }
    
    getStdName()
    {
        return this.name;
    }

    getId()
    {
        return this.id;
    }
}

let std = new Student();
std.setStudentdetails('John',987);

console.log(std.getStdName());
console.log(std.getId());