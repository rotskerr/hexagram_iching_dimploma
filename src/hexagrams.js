const mutateLine = (l) => l === 6 ? 7 : (l === 9 ? 8 : l)

export const mutate = (h) => h.map(mutateLine)

const toBit = (l) => l === 0 || l === 6 || l === 8 ? 0 : 1

// eslint-disable-next-line no-mixed-operators
const hexagram2bin = (h) => h.map(toBit).reduce((a, v, i) => a | v << (5 - i), 0)

const trigramNumber = (t) => {
  // eslint-disable-next-line default-case
  switch (t) {
    case 0b111:
      return 0
    case 0b000:
      return 1
    case 0b001:
      return 2
    case 0b010:
      return 3
    case 0b100:
      return 4
    case 0b110:
      return 5
    case 0b101:
      return 6
    case 0b011:
      return 7
  }
}

const above = (h) => h >> 3

const below = (h) => h & 0b111

const hexagramNumbers = []

hexagramNumbers[0] = [1,   11,  34,   5,  26,   9,  14,  43]
hexagramNumbers[1] = [12,   2,  16,   8,  23,  20,  35,  45]
hexagramNumbers[2] = [25,  24,  51,   3,  27,  42,  21,  17]
hexagramNumbers[3] = [6,    7,  40,  29,   4,  59,  64,  47]
hexagramNumbers[4] = [33,  15,  62,  39,  52,  53,  56,  31]
hexagramNumbers[5] = [44,  46,  32,  48,  18,  57,  50,  28]
hexagramNumbers[6] = [13,  36,  55,  63,  22,  37,  30,  49]
hexagramNumbers[7] = [10,  19,  54,  60,  41,  61,  38,  58]

export const number = (h) => hexagramNumbers[trigramNumber(below(hexagram2bin(h)))][trigramNumber(above(hexagram2bin(h)))]

const names = []

const texts = []

export const name = (n) => names[n]

export const text = (n) => texts[n].replace(/(^|[^\n])\n(?!\n)/g, '$1 ')

