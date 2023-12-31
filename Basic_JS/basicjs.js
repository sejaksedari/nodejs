

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

// [2] EXECUTION CONTEXT, HOISTING, SCOPE, CLOSURE ___________________________________________________________________
    - 2 Phase in Execution Context
        - Creation
            - Creation phase pada global context
            - Cari var let const function pada setiap baris
            - nama var = undefined
            - nama function = fn()
            - window = global object
            - this = window
            - HOISTING, -> mengerek bendera ke atas, jadi proses creation dr bawah ke atas
        - Execution
            - eksekusi dari atas ke bawah
            - function() = dijalanin, function = gak dijalanin
            - jgn lupa kalo bikin function, di akhir kasih return
            - https://pythontutor.com/javascript.html#mode=edit, coba cek ini buat simulasi code execution biar lebih paham apa itu HOISTING
    - function membuat Local Execution Context (LEC)
        - yg di dlaamnya ada creation n execution, LEC bikin kita bisa akses window dan arguments, trs ada local hoisting juga
        - misal kita mau kasi argument ke sebuah function, tapi di function ga ada yg nangkap "function()", si argument kita ga ilang, tetep kesimpen di memori, ke object "arguments"
        - Hoisting = ngisi sesuatu (let, var, local fx, dll) dengan undefined 
    - Closure
        - closure = kombinasi antara function dan lexical scope (parent scope) di dalam function tsb.
        - Why we need closure?
            - untuk bikin function factories
            - untuk membuat private method

// [Quick Tip] VAR LET CONST ___________________________________________________________________

    - Pake let aja biar behavior variable sama kyk bahasa pemrograman lain
        - kalo pake var ada undefined, hoisting, kalo pake let lgsg diassign error
        - kalo kita bikin incremental for loop, pas value 10 keluar, i bakal ditangkap sama console.log(i) di luar for dan diprint as 10. di language lain ga bisa. Nah, biar mirip behaviornya, pake FUNCTION SCOPE
            - IIFE (Immediately Invoked Function Expression) & SIAF(Self Invoking Anonymous Function) dibuat supaya variable di dalam functionnya ga bisa diakses dari luar
            - dimasukin ke variable:
                - var x = function() {...}
            - langsung dijalanin (SIAF or IIFE):
                - (function() {...} () );
            > [implikasi: kalo collab, kan mungkin pake var yg sama sam orang lain. buat menjaga biar varnya gak bentrok, simpen aja semuanya ke dalam suatu variable atau dibuat SIAF/IIFE]
        - ES6 (Ecma Script 6) - Pake LET or CONST!!! [BLCOK SCOPE]
            - ganti semua var jadi let biar behaviornya BLOCK Scope, bukan FUNCTION Scope
            - Why JS menganut function scope? kok ga langsung block code? is it a design decision dear mr brendan?
                - Brendan: "10 days did not leave time for block scope, also many scripting languages of that mid-90s era had few scopes and grew more later"
            - bedanya LET sam CONST? kalo kita yakin nilainya di tengah2 code ga bakal berubah, pake CONST, else pake LET
                - kita masih bisa ngubah CONST object atau CONST array asal ga semuanya, valuenya aja yg kita ubah.

// [3] ARROW FUNCTION ___________________________________________________________________

    - Bentuk lebih ringkas dari function expression
        - function expression:
            let A = function (nama) {
                alert('halo' + nama);
            }
            A('Fuad');
        - Arrow function:
            let A = (nama) => { alert('halo' + nama); }
            A('Fuad');
    - Konsep this pada arrow function beda sama yg biasanya, kalo method bisa
        - saat pake arrow function, dia ga menyimpan konteks this
        - dia bakal mencari this. ke lexical scope, di parent scopenya
    - Eg implementasinya bisa ngulik2 css buat toggle sebuah action, tp kudu paham dulu DOM

// [4] HIGHER ORDER FUNCTION ___________________________________________________________________

    - INTRO
        - Function yg beroperasi pada function lain, baik digunakan dalam argumen maupun sebagai return value
        - di JS, sebuah function disebut First Class Function dan juga diperlakukan sebagai object
        - Why butuh HOF?
            - Abstraksi (menyederhanakan kode rumit, krn semakin besar sebuah program, semakin kompleks, semakin bikin programmer bingun g)
            - kita jadi punya paradigma functional programming
        - Eg HOF:
            - array.prototype.map()
            - array.prototype.filter()
            - array.prototype.reduce()
    - FILTER, MAP, REDUCE
        - gila, keren bett, jadi lebih clean codenya kalo paham 3 ini sama arrow function

// [5] TEMPLATE LITERAL / STRING ___________________________________________________________________

    - INTRO
        - Template literal = string literal yang memungkinkan adanya expression di dalamnya
        - pake backtick biar bisa bikin template literal:
            - multi-line string
            - embedded expression
            - HTML fragments
            - expression interpolation
            - tagged template (ini bermanfaat)
    - More on Tagged Template
        - Terus fungsinya apa kita menghasilkan string yg sama pake tag template padahal kita bisa langsung console.log aja string keseluruhannya?? biar lebih MODULAR
            - Nampilin sebuah string hasil pencarian berdasarkan keyword tertentu, dan keyword tsb terhighlight
            - Escaping HTML Tags (menghindari karakter atau script yg ga diinginkan di halamn web, buat ngehindari phisisng, hacking, dll -> sanitize)
            - Translation and Internationalisation (buat alih bahasa)
            - Styled Components (misal pake VueJS or ReachJS)

// [6] DESTRUCTURING VARIABLE / ASSIGNMENT ___________________________________________________________
    - Destructuring
        - Expression pada JS yg membuat kita dapat membongkar nilai dari array or property dari object ke dalam variable yang terpisah
    - Destructuring Array [ ]
        - How to Assign Array
        - Skipping Items
        - Swapping Items
        - Return Value pada Function
        - Rest Parameter ...
    - Destructuring Object { }
        - How to Assign Object
        - Assignment without Object Declaration, wrap with ( )
        - Assign to a New & Different Variable
        - Assign with rest Parameter ...
    - Latihan1, pake array, assignment order matters
    - Latihan2, pake object, assignment order doesn't matter
    - Lathian3, function argument destructuring

