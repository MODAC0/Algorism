function solution(rsp) {
    let arr = [...rsp].map(el=>{
        if (el === '0') return el = '5';
        if (el === '5') return el = '2';
        if (el === '2') return el = '0';
    })
    return arr.join('')
}
    console.log(solution("205"))
