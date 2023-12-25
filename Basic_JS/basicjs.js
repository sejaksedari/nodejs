

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
            Intinya, + otomatis ngidentifikasi kalo ada string di operand, lgsg convert jadi string. makanya di cont ke-2 itu angka + angka jadi 20 dulu baru 2010 karna + ga identifikasi sbg string di operasi pertama
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

[25] NESTING _____________________________________________
    - Seru challengenya broh, cek example

[26] GAME SUIT _____________________________________________ 

[27-33] FUNCTION _____________________________________________
    - "Function is a key that makes a JS so powerful," Douglas Crockford 
    - function =
        - sub-program yg dapat dipanggil pada bagian lain pada program,
        - merupakan struktur dasar pembentuk javascript,
        - termasuk ke dalam first-class object
    - Why function?
        - reusability: DRY = do not repeat yourself
        - decomposition / abstraction 
        - modularity
    - CATEGORY
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
    - PARAMETER & ARGUMENT
        - Parameter = variable tampung dalam kurung yg ditulis saat function dibuat
        - Argument = nilai yg dikirim ke parameter pas fungsi dipanggil
            - bahkan bisa masukin function ke dalem argument
        - Rules: jumlah yg dimasukin
            param < argu, kelebihan argu diabaikan (masuk ke arguments [array])
            param > argu, kelebihan param diisi undefined
        - !!!! arguments = array berisi nilai yg dikirim pas fungsi dipanggil 
            - termasuk pseudovariable
            - array itu variable yg sedikit lebih sakti, krn bisa nampung > 1 nilai
    - REFACTORING
        - merubah kode agar jadi lebih 'baik' tanpa ngubah functionality
        - why? increase readability, DRY, testability, performance, maintainability
    - VARIABLE SCOPE
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
    - RECURSIVE
        - a function calling himself
        - pastikan jangan sampe kena infinite loop
        - Base Case = kondisi akhir dari rekursif yg menghasilkan nilai
        - Syntax
            function nama_fungsi(n) {
                <base_case> if () return X;
                return Y;
            }
        - Semua looping bisa dijadiin fungsi recursive, tapi tidak sebaliknya
        - Implementasi
            - gantiin looping
            - fibonacci
            - pencarian dan penelusuran pada struktur data list dan tree
            - bahasa pemgrograman yg ga memiliki pengulangan kyk Haskell, Erlang, Prolog
        - Coba jokes Google Recursion: search di google "recursion" nanti dia bakal ngereply did you mean: recursion? terus2an
    - FUNCTION DECLARATION VS FUNCTION EXPRESSION, Opt = optional
        - Fx Dec
            - Syntax:
                - funcition identifier (ParameterList_opt) {FunctionBody}
            - Ciri
                - lebih fleksibel (dapat ditulis di manapun, boleh define dulu baru panggil atau panggil dulu baru define) karna konsep Hoisting
                - mudah dipahami pemula
        - Fx Exp
            - Syntax:
                - var tampilPesan = funcition identifier_opt (ParameterList_opt) {FunctionBody}
                - jadi Fx Exp = Fx Dec yg disimpen ke dalam sebuah ekspresi
            - Ciri
                - harus didefine dulu sebelum dipanggil, gabisa sebaliknya
                - lebih powerfull (sebagai closure, sebagai argumen untuk function lain, IIFE [Immediately Invoked Function Expression])
        - Terus pilih yg mana?
            - secara umum, pake Fx Dec aja krn secara fungsi sama, kecuali buat optimasi