// [7] FOR.. OF vs FOR.. IN ___________________________________________________________

    - Intro
        - [1] for..of = Creates a loop iterating over iterable object
            - iterable object = string, array, arguments/nodeList, typedArray, Map, Set, User-defined Iterables
        - [2] for..in = Creates a loop iterating over enumerables (kayak property)
        - 2 ini merupakan syntax looping baru di JS


// [8] SPREAD OPERATOR & REST PARAMETER ________________________________________________________

    - Intro
        - Spread Operator = memecah (expand/unpack) iterables menjadi single element
            - Gabungin 2/lebih array  
            - Mengcopy array
            - [SKIPPED] animasi text di html span single
        - Rest Parameter = Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array (Notasi sama, beda fungsi aja)
            - Rest paramter must be last formal paramter
            - kenapa ga langsung return arguments? bisa aja tapi bentuknya bukan array, atau tetep pake arguments dan diconvefrt jadi array dulu pake
                - Array.from(arguments)
                - return [...arguments];


// [9] ASYNCHRONOUS JS ________________________________________________________
    - Definisi
        - JS? High level programming language!
        - JS? is a single-threaded, non-blocking, asynchronous and concurrent language
            - single-threaded = (do 1 thing at 1 time) urutan eksekusi kode yg dapat dilakukan secara bebas atau independen satu sama lain
            - non-blocking = (ga ngeblock) pas punya task1, walau belom kelar, bisa masuk ke task2
            - asynchronous (single threaded) = (gak urut) kita ngerjain task1, belom beres, thread bisa pindah ke task2, belom beres, balik ke task1, dah beres, balik ke task2
            - Concurrency = asynchronous + single-threaded
            - Parallelism = asynchronous + multi-threaded
            - Illustration: https://stackoverflow.com/questions/59139242/stdasync-does-not-seem-to-really-implement-single-threaded-asynchronous-beha
        - Conclusion
            - Single vs Multi Thread = lingkungan eksekusi 'task'
            - Blocking vs Non-Blocking = teknik 'ngoding' (IO related)
            - Sync vs Async = teknik 'ngoding' (HTTP Request related), Ajax stuff
            - Concurrent vs Parallel = lingkungan eksekusi 'task'
        - So, JS = single-threaded, non-blocking, async, concurrent
    - JS is a "V8 Engine" planted into web browser
        - 2 parts:
            - Heap: [Memory allocation] eg. hoisting, saving variable, saving function
            - Stack: [function call & execution context] eg. console.log()
        - Async will talks more on the Stack part
            - Visit = http://latentflip.com/loupe/
            - Visit = https://pythontutor.com/render.html#mode=edit
            - Check Out = What the heck is the event loop anyway?
    - Teknik2 Asynchronous:
        - Callback, Promise, Ajax, Async & Await
    - Why we need to learn this?
        - supaya bisa nyiptain program yg nyaman digunakan sama user
    - Intinya:
        - Don't Block the EVENT LOOP!

// [10.1] CALLBACK ________________________________________________________

    - Def: Sebuah function yg paratemetrnya function
    - mahasiswa.json ga boleh ada comment or ; di akhir array
    - Ada beberapa percobaan:
        - Sync callback
        - Async callback (pretending)
        - Async callback (using JSON, Vanilla JS & Live Server)
        - Async callback (using JSON, jQuery (.ajax) & Live Server)
    - Next bakal belajar Async callback using Vanilla dan .fetch (metode baru) tanpa pake library jQuery

// [10.2] CALLBACK LATIHAN ________________________________________________________
    - Ati-ati kena Callback Hell kalo kebanyakan callback, ciri2 kodenya semakin menjorok ke-dalam
    - Ini terjadi karena kita pake external 3rd party: jQuery. kalo kita manggil dr luar maka ada resource yg digunakan, ga efisien.
    - Makanya next belajar pake FETCH

// [11] PROMISE ________________________________________________________

        i=tt1285016
        url: 'http://www.omdbapi.com/?apikey=d56a422a&s=avengers'
        - List:
            - Ajax versi jQuery
            - Ajax versi VanillaJS
            - Fetch: Sama kyk jquery or vanilla hasilnya, cuman kelemahannya fetch return promise doang
            - eg promise 1 - langsung keluar (simuasi doang)
            - eg promise 2 - setelah setTimeout delay
            - Promise.all -> ngambil 2 api sekaligus bersamaan
        - Apa itu Promise?
            - Def: Promise is an object representing successfullness or failure of an async event in the future
                - Object yg merepresentasikan keberhasilan or kegagalan sebuah event yg asynchronous in the future
                - janji (terpenuhi / ingkar)
                - states (fulfilled / rejected / pending)
                - callback (resolve / reject / finally)
                - aksi (then / catch)
        - QNA: ini kok ga kecetak ya Not Okay nya? meskipun dah ganti ditepati = false?
        
// [12] FETCH ________________________________________________________

    - Intinya, fetch itu:
        - Sebuah method pada API JS untuk mengambil RESOURCES dari jaringan, dan mengembalikan PROMISE yang selesai (FULFILLED) ketika ada RESPONSE yang tersedia 
        - Syntax: fetch(resources, init) // kita ga pake init di case Movie Search, jadi pake default get
            - resources bisa url bisa request object
            - init = konfigurasi tambahan pada sebuah request berbentuk objek
                - eg. method, headers, body, mode, cache, referrer, referrerPolicy, integrity, keepalive, signal, dll.
            - response (hasil dari fetch, returnya PROMISE)
                - di dalemnya ada property
                    - eg. headers, ok, redirected, status, statusText, type, url, body
                - ada method
                    - eg. clone(), error(), redirect(), blob(), formData(), json(), text()

