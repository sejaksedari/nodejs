

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
    - perhatikan tipe data kalo pake prompt!!

[25] NESTING 
    - Seru challengenya broh, cek example

[26] GAME SUIT

[27-33] FUNCTION
    - "Function is a key that makes a JS so powerful," Douglas Crockford 
    - function =
        - sub-program yg dapat dipanggil pada bagian lain pada program,
        - merupakan struktur dasar pembentuk javascript,
        - termasuk ke dalam first-class object
    - Why function?
        - reusability: DRY = do not repeat yourself
        - decomposition / abstraction 
        - modularity
    - Category
        - built-in fx (BIF)
            - eg. alert(), confirm(), prompt(), slic(), split()
            - BIF: String - https://www.w3schools.com/jsref/jsref_obj_string.asp
            - BIF: Numbers - https://www.w3schools.com/jsref/jsref_obj_number.asp
            - BIF: Math - https://www.w3schools.com/jsref/jsref_obj_math.asp
        - user-defined fx (UDF)
            - function (argument) { body }
                - argument: simpen dalam (), boleh ada or enggak, jika ada boleh > 1, pisah oleh koma
            - How to make it?
                - function declaration
                - function expression
    - Good function = only do 1 specific task
        - padi > gabah > beras > nasi > nasi goreng
        - nasi gorengnya keras nih, oh ni pasti f(beras) = nasi penyebabnya. Jadi lebih mudah buat troubleshoot kalo modular functionnya
    - Return?
        - buat ngabarin nih kelar function yg gw bikin
        - if a, return a, else, return b, bisa ada lebih dari 1 return nanti
    - Parameter & Argument
        - Parameter = variable tampung dalam kurung yg ditulis saat function dibuat
        - Argument = nilai yg dikirim ke parameter pas fungsi dipanggil
            - bahkan bisa masukin function ke dalem argument
        - Rules: jumlah yg dimasukin
            param < argu, kelebihan argu diabaikan (masuk ke arguments [array])
            param > argu, kelebihan param diisi undefined
        - !!!! arguments = array berisi nilai yg dikirim pas fungsi dipanggil 
            - termasuk pseudovariable
            - array itu variable yg sedikit lebih sakti, krn bisa nampung > 1 nilai
    - Refactoring
        - merubah kode agar jadi lebih 'baik' tanpa ngubah functionality
        - why? increase readability, DRY, testability, performance, maintainability
    - Variable Scope
        - gimana suatu variable dapat diakses dalam program
        - block scope vs function scope
            - block scope {  }
                - in C, variable yg dideclare di dalam { } hanya berlaku di dalam { }
                - in JS, ga masalah ini masih bisa keprint krn JS nganut function scope
            - function scope
                - kalo manggil variable global dr dalem function bisa 
                - kalo manggil variable local dr luar (global space) ga bisa
                - analogi kaca film gelap, org luar ga bisa liat dalem mobil, tp dari dalem mobil bisa liat luar
        - ada name conflict, misal var a = 1 ada di luar dan a = 2 di dalam function
            - pas a dicall dr dalem fx, yg keluar 2, kecuali bilang window.a bakal keluar 1;
            - pas a dicall dr luar, yg keluar 1
        - menit 9:21 agak memusingkan, coba ulangi kalo bingung!
            - kalo emang pengen bikin var local, jangan lupa nulis keyword var <sesuatu>, kalo ga gitu, JS bakal auto ngebuat <sesuatu> tadi jadi var global
            - ini bakal mengotori lingkup variable global codinganmu!
            - kecuali pake "use strict" yg melarang JS bikin global variable;
        - cek endingnya buat ngelatih variable yg diinput sebagai argum ke suatu param
            - ini kadang bikin bingung buat beginner programmer 
    
    
    
    - Recursive



[X]
*/
//TEORI



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
        // var jmlAngkot = 10;
        // var angkotBeroperasi = 6;
        // var noAngkot = 1;
        // var angkotLembur = [5, 8, 10]; //tinggal tulis yg lembur di array ini

        // for (noAngkot ; noAngkot <= jmlAngkot; noAngkot++) {
        //     if (noAngkot <= angkotBeroperasi) {
        //         if(angkotLembur.includes(noAngkot, 0)) {
        //             console.log('Angkot nomor ' + noAngkot + ' Lembur!');
        //         } else {
        //             console.log('Angkot nomor ' + noAngkot + ' beroperasi!');
        //         }
        //     } else {
        //         if(angkotLembur.includes(noAngkot, 0)) {
        //             console.log('Angkot nomor ' + noAngkot + ' Lembur!');
        //         } else {
        //             console.log('Angkot nomor ' + noAngkot + ' tidak beroperasi!');
        //         }
        //     }
        // }

// Example [24] SWITCH _____________________________
        
        // console.log('masukkan nama makanan or minuman: nasi, daging, susu, hamburger, softdrink');
        
        // var item = 'hamburger'
        // console.log('\n' + item);

        // switch(item) {
        //     case 'nasi':
        //     case 'daging':
        //     case 'susu':
        //         console.log('Ini SHEAT');
        //         break;
        //     case 'hamburger':
        //     case 'softdrink':
        //         console.log('Ini TAK SEHAT');
        //         break;
        //     default:
        //         console.log('anda memasukkan sesuatu di luar list')
        //         break;
        // }

// Example [25] NESTING ____________________________________