[34-38] ARRAY _____________________________________________
    - INTRO
        - Def: array = "variabel yg lebih sakti." [sakti = bisa nampung > 1 nilai]
        - Why Array?
                - Mempermudah pengelolaan nilai/value/data terutama buat nelusuri
                - Efisiensi memori
            - Detailed Def
                - array = variable jamak, punya banyak elemen dan diacu dengan nama yg sama
                - key and value pair
                - key = index array starting from 0
                - array in JS is an object
                    - coba console.log(typeof(<namaArray>)), ntar outputnya 'object'
                - object has a method and array has a method of length (one of them)
                - in JS, array can be consisted of different data type (like PHP)
                    - var myArr = ['teks', 2, false];
                    - var myArr2 = ['teks', 2, false, myFunc]; //bisa nyimpen function dalem array
                    - var myArr3 = ['teks', 2, false, myFunc, [4, 5, 6]];
                        - coba akses value 5 yg ada di array dalam array myArr3: console.log(myArr3 [4] [1] );
    - ARRAY MANIPULATION
        - array.length()
        - array.join()
        - push pop unshift shift bener2 ngilangin element, bukan ngubah jadi undefined
            - push (Add at End)
                - A, B, C, D
                - A, B, C, D, [E]
            - pop (Remove at End)
                - A, B, C, D, [E]
                - A, B, C, D,
            - unshift (Add at Start)
                - A, B, C, D
                - [E], A, B, C, D
            - shift (Remove at Start)
                - [E], A, B, C, D
                - A, B, C, D
        - Slice & Splice
            - Slice = Mengiris sebuah array jadi array baru
                slice(indexAwal, indexAkhir); // pastiin index Akhir itu 1 index setelah elemen terakhir yg mau kita IRIS.
                Misal kita mau iris 2 index 1 2 di Index 0 1 2 3 4, slice(1,3); -> 0 3 4
            - Splice = Menambal or Menyambung or Menyisipkan
                - splice(indexAwal, mauDihapusBerapa<opt>, mauDitambahElemenBaru1<opt>, mauDitambahElemenBaru1<opt>, ... );
        - ForEach, Map, Sort
            - https://www.w3schools.com/jsref/jsref_foreach.asp
            - https://www.w3schools.com/jsref/jsref_sort.asp 
        - Filter and Find
            - Find = return 1 nilai
            - Filter = return banyak nilai

[41-44] OBJECT in JS _____________________________________________
    - variable = wadah nilai 
    - [] array = kumpulan nilai, yg memiliki index [variable yg lebih sakti]
    - {} object = kumpulan nilai, yg memiliki nama [array yg lebih sakti]
        - in JS, objects are king, if u dont understand object, u dont understand JS
        - di language lain:
            - PHP: Associative Array
            - Pyhton: Dictionaries
            - C: Hash Tables
            - Java: Hash Maps
            - Ruby & Perl: Hashes
    - Why Object?
        - less repetition
        - more modular
    - Object Anatomy
        
        // OBJECT
        var Orang = {

            // variable dalam object = PROPERTY (dipisahkan oleh tanda , )
            nama : 'Fuad Azaim',
            umur : 31,
            pekerjaan : '3D Artist',

            // function dalam object = METHOD
            sapa : function() {
                return 'Hi, nama saya ' + this.nama;
            }
        }
    - Mwmbuat Object
        - Literal (kyk yg sebelumnya)
        - Function Declaration
        - Constructor FUnction (keyword new, this., gaperlu var object sama return object ) <- lebih banyak digunakan
        - Object.create (pake method) <- dibahas nanti
    - Konsep This di Constructor
        - konteks global, this == window
        - Inget! property = var di dalem object, method = function di dalam object
            - https://medium.com/@ananthvishnu/difference-between-properties-and-method-in-java-script-947537ddb93d
        - This Context:
            - 1 function declaration --> 'this' will return global object
            - 2 object literal --> 'this' will return objek yg bersangkutan
            - 3 constructor --> 'this' return objek YG BARU DIBUAT (Instance masing2)
            Nanti bakal lebih paham pas udah belajar DOM (Document Object Model)

// [ADVANCED JAVASCRIPT] |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

[1] OBJECT ___________________________________________________________________

    - How to Make Object
        - Object Literal
        - Function Declaration, Object.create
            - efisiensi memori masih mirip object literal, tapi bisa ditweak dg ngeluarin function jadi object di luar function declaration
            - ada perubahan method, ubah juga di function declaration, atau bisa juga pake cara otomatis: OBJECT.CREATE (seperti konsep warisan)
            - tapi meskipun gitu, kita butuhnya function mahasiswa, yg method itu kita pisahin jadi object baru, ya sama aja harus bikin dan ngelola 2 object. makanya kita perlu tahu konsep PROTOTIPE
        - Constructor Function
            - Constructor pada dasarnya mirip function declaration, tapi versi optimised: (1) init dan return this dilakukan secara implisit, (2) buat bikin method pakai konsep PROTOTIPE
        - Class
            - mirip constructor function, tapi versi optimised lagi: (1) init dan return this juga implisit, (2) konsep prototipe juga udah implisit, lebih rapi (sebenernya class itu yg dijalanin konsep constructor function tapi ga dishow aja)
    - Implikasi tau konsep OBJECT dan PROTOTIPE
        - let mahasiswa1 = new Mahasiswa('Fuad', 10); <- coba analisis
        - misal kita bikin array
            - let angka = [];
            - let angka = new Array();

            - di belakang layar ada ini:
            - function Array() {
                let this = Object.create(Array.prototype);
            }
        - ternyata emang yg terjadi di belakang layar itu sebuah constructor function, di mana Array itu adalah object dan setiap object pasti punya prototipe, karena si Objecr.create itu menghubungkan function tsb dengan parentnya yakni Array.prototype
        - dan dengan itu ktia bisa manggil method yg merupakan prototype dari object array, BISA MANGGIL ARRAY METHOD kyk sort, reverse, dll.