// [13-14] FETCH REFACTOR (ASYNC AWAIT) ________________________________________________________

    - Intinya, biar fetching lebih rapi, sederhana, terbaca
    - Def_1
        - Async Function = "Sebuah function yg bekerja secara async (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yg sync (standar)"
    - Def_2
        - "Sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai."

// [15] ERROR HANDLING ________________________________________________________

    - Error Handling: Promise
        .then() => ngejalanin apa yg ada di dalam resolve
        .catch() => ngejalanin apa yg ada di dalam reject
    - Error Handling: Async Await
        try => run resolve
        catch() => run reject
    - Error Handling: fetch() ? kalo resolve bisa, kalo gagal gimana? 
        - coba cek folder Movie Search
            - Menangani search dengan input kosong, input salah, dst.
        - fetch cuma bisa handle error mengenai url aja, sisanya harus ditanganin manual di dalam fungsi di mana fetch berada













[NEXT: DOM JAVASCRIPT]

[X]
*/
// TEORI



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
    /*
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
    */


// [2] EXECUTION CONTEXT, HOISTING, SCOPE, CLOSURE ___________________________________________________________________

        // [A] Coba jalanin ini pake https://pythontutor.com/javascript.html#mode=edit

            // function a() {
            //     console.log('ini a');

            //     function b() {
            //         console.log('ini b');

            //         function c() {
            //             console.log('ini c');
            //         }
            //         c();
            //     }
            //     b();
            // }
            // a();

        // [B} yg tampil di layar apa dari codingan ini? easy!!__________

            // function satu() {
            //     var nama = 'Shandika';
            //     console.log(nama);
            // }

            // function dua() {
            //     console.log(nama);
            // }

            // console.log(nama); // undefined, ga ada var nama, masih kestore Undefined
            // var nama = 'Erik';
            // satu(); // Sandhika, assign context local dulu
            // dua('Doddy'); // Erik, Doody ga ada yg nangkep di function dua, jadi dia nyari global var nama yakni Erik, tapi argument Doddy ga ilang, kestore as arguments
            // console.log(nama); // Erik

        // [C] Closure

            // function init() {
            //     let nama = 'Shandika'; // local variable
            //     function tampilNama() { // inner function (closure*), kalo inner function butuh variable di parent scopenya, maka inner function ini disebut dg closure
            //         console.log(nama); // akses ke parent variable
            //     }
            //     tampilNama();
            // }
            // init();
            
        // [D] Function Factoring, function tampilNama cuma disimpen jadi return tapi ga dijalankan, nanti dijalankan pas init diassign ke panggilNama dan dicall panggilNama()

            // // Eg.1
                // function init() {
                //     // let nama = 'Shandika';
                //     function tampilNama(nama) {
                //         console.log(nama);
                //     }
                //     return tampilNama;
                // }
                // let panggilNama = init();
                // panggilNama('Fuad');

            // // Eg.2
                // // function parent bisa buat nyimpen value, inner function bisa diubah-ubah
                
                // function ucapkanSalam(waktu) {
                //     return function (nama) { // anonymous function
                //         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
                //     }
                // }
                // let selamatPagi = ucapkanSalam('Pagi');
                // let selamatSiang = ucapkanSalam('Siang');
                // let selamatMalam = ucapkanSalam('Malam');

                // console.log(selamatMalam('Fuad'));
                // console.log(ucapkanSalam('Pagi')('Fuad')); // alternative
            

        // [E] Private Method
            // let add = function() {
            //     let counter = 0; // counter jadi private ga bisa diakses dr luar
            //     function incr() { // inner function
            //         return ++counter;
            //         // return counter = counter + 1; //alternative
            //     }
            //     return incr;
            // }

            // // counter = 100; // meskipun ada value ini tapi ga bakal mengganggu local counter di dalem function add krn kita pake closure

            // // pindahin add ke variable a biar ga setengah jalan
            // let a = add (); // add buat jalanin semuanya, a buat jalanin inner function

            // console.log(a());
            // console.log(a());
            // console.log(a());


// [Quick Tip] VAR LET CONST ___________________________________________________________________

// [3] ARROW FUNCTION __________________________________________________________________________

        // // Arrow function explicit return, 2 parameters
            // const tampilNama = (nama, waktu) => {
            //     return `Selamat ${waktu}, ${nama}`;
            // }
            // console.log(tampilNama('Fuad', 'Malam'));

        // // Arrow function implicit return, 1 parameter
            // const tampilNamaz = namaz => `Halo ${namaz}`;
            // console.log(tampilNamaz('Fuad'));

        // // Arrow function no implici return, No paramter
            // const tampilNamax = () => 'Hello World!';
            // console.log(tampilNamax());

        // // No Arrow funct, Ubah array jadi function "nama" yg return array length
            // let mahasiswa = ['Fuad', 'Azaim', 'Siraj'];
            // let jumlahHuruf = mahasiswa.map(function (nama) { return nama.length; })
            // console.table(jumlahHuruf);

        // // Arrow function, ubah array jadi function "nama" yg return array length
        // // versi lebih ringkas dr atas
            // let mahasiswa = ['Fuad', 'Azaim', 'Siraj'];
            // let jumlahHuruf = mahasiswa.map( nama => nama.length);
            // console.table(jumlahHuruf);

        // // Arrow function, ubah array jadi function object "nama" dg 2 properties
            // let mahasiswa = ['Fuad', 'Azaim', 'Siraj'];
            // let jumlahHuruf = mahasiswa.map( nama => ({ nama: nama, jmlHuruf: nama.length}) ); 
                // nama (ini PROPERTY): nama (ini PROPERTY VALUE)
            // console.table(jumlahHuruf);

