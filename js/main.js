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

// eng: loop, ltu: ciklas

const numbers = [0, 5, 8, -17, 87, 99, 2019];

for ( let i=0; i<numbers.length; i++ ) {
    console.log('skaicius: ' + numbers[i]);
}

console.log('priespaskutinis skaicius: ' + numbers[ numbers.length - 2 ]);

console.log('--------------');

// suma intervale [0..0] = 0
let sum = 0;
for ( let i=0; i<=0; i++ ) {
    sum = sum + i;
}
console.log('suma intervale [0..0] = ' + sum);

// suma intervale [0..4] = 10
sum = 0;
for ( let i=0; i<=4; i++ ) {
    sum = sum + i;
}
console.log('suma intervale [0..4] = ' + sum);

// suma intervale [0..100] = 5050
sum = 0;
for ( let i=0; i<=100; i++ ) {
    sum = sum + i;
}
console.log('suma intervale [0..100] = ' + sum);

// suma intervale [574..815] = 168069
sum = 0;
for ( let i=574; i<=815; i++ ) {
    sum = sum + i;
}
console.log('suma intervale [574..815] = ' + sum);

// suma intervale [-50..50] = 0
sum = 0;
for ( let i=-50; i<=50; i++ ) {
    sum = sum + i;
}
console.log('suma intervale [-50..50] = ' + sum);

// suma intervale [-70..30] = -2020
sum = 0;
for ( let i=-70; i<=30; i++ ) {
    sum = sum + i;
}
console.log('suma intervale [-70..30] = ' + sum);


console.log('--------------');

let zodis = 'abcdef';
let atvirscias = '';

// logika, kuri apvercia duoda teksta
for ( let i=0; i<zodis.length; i++ ) {
    atvirscias = zodis[i] + atvirscias;
    console.log( zodis[i], atvirscias );
}

console.log(atvirscias);
console.log('--------------');

zodis = 'Labas rytas :)';
atvirscias = '';
for ( let i=zodis.length-1; i>=0; i-- ) {
    atvirscias = atvirscias + zodis[i];
    console.log( zodis[i], atvirscias );
}
console.log('--------------');

zodis = 'sedek uzu kedes';
atvirscias = '';
for ( let i=0; i<zodis.length; i++ ) {
    atvirscias = atvirscias + zodis[ zodis.length - 1 - i ];
    console.log( zodis[i], atvirscias );
}

console.log('--------------');
console.log('--------------');
console.log('--------------');

let nuo = 8;
let iki = 31;
let daliklis = 10;
let kartai = 0;

// logika
for ( let i=nuo; i<=iki; i++ ) {
    if ( i % daliklis === 0 ) {
        kartai++;
    }
    console.log(i, kartai);
}

console.log('Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš '+daliklis+' yra '+kartai+' vienetai.');


console.log('--------------');
console.log('FUNKCIJOS');
console.log('--------------');

function tusciaFunkcija() {
    return false;
}

console.log( tusciaFunkcija() );


console.log('--------------');
console.log('DAUGYBA');

// typeof(16165) -> 'number'
// typeof('tekstas') -> 'string'
// typeof(true) -> 'boolean'
// typeof(false) -> 'boolean'

function daugyba( pirmas, antras ) {
    if ( typeof(pirmas) !== 'number' ) {
        console.log('Klaida: pirma reiksme nera skaiciaus tipo.');
        return 'Klaida: pirma reiksme nera skaiciaus tipo.';
    }
    if ( typeof(antras) !== 'number' ) {
        console.log('Klaida: antra reiksme nera skaiciaus tipo.');
        return 'Klaida: antra reiksme nera skaiciaus tipo.';
    }
    if ( pirmas === Infinity ) {
        console.log('Klaida: pirmas reiksme negali buti begalybe.');
        return 'Klaida: pirmas reiksme negali buti begalybe.';
    }
    if ( antras === Infinity ) {
        console.log('Klaida: antras reiksme negali buti begalybe.');
        return 'Klaida: antras reiksme negali buti begalybe.';
    }
    if ( ''+pirmas === 'NaN' ) {
        console.log('Klaida: pirmas reiksme negali buti NaN.');
        return 'Klaida: pirmas reiksme negali buti NaN.';
    }
    if ( ''+antras === 'NaN' ) {
        console.log('Klaida: antras reiksme negali buti NaN.');
        return 'Klaida: antras reiksme negali buti NaN.';
    }

    const sandauga = pirmas * antras;

    console.log(pirmas, '*', antras, '=', sandauga);
    return sandauga;
}

const c = 2;
const d = 3;
daugyba(c, d);

