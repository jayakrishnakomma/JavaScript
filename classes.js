class Student
{
    test(name,id)
    {
        this.name = name;
        this.id = id;
    }
}

let std = new Student()

std.test('XYZ',123);

console.log(std.name);
console.log(std.id);