// VAR 1 NORMAL UPWARD TRIANGLE siku kiri multiplied 2 times

    // *
    // **
    // ***
    // ****
    // *****

    // *
    // **
    // ***
    // ****
    // *****

    // var s = '';
    // for (i = 0; i < 2; i++) {
    //     for (j = 0; j < 5; j++) {
    //         for (k = 0; k <= j; k++) {
    //             s += '*';
    //         }
    //         s += '\n';
    //     }
    //     s += '\n';
    // }
    // console.log(s);


// VAR 2 PelengkapVar1

    // **********
    // _*********
    // __********
    // ___*******
    // ____******
    // _____*****
    // ______****
    // _______***
    // ________**
    // _________*
    // __________

    // var s = '';

    // for (j = 0; j <= 10; j++) {
    //     for (k = 0; k < j; k++) {
    //         s += '_';
    //     }
    //     for (l = 0 ; l < 10 - j; l++) {
    //         s += '*';
    //     }
    //     s += '\n';
    // }
    // s += '\n';

    // console.log(s);

// VAR 3 DOWNWARD TRIANGLE siku kiri
    
    // *****
    // ****
    // ***
    // **
    // *

    // var s = '';
    // for (j = 5; j > 0; j--) {
    //     for (k = 0; k < j; k++) {
    //         s += '*';
    //     }
    //     s += '\n';
    // }
    // s += '\n';
    // console.log(s);

// VAR 4 PelengkapVar2
    
    // __________
    // _________*
    // ________**
    // _______***
    // ______****
    // _____*****
    // ____******
    // ___*******
    // __********
    // _*********
    // **********

    // var s = '';
    // for (j = 10; j >= 0; j--) {
    //     for (k = 0; k < j; k++) {   
    //         s += '_';
    //     }
    //     for (l = 0 ; l < 10 - j; l++) {
    //         s += '*';
    //     }
    //     s += '\n';
    // }
    // s += '\n';
    // console.log(s);

// VAR 5

    // *
    // **
    // ***
    // ****
    // *****
    // ****
    // ***
    // **
    // *

    // var s = '';
    // var baris = 5;

    // for (j = 0; j <= baris; j++) {
    //     for (k = 0; k < j; k++) {
    //         s += '_';
    //     }
    //     for (l = 0 ; l < baris - j; l++) {
    //         s += ' ';
    //     }
    //     s += '\n';
    // }

    // for (j = baris - 1; j >= 0; j--) {
    //     for (k = 0; k < j; k++) {   
    //         s += '_';
    //     }
    //     for (l = 0 ; l < baris - j; l++) {
    //         s += ' ';
    //     }
    //     s += '\n';
    // }
    // console.log(s);

// VAR 6

    //     *     
    //    ***
    //   *****
    //  *******
    // *********

    // var s = '';
    // var jmlbaris = 5;
    // var baris = jmlbaris - 1;

    // for (j = baris; j >= 0; j--) {
    //     for (k = 0; k < j; k++) {   
    //         s += '_';
    //     }
    //     for (l = 0 ; l < baris - j; l++) {
    //         s += '*';
    //     }
        
    //     s += '*';
        
    //     /*
    //         logic setengah bagian:
    //             if baris 5, then '*' = 0, '_' = 4
    //             if baris 4, then '*' = 1, '_' = 3
    //             if baris 3, then '*' = 2, '_' = 2
    //             if baris 2, then '*' = 3, '_' = 1
    //         That's Why:
    //             '*' => (l = 0; l < baris - j; l++)
    //             '_' => (k = 0; k < j; k++)
    //     */

    //     for (l = 0 ; l < baris - j; l++) {
    //         s += '*';
    //     }
    //     for (k = 0; k < j; k++) {   
    //         s += '_';
    //     }
        
    //     s += '\n';
    // }
    // s += '\n';
    // console.log(s);

// Example [26] Game Suit (Skipped) ________________________________

// Example [27-33] FUNCTION in JAVASCRIPT ________________________________

    // function declaration
    function jumlahDuaBilangan_Dec (a, b) { //parameter boleh ada or engga, asal tetep ditulis () nya
        var total;
        total = a + b;

        return total;
    }
    
    //function expression
    var jumlahDuaBilangan_Exp = function(a, b) {
        var total;
        total = a + b;

        return total;
    }

    //function add 2 cube volume
    function jumlahDuaKubus (sisi_a, sisi_b) {
        
        var vol_a,
            vol_b,
            total;

        vol_a = Math.pow(sisi_a, 3);
        vol_b = Math.pow(sisi_b, 3);
        total = vol_a + vol_b;

        return total; // if a, return a, else, return b, bisa ada lebih dari 1 return nanti
        
        // Refactoring:
        // return Math.pow(sisi_a, 3) + Math.pow(sisi_b, 3)
    }

    //Call function
    console.log(jumlahDuaBilangan_Dec(2, 3));
    console.log(jumlahDuaBilangan_Exp(1, 3));
    console.log('jumlah 2 kubus = ' + jumlahDuaKubus(8, 3, 6));

    // Variable Scope
    var a = "a terpanggil";

    function tes() {
        var b = "b terpanggil dg function tes";
        return b;
    }

    console.log(a);
    // console.log(b); // ini ga bisa karena var b ga dicall pake function tes atau console.log(b) ditaruh setelah return b;
    console.log(tes());







// Example [X] Title  _________________________
//CONTOH
