function funcMath(x) {
    return Math.pow(x, 2) - x + 1
}

function rightRimannSum(func, a, b, int_num) {
    let delt = (b - a) / int_num
    let res = 0
    for (i = 1; i < int_num; i++) {
        res += func(a + delt*i)
    }
    res += func(b)
    return res * delt
}

let a
let b
while(true){
    let arr = prompt('Введите начало и конец диапазона игтегрирования через пробел:').split(" ")
    a = Number(arr[0])
    b = Number(arr[1])
    // const test =  (a === NaN) || (b === NaN)

    if (isNaN(a) || isNaN(b) || (a > b)){
        alert('НЕПРАВИЛЬНЫЙ ВВОД')
    } else {
        break
    }
}
let prev_res = rightRimannSum(funcMath, a, b, 1)
let flag = false
for (i = 2; i < 10000; i *= 2) {
    let new_res = rightRimannSum(funcMath, a, b, i)
    if (Math.abs(prev_res - new_res) < 0.01){
        alert(`шаг ${i}, результат = ${rightRimannSum(funcMath, a, b, i)}`)
        flag = true
        break
    }
    prev_res = new_res
}
if (!flag) {
    alert(`шаг 10000, результат = ${rightRimannSum(funcMath, a, b, 10000)}`)
}


