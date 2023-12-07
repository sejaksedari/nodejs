

/*

https://www.youtube.com/watch?v=oPlEq7fewIg&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=9&ab_channel=WebProgrammingUNPAS

Max = 64bit, 2^64


<< SHORT NOTES >>

[9] Data Type: Angka __________________________________________
    - angka tanpa desimal: 10, 150, (akurat sampe 15 digit)
    - angka dengan desimal: 3.14, 0.5, 100.00 (pecahan ga terlalu akurat)
        - coba console.log(0.2 + 0.1);
    - eksponen: 123e5 = 12300000, 123e-5 = 0.00123
    - bilangan negatif
    - angka spesial: Infinity, -Infinity, NaN (Not a Number): console log 2/0; -2/0; 0/0; 100/"apel" = Nan; 100/"10"=10 
    Notes:
    - jgn pernah mengawali angka dengan 0, misal console.log(022) atau console.log(0xFF)

[10, 11] Operator ______________________________________________
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
            && and
            || or
            ! not
        - String
            op + auto identifikasi operandnya string or numb
            10 + "10" = "1010"
            10 + 10 + "10" = "2010"
            "10" + 10 + 10 = "101010"
            Intinya, + otomatis ngidentifikasi kalo ada string di operand, lgsg convert jadi string. makanya di contoh ke-2 itu angka + angka jadi 20 dulu baru 2010 karna + ga identifikasi sbg string di operasi pertama
    - Ternary Op (butuh 3 operand)
        - Kondisional
            (kondisi) ? benar : salah
            (x % 2 == 0) ? "genap" : "ganjil"
    - Unary Op (butuh 1 operand)
        - Typeof
            typeof(10); // number
            typeof("10"); // string
            typeof(true); // boolean

[12] Data Type: String _________________________________________
    - Escape Character: \" \'
        misal ada kasus harus nulis string: ""Gerakan Pungut Sampah" dilaksanakan pada hari Jum'at" -> harus ditulis:
            ' "Gerakan Pungut Sampah" dilaksanakan pada hari Jum\'at ' atau
            " \"Gerakan Pungut Sampah\" dilaksanakan pada hari Jum'at "
        Full List Escape Character:
            \0      Null
            \'      '
            \"      "
            \\      \
            \n      new line or baris baru
            \t      tab
            \b      backspace
            \uXXXX  unicode
    - Concatenation: +
    - String Comparation: 
        "Fuad" == "fuad" // return false
    - .length: ngitung panjang string
        "Fuad Azaim".length // return 10 (space included)

[13] Data Type: Boolean ________________________________________
    - function: conditioning statement, menentukan aksi berbeda dan mengatur alur kendali program
    - Syntax: Booelan(value)
    - Truthy and Falsy Values: https://mdilahihossainshiblup.medium.com/1-truthy-and-falsy-values-5af7b6d31ef 
        - Boolean(10 < 20); // true
        - Boolean(10); // true
        - Boolean("Fuad") // true
        - Boolean(0) // false
        - Boolean(-1) // true
    - 
    
[14] Data Type: Variable _______________________________________
    - def: gelas, wadah penyimpanan nilai
    - declaration, initiation, assignment
        - var x; // declaration & initiation
        - x = 20; // assignment
    - variable declaration
        - var
        - let
        - const
    - syntax: var <variable name>
        - var <keyword&reservedWord> // gaboleh pake keyword n reserved word
        - var 1gaboleh; // gaboleh
        - var boleh1;
        - var ini_juga_boleh;
        - var iniBolehBanget; // this is camelCase
    - Shorthand
        - var   x = 1, y = 2, z = 3;
    - Variable Scope
        - we'll get back soon asap after we're learning function and object

        
[15] Writing a JS _____________________________________________
    - Embedding external JS on an HTML
        - <script src="script.js"></script>
        - <script src="nama_folder/script.js"></script> // inside
        - <script src="../script.js"></script> // outside

[16] PopUp Box in JS ___________________________________________
    - Type
        alert: alert('Wasssupppp Mamenn!');
        prompt: var nama = prompt('Masukkan nama:');
        confirm

[17] Control Flow ______________________________________________
    - Normal Flow
        statement dieksekusi dari atas ke bawah, kiri ke kanan
    - 



[X]
*/



// Example [10, 11] Operator _________________________

    // Operator Aritmatika, Penugasan, Perbandingan
    /*
        var x;
        var result;

        x = 10;
        x -= 5;

        result = 5;

        console.log(x); // 5
        console.log(result == x); // true
        console.log(10 === "10"); // false
    */

    // Operator Logic
    /*
        var x;
        x = 8;

        // Cek x bilangan genap dan kurang dari 10
        // x % 2 == 0 // cek x bilangan genap, x habis dibagi 2
        // x < 10 // cek x kurang dari 10
        if ((x % 2 == 0) && (x < 10)) {
            console.log("x genap yang kurang dari 10");
        } else {
            console.log("x bukan genap yang kurang dari 10");
        }
    */

    // inversion
        // console.log(!(x < 10)); // aslinya true, diinverse ! jadi false
    
    // Operator String
    /*
        a = "apple";
        b = "pen";
        c = a + " " + b;

        console.log(c);
    */

// Example [16] PopUp Box  _________________________
    /*
        var nama = prompt('Masukkan nama:'); // return any value
        alert('Hai ' + nama + '! Semoga harimu menyenangkan');
        
        var tes = confirm('Kamu yakin?'); // return boolean
        if (tes === true) {
            alert('ternyata kamu yakin banget'); // return tes, true false from boolean
        } else {
            alert('kenapa sih kamu ga yakin?');
        }
    */
    
    /*  
        alert('Selamat Datang..');
        var lagi = true;

        // while (lagi === true) {}; // pake truthy value, tulis (lagi) aja ga perlu di strict equals
        while (lagi) {
            var nama = prompt('masukkan nama:');
            alert('halo' + nama);

            lagi = confirm('coba lagi?');
        }

        alert('Terima Kasih..');
    */




// Example [X] Title  _________________________