// [2] CONTEXT, HOISTING, SCOPE ___________________________________________________________________
        







[NEXT: DOM JAVASCRIPT]

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
    /*
        // function declaration
        function jumlahDuaBilangan_Dec (a, b) { //parameter boleh ada or engga, asal tetep ditulis () nya
            var total;
            total = a + b;

            return total;
        }
        
        // function expression
        var jumlahDuaBilangan_Exp = function(a, b) {
            var total;
            total = a + b;

            return total;
        }

        // function add 2 cube volume
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

        // Call function
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

        // Recursive
        function tampilAngka(n) {
            
            //Base Case
            if(n === 0) {
                return;
            }
            console.log(n);
            tampilAngka(n-1);

        }

        tampilAngka(5);

        // Recursive Factorial
        function faktorial(n) {
            if (n === 0) {
                return 1;
            }
            return n * faktorial(n-1);
        }

        console.log(faktorial(5));

        // detail perhitungan function faktorial
            // faktorial (5)
            // 5 * faktorial(4)
            // 5 * (4 * faktorial(3))
            // 5 * (4 * (3 * faktorial(2)))
            // 5 * (4 * (3 * (2 * (faktorial(1))))
            // 5 * (4 * (3 * (2 * 1)))
            // 5 * (4 * (3 * (2))
            // 5 * (4 * (6))
            // 5 * 24
            // 120
    */

// Example [34-38] ARRAY in JAVASCRIPT ________________________________
    /*
        // Intro
        var myFunc = function() {
            alert('Hello World!');
        };

        var myArr3 = ['teks', 2, false, myFunc, [4, 5, 6]];
        console.log(myArr3[4][1]); // output = 5

        // 1. Menambah isi array (manual)
        console.log(myArr3);
        myArr3[5] = "+ArrayId_5"; // tambah array id ke-5
        console.log(myArr3);

        // 2. Menghapus isi array (manual)
        myArr3[3] = undefined; // hapus array id ke-3
        console.log(myArr3);

        // 3. Menampilkan seluruh isi array
        for ( var i = 0; i < myArr3.length; i++ ) {
            console.log('Isi index ke-' + i + ' itu: ' + myArr3[i]);
        }

        // 4. Method: JOIN -> rubah isi array jadi string, bisa diatur separatornya, di case ini ' - '
        console.log(myArr3.join(' - '));

        // 5. Method: Push, Add, Unshift, Shift
        myArr3.push('Push'); // Add at end
        console.log(myArr3);

        myArr3.unshift('Unshift'); // Add at start
        console.log(myArr3);    
    */
    /*
        // 6. Splice and Slice
            var arr = [1, 2, 3, 4, 5, 6, 7, 8];
            console.log(arr);

            // splice(indexAwal, mauDihapusBerapa<opt>, mauDitambahElemenBaru1<opt>, mauDitambahElemenBaru1<opt>, ... );
            arr.splice(2, 1, '3New'); // hapus int 3 di array dan ganti dengan string '3New'
            console.log(arr);
            

            var arr2 = arr.slice(2, 3); // Ambil '3New' dari Array jadi Array2
            console.log(arr2);
        
        // 7. ForEach, Map, Sort
            console.log('\n');
            var angka = [15, 20, 9, 1, 2, 3, 4, 5, 6, 7, 8];

            // kita coba function expression
            var cetak = function(e, i) {
                console.log('Cetak indeks ke-' + i + ' isinya ' + e);
                // i refer ke index, e refer to element
            };

            // forEach nggak mengembalikan nilai array, cuma nampilin doang
            angka.forEach(cetak);

            // map mengembalikan nilai aray, kita bakal kaliin e dengan 2
            var angka2 = angka.map(function(e) {
                return e * 2;
            });

            console.log(angka2.join(' - '));

            // Sort dengan bener, harus ada function a-b;
            // https://www.w3schools.com/jsref/jsref_sort.asp
            angka.sort(function(a,b) {
                return a-b; // biar urut bener2
            });
            console.log(angka.join(' - '));
    */
    /*
        // 8. Filter and Find
            var angka = [1,2,10,5,20,3,6,8,4];
            
            var angka2 = angka.filter(function(x) {
                return x > 5;
            });

            var angka3 = angka.find(function(x) {
                return x > 5;
                // hasilnya bakal 10, bukan 6, karena logicnya si find itu dia nyari dari index terkecil dulu, kalo nemu yg > 5 lgsg direturn, kebetulan index yg terisi angka 10 < index yg terisi angka 6 (berdasarkan index, bukan value)
            });
            
            console.log(angka2);
            console.log(angka3);
    */



