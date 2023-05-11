/** 무게가 각각 다른 트럭이 일정 길이의 다리를 지날 때 걸리는 최소한의 시간을 return하세요. */

//! 다리를 건너는 트럭의 무게 + 진입시킬 트럭의 무게 <= 다리가 견디는 무게
//! 다리에 올릴 수 있는 트럭의 수 <= 다리의 길이

//? 다리에 트럭을 진입시키고
//? 남은 다리 거리를 다리의 길이로 업데이트
//? 총 무게인 weight에 방금 진입시킨 트럭의 무게 ++

function solution(bridgeLength, weight, truckWeights) {
  let bridge = []; // Queue=>다리를 건너는 트럭의 무게 배열
  let totalWeight = 0; // 다리 위의 트럭의 무게를 저장할 변수
  let time = 0; // 경과시간을 저장할 변수

  // 다리를 지나는 트럭이 다 지나면 리턴
  while (bridge.length > 0 || truckWeights.length > 0) {
    // 동작마다 1초씩 증가
    time++;
    for (let i = 0; i < bridge.length; i++) {
      bridge[i][1]++;
    }

    if (bridge[0] && bridge[0][1] === bridge.length) {
      const truck = bridge.shift();
      totalWeight -= truck[0];
    }

    // 대기 트럭이 있고 다리에 트럭을 올릴 수 있다면 다리에 트럭을 올린다.
    if (
      truckWeights.length > 0 &&
      totalWeight + truckWeights[0] <= weight &&
      bridge.length < bridgeLength
    ) {
      // 다리에 트럭을 진입
      let truckWeight = truckWeights.shift();
      bridge.push([truckWeight, 0]);
      totalWeight += truckWeight;
    }
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
