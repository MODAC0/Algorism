/*  
todo 문제
! 주의사항
**/
function queuePrinter(bufferSize, capacities, documents) {
  // 1. documents의 첫번째 인자를 buffer에 담는다
  let buffer = [documents[0]];
  let second = 1;
  const bufferSize = buffer.reduce((acc, cur) => acc + cur);
  const documentsLength = documents.length;

  // 2. bufferSize가 2 이상이면 buffer를 shift하고 사이즈만큼 걸린 시간를 추가한다.
  // 3. if buffer의 length가 bufferSize보다 작고 capacities가 buffer의 용량+documents의 용량 이상이면 버퍼에 인자를 넣고 도큐먼트에 인자를 뺀다.
  // 4. else if buffer의 length가 bufferSize 이상이거나 capacities가 buffer의 용량+documents의 용량보다 작으면 continue;
  for (i = 0; i < documentsLength; i++) {
    if (bufferSize > 1) {
      second += bufferSize;
      if (
        buffer.length < bufferSize &&
        capacities >= bufferSize + documents[0]
      ) {
        buffer.push(documents.shift());
      }
    }
  }
}

let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output); // 8
