

/*

https://www.youtube.com/watch?v=oPlEq7fewIg&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=9&ab_channel=WebProgrammingUNPAS

[9] Data Type in JS

Max = 64bit, 2^64

[9] Angka_________________________________________________
    - angka tanpa desimal: 10, 150, (akurat sampe 15 digit)
    - angka dengan desimal: 3.14, 0.5, 100.00 (pecahan ga terlalu akurat)
        - coba console.log(0.2 + 0.1);
    - eksponen: 123e5 = 12300000, 123e-5 = 0.00123
    - bilangan negatif
    - angka spesial: Infinity, -Infinity, NaN (Not a Number): console log 2/0; -2/0; 0/0; 100/"apel" = Nan; 100/"10"=10 
    Notes:
    - jgn pernah mengawali angka dengan 0, misal console.log(022) atau console.log(0xFF)

[10] Operator_______________________________________________
    - Binary Op (butuh 2 operand: operand1 operator operand2)
        - Aritmatika: +, -, *, /, % (modulo or sisa bagi)
            Operator Precedence Order: (), *, /, +, -
        - Penugasan (assignment): =; +=, -=, dst.
            A += B -> A = A + B
        - Perbandingan (comparison), output: boolean: true false
            ==  equals
            !=  not equals
            === strict equals
            !== strict not equals
            >, <, >=, <=
            Notes:
                10 == "10" will return true, meskipun beda tipe datanya, kecuali 10 === "10" pake strict buat bandingin tipe data juga
        - Logika
        - String
    - Ternary Op (butuh 3 operand)
        - Kondisional
    - Unary Op (butuh 1 operand)
        - Typeof

[11]





*/

var x;
var result;

x = 10;
x -= 5;

result = 5;

console.log(x); // 5
console.log(result == x); // true
console.log(10 === "10"); // false