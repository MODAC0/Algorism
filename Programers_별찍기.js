function solution(my_string, letter) {
    for (el of my_string){
        my_string.replace(letter,'');
    }
    return my_string
}
    solution("aldsFnlasdnfoaen",'F')