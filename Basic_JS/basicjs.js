

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
    - Normal Flow (up to bottom)
    - Loop Flow
        for
        while
        do while
    - Conditional Flow
        if
        if.. else
        if.. else if.. else
        switch   


[18] Loop: While ________________________________________________
    - while (kondisi) {aksi}; // selama kondisi () true, lakukan aksi dalam blok {}
    - Stopping Strategy
        - based on user action
            var ulang = true;
            while(ulang) {
                console.log('hello world');
                ulang = confirm('lagi?);
            }
        - based on stopping criteria
            nilai awal
            while(kondisi terminasi) {
                aksi
                increment/decrement
            }
        - 

[20] Loop: For  ________________________________________
    - Versi lebih ringkas dari while
    - Syntax:
        for ( var nilaiAwal = 1 ; nilaiAwal <= 10 ; nilaiAwal++) {
            console.log('Hello World');
        }

[21] IF ELSE ____________________________________________
    - Syntax:
        if(kondisi) {
            aksi 1
        } else {
            aksi 2
        }
        ...
    

[22] ELSE IF ____________________________________________
    - pake condition di dalam loop: for
    - ada lebih dari 2 kondisi
    - Syntax:
        if(kondisi 1) {
            aksi 1
        } else if(kondisi2) {
            aksi 2
        } else if(kondisi3) {
            aksi 3
        } else {
            aksi 4
        }

[23] Conditioning Exercise ______________________________
    - seru ini, akhirnya w pake array function

[24] SWITCH _____________________________________________
    - mirip if else 
    - syntax:
        switch (ekspresi) {
            case "nilai 1":
                aksi 1
            [break;]
            case "nilai 2":
                aksi 2
            [break;]
            case "nilai n":
                aksi n
            [break;]
            default:
                aksi default
            [break;]    
        }
    - 


[X]
*/

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


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

// Example [18] While  _________________________
    /*
        // Stopped by User
        var ulang = true;
        while (ulang) {
            console.log('Hello World');
            ulang = confirm('Lagi?);
        }

        // Stopped by Code
        var nilaiAwal = 1;
        while(nilaiAwal <= 3) {
            console.log('Hello World');
            nilaiAwal++; //nilaiAwal = nilaiAwal + 1;
        }

        // Modified
        var nilaiAwal = 1;
        while(nilaiAwal <= 10) {
            console.log('Hello World ' + nilaiAwal + 'x');
            nilaiAwal++; //nilaiAwal = nilaiAwal + 1;
        }
    */

// Example [20] For _________________________
    
    // Task: Angkot 2, 1-6 Baik, 7-10 rusak
    // Cara Fuad
        // var noAngkot = 1;
        // var jmlAngkot = 10;
        // var jmlRusak = 4;

        // for ( noAngkot ; noAngkot <= jmlAngkot ; noAngkot++) {
        //     if (noAngkot <= (jmlAngkot - jmlRusak)) {
        //         console.log('Angkot nomor ' + noAngkot + ' siap digunakan!');
        //     } else {
        //         console.log('Angkot nomor ' + noAngkot + ' rusak!');
        //     }
        // }
    
    //Cara Lain: pake while buat blok ga rusak, for buat blok rusak
        // var jmlAngkot = 10;
        // var angkotBeroperasi = 4;
        // var noAngkot = 1;

        // while (noAngkot <= angkotBeroperasi) {
        //     console.log('Angkot nomor ' + noAngkot + ' siap digunakan!');

        // noAngkot++;
        // }

        // for (noAngkot = (angkotBeroperasi + 1); noAngkot <= jmlAngkot; noAngkot++) {
        //     console.log('Angkot nomor ' + noAngkot + ' rusak!');
        // }
    
// Example [22] ELSE IF _________________________

    // Number Prompt
        // var angka = prompt('masukkan angka: ');

        // if(angka % 2 == 0) {
        //     alert(angka + ' is GENAP');
        // } else if(angka % 2 == 1) {
        //     alert(angka + ' is GANJIL');
        // } else {
        //     alert('your input is not a number!');
        // }

    // Angkot 1-6 baik, 8 lembur, sisanya ga beroperasi, max 10 angkot {NESTED CARA FUAD}
        // var jmlAngkot = 10;
        // var angkotBeroperasi = 4;
        // var noAngkot = 1;
        // var angkotLembur = 8;

        // for (noAngkot ; noAngkot <= jmlAngkot; noAngkot++) {
        //     if (noAngkot <= 6) {
        //         console.log('Angkot nomor ' + noAngkot + ' beroperasi!');
        //     } else {
        //         if (noAngkot === 8) {
        //             console.log('Angkot nomor ' + noAngkot + ' Lembur!');
        //         } else {
        //             console.log('Angkot nomor ' + noAngkot + ' tidak beroperasi!');
        //         }
        //     }
        // }

// Example [22] ELSE IF _________________________
    // Angkot 1-6 baik, 5, 8, 10 lembur, sisanya ga beroperasi, max 10 angkot {CARA LAIN pake ARRAY}
        var jmlAngkot = 10;
        var angkotBeroperasi = 6;
        var noAngkot = 1;
        var angkotLembur = [5, 8, 10]; //tinggal tulis yg lembur di array ini

        for (noAngkot ; noAngkot <= jmlAngkot; noAngkot++) {
            if (noAngkot <= angkotBeroperasi) {
                if(angkotLembur.includes(noAngkot, 0)) {
                    console.log('Angkot nomor ' + noAngkot + ' Lembur!');
                } else {
                    console.log('Angkot nomor ' + noAngkot + ' beroperasi!');
                }
            } else {
                if(angkotLembur.includes(noAngkot, 0)) {
                    console.log('Angkot nomor ' + noAngkot + ' Lembur!');
                } else {
                    console.log('Angkot nomor ' + noAngkot + ' tidak beroperasi!');
                }
            }
        }

// Example [X] Title  _________________________

