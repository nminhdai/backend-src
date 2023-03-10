export function rotateMatrix(matrix: number[][]): number[][] {
  const n = matrix.length;
  const rotated: number[][] = [];

  for (let i = 0; i < n; i++) {
    rotated.push([]);
    for (let j = 0; j < n; j++) {
      rotated[i].push(matrix[j][n - 1 - i]);
    }
  }

  return rotated;
}
