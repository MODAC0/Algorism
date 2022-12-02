function solution(babbling) { // ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"] (5)
    var answer = 0;
    let words = ["aya", "ye", "woo", "ma"];// (4)
    for (i=0; i<babbling.length; i++) { // 5
        for (j=0; j<words.length; j++) { // 4
            if (babbling[i].includes(words[j])) {
                // 받은 배열 안에 찾는 배열 요소가 있을 때 
                if (babbling[i].slice(0,words[j].length) === babbling[i].slice(words[j].length,words[j].length*2)) break;
                babbling[i] = babbling[i].replace(words[j],"");
                j--;                
            }
            if (babbling[i].length === 0) {
            answer++;
            break
            }
        }
    }
    return answer;
}

console.log (solution (["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));