// Example [39-40] JURAGAN ANGKOT ________________________________
    /*
        // https://www.youtube.com/watch?v=mgRpWhNNGZo&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=39&ab_channel=WebProgrammingUNPAS
        // INI VERSI FUAD:

        // var penumpang = ['Raja','Tiara','Jakson'];
        var penumpang = [];
        var penumpangAngkot2 = [];

        // penumpang[0] = undefined
        // penumpang[1] = undefined
        // penumpang[2] = undefined

        console.log(penumpang);

        tambahPenumpang('Fuad', penumpang);
        console.log(penumpang);

        tambahPenumpang('Siraj', penumpang);
        console.log(penumpang);

        tambahPenumpang('Siraj', penumpang);
        console.log(penumpang);

        tambahPenumpang('Juangga', penumpang);
        console.log(penumpang);

        tambahPenumpang('Abdiel', penumpang);
        console.log(penumpang);

        tambahPenumpang('Juangga', penumpang);
        console.log(penumpang);

        hapusPenumpang('Fuad', penumpang);
        console.log(penumpang);

        tambahPenumpang('Ziya', penumpang);
        console.log(penumpang);

        hapusPenumpang('Siraj', penumpang);
        console.log(penumpang);

        tambahPenumpang('BapakJuangga', penumpang);
        console.log(penumpang);

        hapusPenumpang('Ziya', penumpang);
        console.log(penumpang);

        hapusPenumpang('BapakJuangga', penumpang);
        console.log(penumpang);

        hapusPenumpang('Juangga', penumpang);
        console.log(penumpang);

        hapusPenumpang('Abdiel', penumpang);
        console.log(penumpang);

        tambahPenumpang('Jokowi', penumpang);
        console.log(penumpang);

        tambahPenumpang('Prabowo', penumpang);
        console.log(penumpang);

        tambahPenumpang('Anies', penumpang);
        console.log(penumpang);

        tambahPenumpang('Ganjar', penumpang);
        console.log(penumpang);

        console.log("\n");
        hapusPenumpang('Jeju', penumpangAngkot2);
        console.log(penumpangAngkot2);

        function hapusPenumpang (b, y) {
            // kalo angkot kosong, tampilkan pesan bahwa angkot kosong
            if (y.length == 0) {
                console.log("Angkot Kosong");
            // kalo yg disebut ga ada di dalam angkot, tampilkan si X ga ada
            } else if (!(y.includes(b))) {
                console.log(b + " tidak ada di dalam angkot");
            // kalo yg disebut ada, suruh turun dengan jadiin dia undefined
            } else {
                for (var i = 0; i < y.length; i++) {
                    if (y[i] == b) {
                        y.splice(i, 1, undefined);
                        console.log(b + " sudah turun dari angkot");
                    } else {
                        // console.log("ELse")
                    }
                }
            }
        }

        function tambahPenumpang (a, x) {
            // kalo ada kursi kosong di suatu angkot(array), telusuri keseluruhan kursi, kalau kursi ke-i kosong, cek dulu apakah di angkot tersebut ada nama yg sama dengan yg mau naik, kalo udah ada, dia ga boleh masuk angkot, kalo ga ada, suruh dia duduk di kursi kosong tersebut
            if(x.includes(undefined)) {
                for (var i = 0; i < x.length; i++) {
                    if(x[i] == undefined) {
                        if (x.includes(a)) {
                            // console.log("Test")
                            x.splice(i, 0); // dummy operation, ga ngapa2in
                        } else {
                            x.splice(i, 1, a);
                        }
                    }
                }
            // kalo kursi kosong udah full, kalo ada nama yg sama di angkot dengan yg mau naik, tolak dan kasih peringatan 
            } else if(x.includes(a)) {
                console.log(a + " sudah ada di dalam angkot");
            // kalo kursi kosong udah full, tambahin kursi baru di angkot tersebut dan bolehin si penumpang naik
            } else {
                x.push(a);
            }
        }

    */