// [4] HIGHER ORDER FUNCTION ___________________________________________________________________

    // // 'kerjakanTugas' = Higher Order Function (function yg memiliki callback sbg argumennya), 'status' = Callback (function yg dijadiin argumen)
        // function kerjakanTugas(matakuliah, status) {
        //     console.log(`Mulai mengerjakan tugas ${matakuliah}`);
        //     status();
        // }

        // function selesai() {
        //     console.log(`Selesai mengerjakan!`);
        // }

        // function belumSelesai() {
        //     console.log(`Belum selesai mengerjakan!`);
        // }

        // kerjakanTugas('ekonomi', selesai);

    // // 'ucapkanSalam' = HOF, karena dia return function lain di dalamnya (di case ini function anonym)

        // function ucapkanSalam(waktu) {
        //     return function (nama) {
        //         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
        //     }
        // }

        // let selamatMalam = ucapkanSalam('Malam');
        // console.dir(selamatMalam('Fuad'));
    
    // FILTER, MAP, REDUCE _____________________________________________________
    
    // FOR (cari angka >= 3)
        // const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
        // const angkaFor = [];

        // for (let i = 0; i < angka.length; i++) {
        //     if ( angka[i] >= 3 ) {
        //         angkaFor.push(angka[i]);
        //     }
        // }

        // console.table(angkaFor);

    // FILTER (cari angka >= 3) (pake function callback, ada function di argumennya)
        // const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
        // const angkaFor = angka.filter(function(angkaMember) {
        //     return angkaMember >= 3;
        // });

        // // // alternative pake arrow function (lebih ringkas)
        // // // const angkaFor = angka.filter ((angkaMember) => angkaMember >= 3);

        // console.table(angkaFor);

    // MAP (kalikan angka * 2)
        // const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
        // const angkaFor = angka.map ((angkaMember) => angkaMember * 2);
        // console.table(angkaFor);

    // REDUCE (jumlah semua elemen array + initial array of 4) (reduce untuk memanipulasi keseluruhan array)
        // const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
        // // 4 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
        // const angkaFor = angka.reduce ((accumulator, currentValue) => accumulator + currentValue, 4);
        // console.table(angkaFor); // output 30

    // METHOD CHAINING
    // Cara Fuad: cari angka > 5, kalikan 3, jumlahkan
        // const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

        // const angkaCari = angka.filter (function (angkaMember) {
        //     return angkaMember > 5;
        // });

        // const angkaKalikan = angkaCari.map (function (angkaMember) {
        //     return angkaMember * 3;
        // });

        // const angkaSum = angkaKalikan.reduce (function (accumulator, currentValue) {
        //     return accumulator + currentValue;
        // });

        // console.table(angkaCari);
        // console.table(angkaKalikan);
        // console.table(angkaSum);

    // Cara Dhika: cari angka > 5, kalikan 3, jumlahkan [VERY CLEAN MENN GILSS]
        // const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

        // const hasil = angka.filter((a) => a > 5)
        //     .map((a) => a * 3)
        //     .reduce((acc, cur) => acc + cur, 0);

        // console.table(hasil);

    // Latihan FILTER, MAP, REDUCE _____________________________________________________
    /*
        let dataVideos = [
            "15:27",
            "11:18 JAVASCRIPT LANJUTAN",
            "21:40 JAVASCRIPT LANJUTAN",
            "19:38",
            "12:10 JAVASCRIPT LANJUTAN",
            "20:43 JAVASCRIPT LANJUTAN",
            "14:30",
            "26:38 JAVASCRIPT LANJUTAN",
            "17:33 JAVASCRIPT LANJUTAN",
            "10:39 JAVASCRIPT LANJUTAN",
            "17:31 JAVASCRIPT LANJUTAN",
            "14:25"
        ]
        
        // filter data yang ada "JAVASCRIPT LANJUTAN"
        const jsLanjut_JS = dataVideos.filter((video) => video.includes("JAVASCRIPT LANJUTAN"));
        
        // Ambil durasi masing2 video
        let jsLanjut = jsLanjut_JS.map((x) => x.slice(0, 5))
        // const jsLanjut = jsLanjut_JS.map((x) => x.slice(-x.length, -20)); // alternative
        
        // [Chaining] Ubah durasi menjadi float, ubah menit menjadi detik
            .map((waktu) => {
                // 10:30 -> [10, 30], displit
                const parts = waktu.split(":").map(part => parseFloat(part));
                return (parts[0] * 60) + parts[1];
            })
        
        // [Chaining] jumlahin semua detik 
            .reduce((total, detik) => total + detik, 0);
        
        // // Ubah formatnya jadi jam menit detik
        const jam = Math.floor(jsLanjut / 3600); // 2.303...2 JAM
        jsLanjut = jsLanjut - (jam * 3600); // 8292 - (7200) = 1092 detik
        const menit = Math.floor(jsLanjut / 60); // 18 MENIT
        
        jsLanjut = jsLanjut - (menit * 60); // 1092 - (1080) = 12 detik
        const detik = jsLanjut;
        
        console.table(`The total playlist duration is ${jam} hours, ${menit} minutes, ${detik} seconds`);
    */

// [5] TEMPLATE LITERAL / STRING ___________________________________________________________________

    // text biasa
        // console.log(`string text`);

    // multiline string, kalo diconsole log, mau beda line tinggal enter biasa ga perlu pake \n
        // console.log(
        // `
        // string text line 1
        // string text line 2
        // string text line 3
        // `
        // );

    // Simple Expression 1
        // console.log(`string text ${expression} string text`);
    
    // Simple Expression 2
        // console.log(`hasil dari ${ 1 + 1 } adalah`);
    
    // Simple Expression 3
        // const x = 110;
        // console.log(`${( x - 5 == 5) ? 'benar' : 'salah'}`);

    // ____________________________________________
    // TEMPLATE LITERALS LATIHAN ---------> SKIPPED
    // --------------------------------------------

    // Tagged Template literals, sebuah function bisa nangkep strings dan expression dari template  literals yg punya tag
    /*
        let nama = 'Fuad';
        let umur = 24;

        function tangkap(strings, ...args) {
            
            // // return salah satu elemen aja, bisa diganti return ke strings atau args kalo mau, atau spesifik ke suatu expression  misal nama atau umur
            //     return args;

            // // return gabungan strings dan expression (PAKE forEach)
            //     let result = ''; // bikin variable kosong
            //     strings.forEach((str,i) => { // rangkai satu per satu
            //         result += `${str}${args[i] || '' }`; // karena str selalu lebih besar 1 daripada args, misal kata 'oppa' str ada 4, args[i] ada 3, makanya kudu pake operator || buat ngilangin undefined di hasil console.log gara2 pada saat string terakhir 'tahun' dia tetep harus cetak args sedangkan setelah 'tahun' udah ga ada expression lagi. Logic: kalo args ada isinya, tampilin, kalo ga ada, tampilin string kosong '' 
            //     }); 
            //     return result;

            // return gabungan strings dan expression (PAKE REDUCE)
                return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');

        }

        const strLit = tangkap`Halo, nama saya ${nama}, saya ${umur} tahun`;
        console.log(strLit);
    */


