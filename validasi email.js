function cek(str) {

    var a = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '@') {
            a++
        }
    }
    //ngambil nilai belakang
    var tampung = ''
    for (let j = str.length - 1; j >= str.length - 4; j--) {
        tampung += str[j]
    }
    //reverse
    var tampung1 = ''
    for (let k = tampung.length - 1; k >= 0; k--) {
        tampung1 += tampung[k]
    }
    console.log(tampung1)
    if (a > 0 && tampung1 == '.com') {
        return `email valids`
    } else if (a > 0 && tampung1 == 'o.id') {
        return `email valids`
    }

    else {
        return `email invalid`
    }

}

console.log(cek('apa@gmail.com'))
console.log(cek('apa@gmai'))
console.log(cek('apa@gmail.co.id'))


    // var a = 'apa aja1.com'

    // var tampung = ''
    // for (let i = a.length - 1; i >= a.length - 4; i--) {
    //     tampung += a[i]

    // }
    // var tampung1 = ''
    // for (let j = tampung.length - 1; j >= 0; j--) {
    //     tampung1 += tampung[j]

    // }

    // console.log(tampung1)