// Example [41-44] OBJECT ________________________________

// Cara1: Object Literal
    /*
        var mhs = {
            nama        : "Fuad Azaim Siraj",
            umur        : 24,
            IPSem       : [3.00, 2.50, 3.20],
            IPKum       : function () {
                var total = 0;
                var ips = this.IPSem;
                for ( var i = 0; i < ips.length; i++ ) {
                    total += ips[i];
                }
                return total / ips.length;
            },
            alamat  : {
                jalan       : "Jalan Kanayakan Barat 32",
                kota        : "Bandung",
                provinsi    : "Jawa Barat"
            }
        }

        console.log(mhs.nama); // output "Fuad Azaim Siraj"
        console.log(mhs.umur); // output "24"
        console.log(mhs.alamat.provinsi); // output "Jawa Barat"
        console.log(mhs["alamat"]["provinsi"]); // alt version to call pake []
        console.log(mhs.IPSem); // output [ 3.00, 2.50, 3.20 ]
        console.log(mhs.IPSem[2]); // output [3.20]
        console.log(mhs.IPKum()); // output 2.9
    */

// Cara2: Function Declaration
    /*
        // lebih ringkas dari Cara1 karna deklarasi kita buat sekali, objeknya bisa dibuat berulang2
    
        function buatObjectMahasiswa(nama, nrp, email, jurusan) {
            var mhs = {}; // deklarasi variable mhs sebagai objek

            // bikin placeholder buat properti
            mhs.nama = nama;
            mhs.nrp = nrp;
            mhs.email = email;
            mhs.jurusan = jurusan;
            
            return mhs;
        }

        // assign
        // isi objeknya dan assign ke custom var baru
        var mhs1 = buatObjectMahasiswa('Fuad', '02411840000133', 'fuad@gmail.com', 'T.Industri');
        var mhs2 = buatObjectMahasiswa('Azaim', '02411840000090', 'azaim@gmail.com', 'T.Perminyakan');
        var mhs3 = buatObjectMahasiswa('Siraj', '02411840000111', 'siraj@gmail.com', 'T.Arsitektur');

        // call
        // console.log(mhs1);
    */

// Cara3: Constructor <- bakal paling sering dipake nanti

    /*
        // mirip dengan function declaration. constructor ini function khusus di JS untuk buat object

        function Mahasiswa(nama, nrp, email, jurusan) { //umumnya constructor awalnya kapital
            
            // di sini, VAR OBJECT sama RETURN OBJECT udah diganti sama VAR THIS dan RETURN THIS secara IMPLISIT
            this.nama = nama;
            this.nrp = nrp;
            this.email = email;
            this.jurusan = jurusan;

        }

        // assign (kasih keyword new!!!!, biar si JS ga asumsi kita pake function declaration)
        var mhs4 = new Mahasiswa('Riza', '02411840000162', 'riririza@gmail.com', 'Computer Science')

        //call
        console.log(mhs4);
    */
    
// LATIHAN Konsep This di Object: Develop Pengelolaan Angkot Pake Object _______________________________