// [6] DESTRUCTURING VARIABLE / ASSIGNMENT ___________________________________________________________
        
        // // ARRAY >>>

        // // Buat Assign Array + Skipping Items + Swapping Items
            // let perkenalan = ['Halo', 'nama', 'saya', 'Fuad'];
            // let[A, , ,D] = perkenalan; //syntax, [] = [];
            // console.log(D); // Output: 'Fuad'
            // [A, , ,D] = [D, , ,A];
            // console.log(D) // Swap, Output: 'Halo'

        // // Swapping Items
            // let a = 1;
            // let b = 2;
            // console.log(a); // Output: '1'
            // [a, b] = [b, a];
            // console.log(a); // Output: '2'

        // // Return Value pada Function
            // function coba() {
            //     return [1, 2];
            // }

            // const [a, b] = coba();
            // console.log(a);

        // // Rest Parameter ...
            // const [a, b, ...cuy] = [1, 2, 3, 4, 5, 6, 7];
            // console.log(a);
            // console.log(b);
            // console.log(cuy[0]);
            // console.log(cuy);

        // // OBJECT >>>>

        // // Destructuring Object
            // const mhs = {
            //     nama: 'Fuad',
            //     umur: 17,
            //     domisili: 'Sidoarjo'
            // }

            // // const nama = mhs.nama // biasanya gini cara lama
            // const { nama, umur, domisili } = mhs; // di case object, nama destructuring variable sesuai nama property object
            // console.log(nama);

        // // Assignment Tanpa Deklarasi Object, wrap with ( )
            // // const nama = mhs.nama // biasanya gini cara lama
            // ( { nama, umur, domisili } = {
            //     nama: 'Fuad',
            //     umur: 17,
            //     domisili: 'Sidoarjo'
            // } ); // 2 object diwrap ( ) tanpa declare
            // console.log(umur);

        // // Assign ke Variable Baru yg Berbeda
            // const mhs = {
            //     nama: 'Fuad',
            //     umur: 17,
            //     domisili: 'Sidoarjo'
            // }

            // // const nama = mhs.nama // biasanya gini cara lama
            // const { nama: a, umur: b, domisili: c, email: d = 'default@gmail.com', gender } = mhs; // langsung pake : buat assign property ke variable baru, trs misal kita kasih variable email, kalo ga ada di object, dia bakal refer ke value '' sebelahnya email, kalau ada, dia bakal refer ke email dalem object
            // console.log(d);
            // console.log(gender); // undefined

        // // Bisa Assign pake Rest Parameter
            // const mhs = {
            //     nama: 'Fuad',
            //     umur: 17,
            //     domisili: 'Sidoarjo'
            // }

            // const { nama, ...value } = mhs; // tapi 'value' ini jadi object jadi pas diconsole log ga bisa pake value[i], harus value.properties;
            // console.log(nama); // Fyad
            // console.log(value.umur); // 17
            // console.log(mhs.umur); // 17
        
        // // Mengambil field pada object, setelah dikirim sebagai argumen untuk function, misal ngambil dari API yg punya ID
            // const mhs = {
            //     id: 123,
            //     nama: 'Fuad',
            //     umur: 17,
            //     domisili: 'Sidoarjo'
            // }

            // function getId_Umur_Sum_Mhs({ id, umur }) { // masuk sini, kiriman dari console.log dibongkar dulu, biar yg ditangkap di sini hanya properties { id } aja, atau coba id sama umur dijumlahin bisa juga, jadi ga semuanya
            //     return id + umur;
            // }

            // console.log(getId_Umur_Sum_Mhs(mhs)); // kirim object ke function getIdMhs

        // _______________________________LATIHAN_____________________________

        // // Latihan 1 - Pake Array, Order Matters
            // function operasi(a, b) {
            //     return [a + b, a - b, a * b, a / b];
            // }

            // // // Cara lama
            // // const jumlah = operasi(2,3) [0];
            // // console.log(jumlah); // output: 5
            // // const kali = operasi(2,3) [2];
            // // console.log(kali); // output: 6

            // // pake destructuring array
            // const [jumlah, kurang, kali, bagi] = operasi(2,3);
            // console.log(jumlah);
            // console.log(kurang);
            // console.log(kali);
            // console.log(bagi);
        
        // // Latihan 2 - Pake Object, Order doesn't Matters
            // function operasi(a, b) {
            //     return {
            //         jumlah: a + b,
            //         kurang: a - b,
            //         kali: a * b,
            //         bagi: a / b
            //     }
            // }

            // // pake destructuring object, order ga ngaruh
            // const {kali, bagi, jumlah, kurang} = operasi(2,3);
            // console.log(jumlah);
            // console.log(kurang);
            // console.log(kali);
            // console.log(bagi);

        // Latihan 3: Destructuring Function Argument
        /*
            const mhs1 = {
                nama: 'Fuad Azaim Siraj',
                umur: 20,
                email: 'azaimfuad229@gmail.com',
                nilai: {
                    tugas: 80,
                    uts: 85,
                    uas: 75
                },
                skillCode: {
                    js: {
                        js_def: 'JavaScript',
                        js1: 'jQuery',
                        js2: 'VueJS',
                        js3: 'nodeJS',
                        js4: 'p5JS',
                        js5: 'ml5JS'
                    },
                    py: {
                        py_def: 'Python',
                        py1: 'NumPy',
                        py2: 'Tensorflow'
                    }
                } 
            }

            // Cara Baru: Destructuring
            function cetakMhs({nama, umur, nilai: {tugas, uts, uas}, skillCode: {js: {js_def, js4}, py: {py_def, py1, py2}}}) { // langsung dipecah di sini, argumen yg ga dicall ga usah ditulis di paramter function
                return `Halo, nama saya ${nama}, saya berumur ${umur} tahun. Lalu, nilai UAS saya adalah ${uas}. Saya juga berpengalaman menggunakan library visualisasi pada ${js_def} seperti ${js4} dan ${py_def} dengan ${py2} `;
            }

            let data1 = cetakMhs(mhs1); // dikirim sebagai objek
            console.log(data1);

              // // // Cara Lama 1, kirim argumen pake properti
            // // function cetakMhs(nama, umur) {
            // //     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`
            // // }

            // // let data1 = cetakMhs(mhs1.nama, mhs1.umur);
            // // console.log(data1);


            // // // Cara Lama 2, kirim argumen pake object
            // // function cetakMhs(mhs) {
            // //     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`
            // // }

            // let data1 = cetakMhs(mhs1);
            // console.log(data1);
        // */

