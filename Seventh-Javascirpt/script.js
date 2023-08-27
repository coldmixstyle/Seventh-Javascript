console.log("Test");

const first_person = {
    firstName: "Canberk",
    age: 23,
    isStudent: false,
    grades:{},
    adresess:[],
    sayHello: function(isim){
    console.log("Merhaba"+isim)
    },
bornYear:function(){
    return 2023 - this.age; // this on ek olarak first object demek içinde
},
getFullName:function(){
//return this.firstName






}
}
console.log(first_person.firstName)

console.log(first_person.sayHello("Ahmet"))

function selamSoyle(isim, yas) {
    console.log("Merhaba" + isim + "Yasi"+ yas)
}
                                                      //fonksionda sıralaması mevcüt (isim sonra yas)
selamSoyle("Ahmet",25);


function sayininKaresiniAl(sayi){
    return sayi*sayi;
}

const altinin_karesi = sayininKaresiniAl(6) // 6 * 6 = 36
console.log("Altinin karesinin sonucu" , altinin_karesi)

console.log("Dogum yili:", first_person.bornYear())


///KÖTÜ YAPI AMA ÇALIŞIR //////
const kullanicininAdi = first_person.firstName;
const kullanicinSoyadi = first_person.lastName;
const kullanicinYasi = first_person.age;
const kullaniciOgrenciMu = first_person.isStudent;

console.log(kullanicininAdi + kullanicinSoyadi + kullanicinYasi + kullaniciOgrenciMu)

//const {firstName , lastName , age , isStudent} = first_person
// const firstName = first_person.firstName





const firstName = first_person.firstName;
const lastName = first_person.lastName;
const age = first_person.age;
const isStudent = first_person.isStudent;

console.log(kullanicininAdi + kullanicinSoyadi + kullanicinYasi + kullaniciOgrenciMu)

const kopyaObje = {...first_person};           //SPREAD OPERATOR denir 
kopyaObje.firstName = "Ahmet";

delete kopyaObje.firstName    // Belirli bir veri silebilir.   


console.log("kopyalanmis obje",kopyaObje)