// - What to Manage?
//     - Sopir
//     - Trayek
//     - Kas
//     - penumpang (naik, turun) 

    /*
        function Angkot(sopir, trayek, penumpang, kas) {
            
            this.sopir = sopir;
            this.trayek = trayek;
            this.penumpang = penumpang;
            this.kas = kas;

            this.tambahPenumpang = function(a) {
                // kalo ada kursi kosong di suatu angkot(array), telusuri keseluruhan kursi, kalau kursi ke-i kosong, cek dulu apakah di angkot tersebut ada nama yg sama dengan yg mau naik, kalo udah ada, dia ga boleh masuk angkot, kalo ga ada, suruh dia duduk di kursi kosong tersebut
                if(this.penumpang.includes(undefined)) {
                    for (var i = 0; i < this.penumpang.length; i++) {
                        if(this.penumpang[i] == undefined) {
                            if (this.penumpang.includes(a)) {
                                // console.log("Test")
                                this.penumpang.splice(i, 0); // dummy operation, ga ngapa2in
                            } else {
                                this.penumpang.splice(i, 1, a);
                            }
                        }
                    }
                // kalo kursi kosong udah full, kalo ada nama yg sama di angkot dengan yg mau naik, tolak dan kasih peringatan 
                } else if(this.penumpang.includes(a)) {
                    console.log(a + " sudah ada di dalam angkot");
                // kalo kursi kosong udah full, tambahin kursi baru di angkot tersebut dan bolehin si penumpang naik
                } else {
                    this.penumpang.push(a);
                }
            }

            this.hapusPenumpang = function(b, bayar) {
                // kalo angkot kosong, tampilkan pesan bahwa angkot kosong
                if (this.penumpang.length == 0) {
                    console.log("Angkot Kosong");
                // kalo yg disebut ga ada di dalam angkot, tampilkan si X ga ada
                } else if (!(this.penumpang.includes(b))) {
                    console.log(b + " tidak ada di dalam angkot");
                // kalo yg disebut ada, suruh turun dengan jadiin dia undefined
                } else {
                    for (var i = 0; i < this.penumpang.length; i++) {
                        if (this.penumpang[i] == b) {
                            this.penumpang.splice(i, 1, undefined);
                            // bayar
                            this.kas += bayar
                            // alert
                            console.log(b + " sudah turun dari angkot");
                        } else {
                            // console.log("ELse")
                        }
                    }
                }
            }

        }

        // Instancing Event
        var angkot1 = new Angkot('Agus', ['Cicaheum', 'Cibiru'], ['Irma'], 0);
        var angkot2 = new Angkot('Bambang', ['Antapani', 'Ciroyom'], [], 0);

        angkot1.tambahPenumpang('Joni');
        angkot1.hapusPenumpang('Irma', 2000);
        angkot1.tambahPenumpang('Ajeng');
        angkot1.hapusPenumpang('Joni', 3000);
        angkot1.hapusPenumpang('Ilham', 3000);


        // Call
        console.log(angkot1.penumpang);
        console.log(angkot1.kas);
    
    */

