console.log(2019);

console.log('kafknvlanfl');

console.log('pirmas', 'antras');

console.log('pirmas', 16155, "kitas", 56116);

console.log(5516, 461615);

console.log(true);

console.log(false);

console.log('--------------');

const vardas = 'Rimantas';
console.log(vardas);

const amzius = 99;
console.log(amzius);

const arAmziusTikras = false;
console.log(arAmziusTikras);

let svecioVardas = 'Onute';
console.log(svecioVardas);

svecioVardas = 'Ona';
console.log(svecioVardas);

// type: array
const laiminguSkaiciuSarasas = [1, 5, 7, 8, 13];
console.log(laiminguSkaiciuSarasas);

const raides = ['a', 'b', 'c', 'd', 'e'];
console.log(raides);

const randomArray = [0, 'a', true, false, 5, 'asd', [1, 2, 3]];
console.log(randomArray);

console.log('-------------');

let lygtis = 2 + 2 * 2 + 1;
console.log( lygtis );

const pirmasSkaicius = 0;
const antrasSkaicius = 2;
const treciasSkaicius = 14;

const suma = pirmasSkaicius - antrasSkaicius + treciasSkaicius;
console.log(suma);

const asmensVardas = 'Vardenis';
const asmensPavarde = 'Pavardenis';
const asmensPilnasVardas = asmensVardas + ' ' + asmensPavarde;
console.log(asmensPilnasVardas);

const asmensInfo = [asmensVardas, asmensPavarde];
console.log(asmensInfo);

console.log('-------------');

// s - array of numbers
const s = [14, -28, 3, 36, 3.14];
const sSuma = 14 - (-28) + 3 - 36 + 3.14;
const sUltimate = s[0] - s[1] + s[2] - s[3] + s[4];
console.log(s);
console.log(sSuma);
console.log(sUltimate);

console.log('-------------');

console.log(raides);

const abc = raides[0] + ', ' + raides[1]
                      + ', ' + raides[2]
                      + ', ' + raides[3]
                      + ', ' + raides[4];

console.log(abc);

console.log('-------------');

console.log('As sakau "labas rytas" :)');
console.log("O tu man atsakai: 'ka tu?..'");

console.log('Kabuciu yra stai tokiu: ", \' ');
console.log("Kabuciu yra stai tokiu: \", ' ");

console.log('-------------');
console.log('PALYGINIMAS');
console.log('-------------');

if ( 2 > 4 ) {
    console.log('pirmas IF\'as yra teisingas :)');
}

if ( 2 < 4 ) {
    console.log('antras IF\'as yra teisingas :)');
}

if ( 2 === 4 ) {
    console.log('trecias IF\'as yra teisingas :)');
}

if ( 2 !== 4 ) {
    console.log('ketvirtas IF\'as yra teisingas :)');
}

if ( 2 >= 4 ) {
    console.log('penktas IF\'as yra teisingas :)');
}

if ( 2 <= 4 ) {
    console.log('sestas IF\'as yra teisingas :)');
}

if ( 2 > 4 ) {
    // jeigu tenkina salyga
    console.log('2 yra daugiau uz 4');
} else {
    // jeigu NEtenkina salygos
    console.log('2 nera daugiau uz 4');
}

const pilnametis = false;

if ( pilnametis === true ) {
    console.log('jam galima parduoti...');
} else {
    console.log('tegul [pilnameti] kviecia drauga...');
}

const diena = 'pirmadienis';

if ( diena === 'pirmadienis' ) {
    console.log('Linkejimai ir uzuojauta!..');
} else if ( diena === 'ketvirtadienis' ) {
    console.log('Tau ka tik pradejo sektis :)');
} else {
    console.log('Sveikinu, savaite beveik baigta...');
}

switch (diena) {
    case 'pirmadienis':
    case 'antradienis':
        console.log('yeye');
        break;

    case 'treciadienis':
        console.log('i scruma');
        break;
    case 'ketvirtadienis':
        console.log('luck day');
        break;
    case 'penktadienis':
        console.log('beveik savaitgalis');
        break;

    default:
        console.log('savaitgalis, kuri pamirsi');
        break;
}

const tekstas = 'Vardenis';
const ilgis = tekstas.length;

console.log('Tavo teksto "'+tekstas+'" ilgis yra ' + ilgis);

console.log( 18 * 2 + 'asd(' + (5 + 8) * 2 );
console.log( ilgis );

console.log('Tekstas 8 kitas.');
console.log('Tekstas ' + ilgis + ' kitas.');


const asmuo1 = ['Rimantas', 31];
const asmuo2 = ['Paulius', 33];

console.log('Asmuo vardu "vardenis" yra 25 metu.');
console.log('Asmuo vardu "'+asmuo1[0]+'" yra '+asmuo1[1]+' metu.');
console.log('Asmuo vardu "'+asmuo2[0]+'" yra '+asmuo2[1]+' metu.');

const a = 'asdasjnla';
const b = 'asskbjfjk';
if ( a.length > b.length ) {
    console.log('pirmas ilgesnis');
} else {
    console.log('pirmas nera ilgesnis');
}

const s1 = [];
const s2 = [1, 2, 3];

console.log( s1.length );
console.log( s2.length );

console.log('--------------');


if ( 2 === '2' ) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

console.log('--------------');
console.log('CIKLAS');
console.log('--------------');

