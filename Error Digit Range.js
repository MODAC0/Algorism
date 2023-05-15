/** 앨리스와 밥이 각각 HackerRank에서 문제를 만들었습니다. 리뷰어는 문제 명확성, 독창성 및 난이도 세 가지 범주에서 1에서 100까지의 점수로 평가합니다.

앨리스의 도전 과제에 대한 등급은 삼중 배열 a = (a[0], a[1], a[2])이고, 밥의 도전 과제에 대한 등급은 삼중 배열 b = (b[0], b[1], b[2])입니다.

작업은 a[0]과 b[0], a[1]과 b[1], a[2]와 b[2]를 비교하여 비교 점수를 찾는 것입니다.

a[i] > b[i]이면, 앨리스는 1 점을 받습니다.
a[i] < b[i]이면, 밥은 1 점을 받습니다.
a[i] = b[i]이면, 둘 다 점수를 받지 않습니다.
비교 점수는 각각의 사람이 얻은 총 점수입니다.

주어진 a와 b를 비교하여 각각의 비교 점수를 결정하십시오. */

function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }

  return [aliceScore, bobScore];
}

/** 해당 문제는 게임의 리더보드 점수와 플레이어의 점수를 비교하여 각각의 점수가 어느 랭크에 해당하는지를 찾는 문제입니다.

게임의 리더보드 점수는 내림차순으로 정렬되어 있으며, 동일한 점수를 가진 플레이어는 동일한 랭크를 부여받습니다. 
따라서, 각각의 점수는 해당 점수 이상의 점수를 가진 플레이어들의 수에 1을 더한 값이 해당하는 랭크입니다.

이 문제에서는 각각의 플레이어의 새로운 점수가 주어질 때, 그에 해당하는 랭크를 구해야 합니다. 
이를 위해서는 먼저 리더보드에서 중복된 점수를 제거한 후, 플레이어의 점수가 어느 위치에 들어갈지를 이진 탐색(Binary Search) 알고리즘을 이용하여 찾아낼 수 있습니다. 
이 때, 이진 탐색 알고리즘을 사용하면 시간복잡도를 O(log n)으로 줄일 수 있습니다. */

function climbingLeaderboard(ranked, player) {
  const uniqueRanked = [...new Set(ranked)].sort((a, b) => b - a);
  const playerRanks = [];
  let j = 0;
  for (let i = 0; i < player.length; i++) {
    while (j < uniqueRanked.length && uniqueRanked[j] > player[i]) {
      j++;
    }
    playerRanks.push(j + 1);
  }

  return playerRanks;
}

//! 03
//! 04
//! 05

function findRange(num) {
  let str = num.toString();
  console.log(typeof str);
  let min = str;
  let max = str;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let newStr = str.replace(new RegExp(i, "g"), j);
      if (newStr[0] !== "0") {
        min = Math.min(min, newStr);
        max = Math.max(max, newStr);
      }
    }
  }

  return max - min;
}

console.log(findRange(909));

function longestChain(words) {
  // 단어들을 길이순으로 정렬합니다.
  words.sort((a, b) => a.length - b.length);

  // 각 단어에서 만들 수 있는 가장 긴 문자열 체인의 길이를 저장할 객체를 초기화합니다.
  const chainLengths = {};
  let maxLength = 1;

  // 모든 단어들을 하나씩 탐색하면서 가장 긴 문자열 체인의 길이를 계산합니다.
  for (let word of words) {
    let length = 1;
    // 단어에서 한 글자씩 제거해가면서 만들 수 있는 다른 단어들을 검사합니다.
    for (let i = 0; i < word.length; i++) {
      const reducedWord = word.slice(0, i) + word.slice(i + 1);
      // 만약 제거한 글자가 원래 단어에 없고, 사전에 있는 단어라면 가장 긴 문자열 체인의 길이를 업데이트합니다.
      if (!chainLengths[reducedWord]) {
        continue;
      }
      length = Math.max(length, chainLengths[reducedWord] + 1);
    }
    chainLengths[word] = length;
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

console.log(longestChain(["a", "and", "an", "bear"]));

/** n개의 노드로 이루어진 무방향, 무가중치 트리가 주어집니다. 시작 노드는 1번 노드이며, 도착 노드는 n번 노드입니다. 
 * visitNodes 배열에 주어진 노드들을 모두 포함하는 경로를 구해야 합니다. 경로는 노드와 인접한 노드로 이동할 수 있으며, 각 노드를 여러 번 방문할 수 있습니다.

즉, 경로는 다음과 같습니다.

시작 노드는 1번 노드입니다.
도착 노드는 n번 노드입니다.
노드를 방문할 때, visitNodes 배열에 주어진 모든 노드를 적어도 한 번 이상 방문해야 합니다.
이 조건을 만족하는 최단 경로의 길이를 반환해야 합니다.

예를 들어, 다음과 같은 입력이 주어졌다면,

n = 5

edges = [[1, 2], [1, 3], [3, 4], [3, 5]]

visitNodes = [2, 4]

다음과 같은 최단 경로를 찾아야 합니다.

1 → 2 → 1 → 3 → 4 → 3 → 5

이때, 경로의 길이는 6입니다.

함수 minimumTreePath를 완성해야 하며, 다음과 같은 매개변수를 받습니다.

int n: 트리에 있는 노드의 수
int edges[n-1][2]: 연결된 노드의 2D 배열
int visitNodes[m]: 경로에 포함해야 하는 노드
함수는 최소 경로의 길이를 반환해야 합니다.

주어진 조건은 다음과 같습니다.

1 ≤ n ≤ 2 · 105
1 ≤ edges[i][0], edges[i][1] ≤ n
0 ≤ m ≤ max(0, n - 2)
2 ≤ visitNodes[i] ≤ n-1
visitNodes 배열의 요소들은 서로 다릅니다. */

function minimumTreePath(n, edges, visitNodes) {
  const graph = {}; // 인접 리스트로 그래프를 표현합니다.
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    graph[u].push(v);
    graph[v].push(u);
  }

  visitNodes.unshift(1); // 시작 노드 1 추가
  visitNodes.push(n); // 도착 노드 n 추가

  const queue = [];
  const visited = Array(n + 1).fill(false); // 방문 여부를 저장하는 배열
  const dist = Array(n + 1).fill(0); // 시작 노드부터의 거리를 저장하는 배열
  for (let i = 0; i < visitNodes.length; i++) {
    const node = visitNodes[i];
    queue.push(node);
    visited[node] = true;
  }

  while (queue.length > 0) {
    const curr = queue.shift();
    for (let i = 0; i < graph[curr].length; i++) {
      const next = graph[curr][i];
      if (!visited[next]) {
        visited[next] = true;
        dist[next] = dist[curr] + 1;
        queue.push(next);
      }
    }
  }

  // visitNodes 배열의 노드를 모두 포함하는 경로의 길이를 구합니다.
  let result = 0;
  for (let i = 1; i < visitNodes.length; i++) {
    const node = visitNodes[i];
    result += dist[node] - dist[visitNodes[i - 1]];
  }
  return result;
}

// Example usage:
const n = 5;
const edges = [
  [1, 2],
  [2, 3],
  [2, 4],
  [1, 5],
];
const visitNodes = [2, 4];
const result = minimumTreePath(n, edges, visitNodes);
console.log(result); // expected output: 7