// [7] FOR.. OF vs FOR.. IN ___________________________________________________________
    
    // FOR..OF -> buat ITERABLES
        // // Cara 1 - for Loop
            // const mahasiswas = ['Afad', 'Budi', 'Canthika', 'Dendi'];
            // for(let i = 0; i < mahasiswas.length; i++) { // pake let karena value berubah
            //     console.log(mahasiswas[i]);
            // }

        // // Cara 2 - forEach
            // const mahasiswas = ['Afad', 'Budi', 'Canthika', 'Dendi'];
            // mahasiswas.forEach((mahasiswa) => console.log(mahasiswa));

        // // Cara 3 - FOR..OF - pake const karena ga kayak for loop yg berubah terus
            // const mahasiswas = ['Afad', 'Budi', 'Canthika', 'Dendi'];
            // for ( const mahasiswa of mahasiswas ) {
            //     console.log(mahasiswa);
            // }

        // // FOR..OF STRING
            // const namas = 'Fuad';
            // for( const nama of namas ) {
            //     console.log(nama);
            // }

        // // Ngambil i dari array pake forEach bisa
            // const mahasiswas = ['Afad', 'Budi', 'Canthika', 'Dendi'];
            // mahasiswas.forEach((mahasiswa, i) => {
            //     console.log(`${mahasiswa} adalah mahasiswa ke-${i + 1}`)
            // });
        
        // // Ngambil i dari array pake for..of harus diakalin pake method .entries & destructuring
            // const mahasiswas = ['Afad', 'Budi', 'Canthika', 'Dendi'];
            // for (const [i, mahasiswa] of mahasiswas.entries()) {
            //     // [ 0, 'Afad'] = [i, mahasiswa] // internal destructuring
            //     console.log(i, mahasiswa);
            //     console.log(`${mahasiswa} adalah mahasiswa ke-${i + 1}`);
            // }

        // // FOR..OF buat Arguments (kalo pake .reduce ga bisa krn itu method buat array, foreach juga gabisa krn arguments itu bukan array)
            // function jumlahkanAngka() {
            //     // console.log(arguments);
            //     let jumlah = 0;
            //     for (a of arguments) {
            //         jumlah += a;
            //     }
            //     return jumlah;
            // }

            // console.log(jumlahkanAngka(1, 2, 3, 4, 5)); // 15
        
    // FOR..IN -> loop iteration of ENUMERABLES 
        // const mhs = {
        //     nama: 'Fuad',
        //     umur: 20,
        //     email: 'azaimfuad@gmail.com'
        // }

        // for (m in mhs) { 
        //     console.log(m); // looping property dr object
        // }

        // console.log(`__
        // `)

        // for (m in mhs) {
        //     console.log(mhs[m]); // looping value dr property dr object
        // }
    
