function followingDay(day) {
  let arr = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  let inx = arr.indexOf(day);
  if (day === "일요일") return arr[0];
  if (inx >= 0) return arr[inx + 1];
  if (inx === -1) return "올바른 요일이 아닙니다";
}

let output = followingDay("월요일");
console.log(output); // --> '화요일'

output = followingDay("일요일");
console.log(output); // --> '월요일'

output = followingDay("월");
console.log(output); // --> '올바른 요일이 아닙니다'

output = followingDay(100);
console.log(output); // --> '올바른 요일이 아닙니다'