daugyba(7, 3);
daugyba('asd', 3);
daugyba(3, 'asd');
daugyba(0, Infinity);
daugyba(Infinity, 8);
daugyba(0, NaN);
daugyba(NaN, 8);
daugyba(-8, -0.5);
daugyba(-8, 0.5);
daugyba(-0.362, 0.5);
daugyba(1, 4511561);
daugyba(1, 0.4511561);
daugyba(1, 12345678901234567890123456789);
daugyba(1, 0.12345678901234567890123456789);
daugyba(Math.PI, Math.E);


console.log('--------------');
console.log('SKAITMENU KIEKIS');

function skaitmenuKiekisSkaiciuje( skaicius ) {
    if ( typeof(skaicius) !== 'number' ) {
        console.log('Klaida: reiksme nera skaiciaus tipo.');
        return 'Klaida: reiksme nera skaiciaus tipo.';
    }
    if ( isNaN(skaicius) ) {
        console.log('Klaida: reiksme turi buti normalus skaicius.');
        return 'Klaida: reiksme turi buti normalus skaicius.';
    }
    if ( isFinite(skaicius) === false ) {
        console.log('Klaida: reiksme turi buti normalus skaicius.');
        return 'Klaida: reiksme turi buti normalus skaicius.';
    }

    let kiekis = 0;
    let tekstinisSkaicius = ''+skaicius;
    
    // pradinis spejimas, kiek skaitmenu turi sutekstintas skaicius
    kiekis = tekstinisSkaicius.length;

    // jei skaicius turi kableli, tai kiekis-1
    // Number.isInteger(skaicius) === false
    if ( skaicius % 1 !== 0 ) {
        kiekis--;
    }

    // jei skaicius yra su minuso zenklu (neigiamas), tai kiekis-1
    // tekstinisSkaicius[0] === '-'
    if ( skaicius < 0 ) {
        kiekis--;
    }

    console.log(skaicius, ' -> ', kiekis);
    return kiekis;
}

skaitmenuKiekisSkaiciuje( true );
skaitmenuKiekisSkaiciuje( "asd" );
skaitmenuKiekisSkaiciuje( NaN );
skaitmenuKiekisSkaiciuje( Infinity );

skaitmenuKiekisSkaiciuje( 5 );
skaitmenuKiekisSkaiciuje( 781 );
skaitmenuKiekisSkaiciuje( 37060123456 );
skaitmenuKiekisSkaiciuje( -89 );
skaitmenuKiekisSkaiciuje( 3.1415 );
skaitmenuKiekisSkaiciuje( -3.1415 );
skaitmenuKiekisSkaiciuje( 0 );
skaitmenuKiekisSkaiciuje( -0 );
skaitmenuKiekisSkaiciuje( +0 );
skaitmenuKiekisSkaiciuje( 2*3 );
skaitmenuKiekisSkaiciuje( Math.PI );
skaitmenuKiekisSkaiciuje( 1.23e7 );         // 1.23 * 10^7
skaitmenuKiekisSkaiciuje( 1e-6 );

console.log('dar neisspresti variantai');
skaitmenuKiekisSkaiciuje( 1e30 );
skaitmenuKiekisSkaiciuje( 1e-66 );


console.log('--------------');
console.log('DIDZIAUSIAS SKAICIUS');

function didziausiasSkaiciusSarase( list ) {
    if ( typeof(list) !== 'object' ) {
        console.log('Klaida: reiksme turi buti saraso tipo.');
        return 'Klaida: reiksme turi buti saraso tipo.';
    }
    if ( list.length === 0 ) {
        console.log('Pateiktas sąrašas negali būti tuščias.');
        return 'Pateiktas sąrašas negali būti tuščias.';
    }

    let didziausias = -Infinity;

    // logika
    for ( let i=0; i<list.length; i++ ) {
        if ( !isFinite(list[i]) ) {
            continue;
        }
        if ( list[i] > didziausias ) {
            didziausias = list[i];
        }
    }

    if ( didziausias === -Infinity ) {
        console.log('Sarase nera nei vieno baigtinio skaiciaus.');
        return 'Sarase nera nei vieno baigtinio skaiciaus.';
    }

    console.log(list, didziausias);
    return didziausias;
}

didziausiasSkaiciusSarase( 'pomidoras' );
didziausiasSkaiciusSarase( [] );

didziausiasSkaiciusSarase( [ 1 ] );
didziausiasSkaiciusSarase( [ 1, 2, 3 ] );
didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] );
didziausiasSkaiciusSarase( [ -5, 14, 0, 18, 78, 54, 33 ] );
didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] );
didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] );
didziausiasSkaiciusSarase( [ 1, 2, 3, 'asdasd', 4 ] );
didziausiasSkaiciusSarase( [ -Infinity, 'asd', 2, Infinity, 3, 'asdasd', 4 ] );
didziausiasSkaiciusSarase( [ 'asd' ] );
didziausiasSkaiciusSarase( [ -Infinity, -Infinity, -Infinity ] );