// [8] SPREAD OPERATOR & REST PARAMETER ________________________________________________________

    // // Spread Operator
        
        // // Menggabungkan 2 Array/lebih
            // const mahasiswas = ['Afad', 'Budi', 'Canthika', 'Dendi'];
            // const dosen = ['Arief', 'Rudi', 'Anang'];

            // // const orang = [mahasiswas, dosen]; // kalo gini ga bakal bisa, bakal ada array dalam array
            // // const orang = mahasiswas.concat(dosen); // cara gabungin 2, tp ini ga sefleksibel spread karena ga bisa nambahin array di tengah2nya
            // const orang = [...mahasiswas, 'Aji', ...dosen]; // cara gabungin 1

            // console.log(orang);

        // // Mengcopy Array
            // const mahasiswas = ['Afad', 'Budi', 'Canthika', 'Dendi'];
            // const mhs_copied = [...mahasiswas]; // ga pake const meskipun nanti diubah index 0 nya karena yg konstan itu array nya, bukan isi di dalam array
            // mhs_copied[0] = "Siraj"; // ganti Afad dengan Siraj

            // console.log(`mahasiswas: ${mahasiswas}`);
            // console.log(`mhs_copied: ${mhs_copied}`);
        
        // // Spread Operator for DOM case: SKIPPED

    // // Rest Parameter

        // // Catch arguments as array
            // function myFunc(a, b, ...args) {
            //     const sisa = args;
            //     console.log(`a = ${a}, b = ${b}, args = ${args}`);
            //     console.log(sisa);

            //     // gamau pake rest parameter, tapi pake array, ada 2 cara:
            //     // return Array.from(arguments);
            //     // return [...arguments];
            // }

            // myFunc(1, 2, 3, 4, 5, 6, 7, 8);
            
            // function jumlahkan(...angkas) {
            //     // let total = 0;
            //     // for (angka of angkas) {
            //     //     total += angka;
            //     // }
            //     // return total;

            //     // // one line alternative
            //     return angkas.reduce((prev, curr) => prev + curr);
            // }

            // let x = jumlahkan(1, 2, 3, 4, 5);
            // console.log(x); // 15

        // // Array Destructuring
            // const kelompok1 = ['Afad', 'Budi', 'Canthika', 'Dendi', 'Eko', 'Fauzi'];
            // const [ketua, wakil, ...anggota] = kelompok1;
            // console.log(ketua);
            // console.log(wakil);
            // console.log(anggota);

        // // Object Destructuring
            // const team = {
            //     pm: "Afad",
            //     frontEnd1: 'Budi',
            //     frontEnd2: 'Canthika',
            //     backEnd: 'Dendi',
            //     ux: 'Eko',
            //     devOps: 'Fauzi' 
            // }

            // const {pm, ...myTeam} = team;
            // console.log(`The pm is ${pm}`);
            // console.log(myTeam);
        
        // // Filtering
            // function filterBy(type, ...values) {
            //     return values.filter((v) => typeof v === type); // kalo sesuai return
            // }

            // console.log(filterBy('number', 1, 2, 'Afad', false, 10, true, 'Eko'));
            // console.log(filterBy('string', 1, 2, 'Afad', false, 10, true, 'Eko'));
            
        // // Fuad Coba2 Ngetes Tipe data dari sebuah array
            // function type(a) {

            //     // // pake forEach
            //         // const b = [];
            //         // a.forEach(element => {
            //         //     b.push(typeof element);
            //         // });
            //         // return b;

            //     // // pake for..of
            //         const b = [];
            //         for (element of a) {
            //             b.push(typeof element);
            //         }
            //         return b;
            // }

            // const a = ['number', 1, 2, 'Afad', false, 10, true, 'Eko'];
            // console.log(type(a));


// [9] ASYNCHRONOUS JS ________________________________________________________
    
        // // Copy these to https://pythontutor.com/render.html#mode=edit  or http://latentflip.com/loupe/
            // function kalikan(a, b) {
            //     return a * b;
            // }

            // function hitungLuas(sisi) {
            //     return kalikan(sisi, sisi);
            // }

            // function cetakLuasKotak(sisi) {
            //     const luas = hitungLuas(sisi);
            //     console.log(luas);
            // }

            // cetakLuasKotak(5);

        // // Async Callback, gara2 ada Event Loop
        // // Coba pake setTImeout, urutan console.log: satu, tiga, Muncul...
            // console.log('satu');
            // setTimeout(() => {
            //     console.log('MunculSetelah3detik');
            // }, 3000); // delay 3000 milisecond or 3s
            // console.log('tiga');
            // // sebenernya setTImeout ga ilang dari STACK, tapi dia dipindahin ke WEB API yg menangani fungsi2 async callback, 
            // // Tapi WEB API ga bisa langsung menjalankan kembali fungsinya ke dalam Stack, fungsi async callback harus disimpan ke CALLBACK QUEUE: onClick, onLoad, delay, ...
            // // Setelah itu, ada EVENT LOOP yg tugasnya ngecek di Callback Queue ada antrian ga? kalo ada, ambil callback, simpen ke Stack, jalanin function kyk biasa. 
            // // Tapi kapan bisa masuk ke stack? kalau stack udah KOSONG, si EVENT LOOP baru bisa masukin callback tadi ke stack
        
// [10.1] CALLBACK ________________________________________________________
        
        
        // // Sync function
            // const a = [0, 1, 2, 3, 4, 5, 6, 7];
            
            // const aturan = ((x) => x > 3 ); // kalo sebaris ga perlu diwrap { }

            // // function aturan (x) {
            // //     return x > 3;
            // // }

            // function filter (array, f_aturan) {
            //     return array.filter(f_aturan);
            // }

            // let callback = filter(a, aturan); 
            // console.log(callback);
        
        
        // // Async function (pretending)
            // // ada array yg di dalemnya ada object kyk JSON (array of objects)
            // const mhs = [
            //     {
            //         "nama": "Fuad Azaim Siraj",
            //         "nrp": "02411840000133",
            //         "email": "azaimfuad@gmail.com",
            //         "jurusan": "Teknik Industri",
            //         "idDosenWali": 1
            //     },
            //     {
            //         "nama": "Budi Irawan Sanjaya",
            //         "nrp": "02411840000182",
            //         "email": "budi@gmail.com",
            //         "jurusan": "Teknik Informatika",
            //         "idDosenWali": 2
            //     },
            //     {
            //         "nama": "Chikita Duanzisita",
            //         "nrp": "02411840000111",
            //         "email": "chikita@gmail.com",
            //         "jurusan": "Arsitektur",
            //         "idDosenWali": 2
            //     }
            // ];

            // console.log("mulai");
            // // HOF biasanya paramternya udah callback (function) dan biasanya ngambil data pake API ini butuh waktu dan lama
            // mhs.forEach((m) => {
            //     for(let i = 0; i <1700000000; i++) {
            //         let a; // dummy execution
            //     }
            //     console.log(m.nama)
            // });
            // console.log("selesai");
        
        
        // // Async Callback function (using Vanilla JS)
            // function getDataMahasiswa(url, success, error) {
            //     let xhr = new XMLHttpRequest();

            //     xhr.onreadystatechange = function () {
            //         if (xhr.readyState === 4) {
            //             success(xhr.response);
            //         } else {
            //             error();
            //         }
            //     }

            //     xhr.open('get', url);
            //     xhr.send();
            // }


            // console.log('mulai');

            // // pake anonymuous function buat callback di parameter
            // getDataMahasiswa('data/mahasiswa.json', (results) => {
            //     const mhs_json = JSON.parse(results);
            //     mhs_json.forEach(element => console.log(element.nama));
            // }, () => {
            //     // dummy error
            // });

            // console.log('selesai');
            // console.log('selesai2');
            // // coba open with live server indexbasic.html, cek console!
        
        
        // // Async Callback Function with JQuery 
            // // // Copy script jQuery 3.x minfied ke .html biar bisa manggil method .ajax
            // console.log("mulai");
            // $.ajax({
            //     url: 'data/mahasiswa.json',
            //     success: (mhs_json) => {
            //         // ga perlu parsing kalo di JQuery, isinya lgsg objek
            //         mhs_json.forEach(element => console.log(element.nama));
            //     },
            //     error: () => {

            //     }
            // })
            // console.log("selesai");
            // // // coba open with live server indexbasic.html, cek console!