// [ADVANCED JAVASCRIPT] |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// [1] OBJECT _______________________________________________________________________

    // Object Literal <<<<<<<
        // let mahasiswa = {

        //     // prop
        //     nama    : 'Fuad',
        //     energi  : 10,

        //     // method
        //     makan: function (porsi) {
        //         this.energi = this.energi + porsi;
                
        //         // pake backtick method buat bikin STRING LITERAL
        //         console.log(`Selamat datang ${this.nama}, Selamat Makan!. Energi Anda bertambah sebesar ${porsi} sehingga totalnya sebesar ${this.energi}`);
        //     }
        // }
        
        // console.log(mahasiswa);
        // console.log(mahasiswa.makan(75));

    // Function Declaration (secara memori masih ga efisien, mirip object literal) <<<<<<<
        // function Mahasiswa(nama, energi) {
            
        //     // initiate let
        //     let mahasiswa = {};

        //     // prop
        //     mahasiswa.nama = nama;
        //     mahasiswa.energi = energi;

        //     // method
        //     mahasiswa.makan = function(porsi) {
        //         this.energi += porsi;
        //         console.log(`Selamat datang ${this.nama}, Selamat Makan!. Energi Anda bertambah sebesar ${porsi} sehingga totalnya sebesar ${this.energi}`);
        //     }

        //     // return let
        //     return mahasiswa;
        // }

        // // Instancing
        // let mahasiswa1 = Mahasiswa('Fuad', 10);
        // let mahasiswa2 = Mahasiswa('Siraj', 10);
        
        // // Call
        // console.log(mahasiswa1);
        // console.log(mahasiswa2);
        // console.log(mahasiswa1.makan(75));
        // console.log(mahasiswa2.makan(75));
    
     // Constructor (PALING SERING DIPAKE, hapus initiate dan return ) <<<<<<<

        // function Mahasiswa(nama, energi) {

        //     // prop
        //     this.nama = nama;
        //     this.energi = energi;

        //     // method
        //     this.makan = function(porsi) {
        //         this.energi += porsi;
        //         console.log(`Selamat datang ${this.nama}, Selamat Makan!. Energi Anda bertambah sebesar ${porsi} sehingga totalnya sebesar ${this.energi}`);
        //     }
        // }

        // // Instancing (NEW blabla)
        // let mahasiswa1 = new Mahasiswa('Fuad', 10);
        // let mahasiswa2 = new Mahasiswa('Siraj', 10);
        
        // // Call
        // console.log(mahasiswa1);
        // console.log(mahasiswa2);
        // console.log(mahasiswa1.makan(75));
        // console.log(mahasiswa2.makan(75));

    // FUNCTION DECLARATION FT. OBJECT.CREATE FT. PROTITIPE (Code Efficiency Mindset)
    /*
        // Pisahin semua method jadi sebuah object baru
        const methodMahasiswa = {
            makan: function (porsi) {
                this.energi += porsi;
                console.log(`Halo ${this.nama}, selamat makan!`);
            },

            main: function (jam) {
                this.energi -= jam;
                console.log(`Halo ${this.nama}, selamat bermain!`);
            },

            tidur: function (jam) {
                this.energi += jam * 2;
                console.log(`Halo ${this.nama}, selamat tidur!`);
            },
        }

        function Mahasiswa(nama, energi) {
            
            // Sambungin object methodMahasiswa pake Object.create saat inisiasi let or var di awal
            let mahasiswa = Object.create(methodMahasiswa);
            // let mahasiswa = {};
            
            mahasiswa.nama = nama;
            mahasiswa.energi = energi;

            return mahasiswa;
        }

        let mahasiswa1 = Mahasiswa('Fuad', 10);
        let mahasiswa2 = Mahasiswa('Siraj', 10);
        
        mahasiswa1.tidur(2);
        mahasiswa2.main(2);
        mahasiswa1.tidur(2);
        
        console.log(mahasiswa1);
        console.log(mahasiswa2);
        
    */
    
    
    // CONSTRUCTOR, by default dia pake inherited prototype sebagai parent
    /*
        function Mahasiswa(nama, energi) {
        
            // let mahasiswa = Object.create(methodMahasiswa);
            // let mahasiswa = {};
            
            // di belakang layar: let this = Object.create(Mahasiswa.prototype);

            this.nama = nama;
            this.energi = energi;
            
            // return mahasiswa;

            // di belakang layar: return this;
        }

        Mahasiswa.prototype.makan = function (porsi) {
            this.energi += porsi;
            console.log(`Halo ${this.nama}, selamat makan!`);
        }

        Mahasiswa.prototype.main = function (jam) {
            this.energi -= jam;
            console.log(`Halo ${this.nama}, selamat bermain!`);
        }

        Mahasiswa.prototype.tidur = function (jam) {
            this.energi += jam * 2;
            console.log(`Halo ${this.nama}, selamat tidur!`);
        }

        let mahasiswa1 = new Mahasiswa('Fuad', 10);
        let mahasiswa2 = new Mahasiswa('Siraj', 10);
        
        mahasiswa1.tidur(2);
        mahasiswa2.main(2);
        mahasiswa1.tidur(2);
        
        console.log(mahasiswa1);
        console.log(mahasiswa2);
    */

    // Rebuild CONSTRUCTOR versi CLASS (karna JS baru2 aja mengimplementasikan konsep kelas di bahasannya), ini lebih rapi daripada pake prototype.

        class Mahasiswa {
            constructor(nama, energi) {
                this.nama = nama;
                this.energi = energi;
            }

            // bikin method
            makan(porsi) {
                this.energi += porsi;
                console.log(`Halo ${this.nama}, selamat makan!`);
            }
    
            main(jam) {
                this.energi -= jam;
                console.log(`Halo ${this.nama}, selamat bermain!`);
            }
    
            tidur(jam) {
                this.energi += jam * 2;
                console.log(`Halo ${this.nama}, selamat tidur!`);
            }
        }

        // Class Instancing, tetep pake "new"
        let mahasiswa1 = new Mahasiswa('Fuad', 10);
        let mahasiswa2 = new Mahasiswa('Siraj', 10);
        
        mahasiswa1.tidur(2);
        mahasiswa2.main(2);
        mahasiswa1.tidur(2);
        
        console.log(mahasiswa1);
        console.log(mahasiswa2);



// [2] CONTEXT, HOISTING, SCOPE ___________________________________________________________________

    
// Example [X] Title  _________________________
// CONTOH

