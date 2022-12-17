var student1 = {
    name : 'Ahmed',
    id : '22',
    fathername : 'Hussain',
    cnic : '421015043002'
}
var student2 = {
    name : 'Saad',
    id : '23',
    fathername : 'Hussain',
    cnic : '421015043452'
}
var student3 = {
    name : 'Mustafa',
    id : '24',
    fathername : 'Khan',
    cnic : '4210150423402'
}
var student4 = {
    name : 'Zain',
    id : '25',
    fathername : 'Hussain',
    cnic : '421015042434502'
}
var student5 = {
    name : 'Ahsan',
    id : '26',
    fathername : 'Hussain',
    cnic : '42101504123402'
}
var student6 = {
    name : 'Haseeb',
    id : '27',
    fathername : 'Shahid',
    cnic : '42101504326572'
}
var student7 = {
    name : 'Bilal',
    id : '28',
    fathername : 'Hussain',
    cnic : '4210150439992'
}
var student8 = {
    name : 'Uzair',
    id : '29',
    fathername : 'Saeed',
    cnic : '42101504356782'
}
var student9 = {
    name : 'Izhan',
    id : '30',
    fathername : 'Akram',
    cnic : '420155543022'
}
var student10 = {
    name : 'Murtaza',
    id : '31',
    fathername : 'Khan',
    cnic : '421017987943002'
}




function xyz() {
    var text = document.getElementById('text')
    var details = document.getElementById('details')
    var inpval = text.value;    
    // var RollNo = inpval;
    var a = [student1,student2,student3,student4,student5,student6,student7,student8,student9,student10]
    for (var i = 0 ; i < a.length ; i++){
        if(inpval == a[i].id){
        console.log(a[i])
        details.innerHTML = 'Name : ' + a[i].name + '<br/>' + 'Fathername : '+ a[i].fathername + '<br/>' + 'Roll No : ' +  a[i].id + '<br/>' + 'CNIC : ' + a[i].cnic
        }
        }
    
}