// [11] PROMISE ________________________________________________________

        // Ajax versi jQuery
            // console.log("mulai");
            // $.ajax({
            //     url: 'http://www.omdbapi.com/?apikey=d56a422a&s=avengers',
            //     success: movies => console.log(movies)
            // });
            // console.log("selesai");

        // Ajax versi VanillaJS, ga pake library external, tp yg ditulis banyak
            // const xhr = new XMLHttpRequest();

            // xhr.onreadystatechange = function () {
            //     if(xhr.status === 200) {
            //         if (xhr.readyState === 4) {
            //             console.log(JSON.parse(xhr.response));
            //         }
            //     } else {
            //         console.log(xhr.responseText);
            //     }
            // }

            // xhr.open('get', 'http://www.omdbapi.com/?apikey=d56a422a&s=avengers');
            // xhr.send("");
        
        // Pake Fetch: sama kyk jquery or vanilla hasilnya, cuman kelemahannya fetch return promise doang
            // fetch('http://www.omdbapi.com/?apikey=d56a422a&s=avengers')
            //     .then((response) => response.json()) // return promise
            //     .then((response) => console.log(response)); // print the promise

        // eg Promise 1 - Hasil langsung keluar
            // let ditepati = true; // coba ganti false, masuk ke else, yg ngambil method .catch
            // const janji1 = new Promise((resolve, reject) => {
            //     if( ditepati ) {
            //         resolve('Janji telah ditepati');
            //     } else {
            //         reject('Ingkar Janji');
            //     }
            // });

            // janji1
            //     .then(response => console.log('Oke! : ' + response))
            //     .catch(response => console.log('Not Okay : ' + response));
        
        // eg Promise 2 - Ada loading
            // let ditepati = true;
            // const janji2 = new Promise((resolve, reject) => {
            //     if( ditepati ) {
            //         setTimeout(() => {
            //             resolve('Ditepati setelah beberapa waktu');
            //         }, 2000);
            //     } else {
            //         setTimeout(() => {
            //             resolve('Tidak ditepati setelah beberapa waktu');
            //         }, 2000);
            //     }
            // });

            // console.log('mulai');
            // janji2
            //     .finally(() => console.log('Selesai Menunggu'))
            //     .then(response => console.log('Oke! : ' + response))
            //     .catch(response => console.log('Not Okay : ' + response)); // ini kok ga kecetak ya Not Okay nya? meskipun dah ganti ditepati = false
            // console.log('selesai');

        // Method All di dalam Promise -> Promise.all untuk menjalankan ketika punya banyak promise dan mau dijalankan sekaligus
        /*
            // api1 data film
            const film = new Promise( (resolve) => {
                setTimeout(() => {
                    resolve([{
                        judul: 'Avengers',
                        sutradara: 'Fuad',
                        pemeran: 'Imron, Aji'
                    },
                    {
                        judul: 'Avatar',
                        sutradara: 'Siraj',
                        pemeran: 'Ghozi, Didik'
                    }])
                }, 1000);
            });

            // api2 data cuaca
            const cuaca = new Promise( (resolve) => {
                setTimeout(() => {
                    resolve([{
                        kota: 'Bandung',
                        temp: 26,
                        kondisi: 'Cerah Berawan'
                    },{
                        kota: 'Surabaya',
                        temp: 34,
                        kondisi: 'Terik Sekali'
                    }]);
                }, 500);
            });

            // jalanin satu2
            // film.then( response => console.log(response));
            // cuaca.then( response => console.log(response));

            // jalanin semua
            Promise.all([film, cuaca])
                // array di dalam array
                // .then(response => console.log(response));

                // array terpisah
                .then(response => {
                    const [film, cuaca] = response;
                    console.log(film);
                    console.log(cuaca);
                    
                    film.forEach(element => console.log(element.judul));
                });
        */

// [12] FETCH ________________________________________________________

    // - Coba cek folder Movie Search


// [13-14] FETCH REFACTOR (ASYNC AWAIT) ________________________________________________________


    // // EG 1
    /*
        // // fake delay
        const coba = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Selesai')
            }, 2000);
        });

        // // Sync Call
        console.log(coba); // ini bener2 sycn

        // // Call after setTimeout finished
        coba
            .then((c) => console.log(c));
    */


    // // EG 2
        /*
            function cobaPromise() {
                return new Promise((resolve, reject) => {
                    console.log('wait 2sec')

                    const waktu = 5000;

                    if (waktu < 5000) {
                        setTimeout(() => {
                            resolve('Selesai')
                        }, waktu);
                    } else {
                        reject('kelamaan nih');
                    }
                });
            }

            // // pake .then .catch
            // const coba = cobaPromise();
            // coba
            //     .then((c) => console.log(c))
            //     .catch((c) => console.log(c));


            // pake async await, harus pake .try untuk resolve | .catch untuk reject dan catch harus ada parameter
            async function cobaAsync() {
                try {
                    const coba = await cobaPromise();
                    console.log(coba);
                } catch (err) {
                    console.error(err); //.error biar merah di console
                }
            }

            cobaAsync();
        */



// [15] ERROR HANDLING ________________________________________________________

    // - coba cek folder Movie Search







// Example [X] Title  _________________________
// CONTOH




