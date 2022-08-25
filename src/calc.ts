

export function add(number: string): number {
  if(hasDelimeter(number)){
    return sum(number.substring(4), new RegExp(number.substring(2,3)))
  } else {
    return sum(number)
  }
}

function sum(numbers: string, delimeter: RegExp=/[,\n]/) {
  const parts = numbers.split(delimeter).map(numberString => parseInt(numberString) | 0)

  return parts.reduce((prev, curr) => prev + curr, 0)
}

function hasDelimeter(number: string): boolean {
  return number.startsWith("//")
}