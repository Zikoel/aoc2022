import { moveOnStaks } from "./day5"

describe( '', () => {
  it( '', () => {

    const staks = [
      ['Z', 'N'],
      ['M', 'C', 'D'],
      ['P']
    ]

    moveOnStaks(staks, 2, 1, 2, '9000')

    expect(staks[2]).toHaveLength(3)
    expect(staks[2][0]).toBe('P')
    expect(staks[2][1]).toBe('D')
    expect(staks[2][2]).toBe('C')

    expect(staks[1]).toHaveLength(1)
    expect(staks[1][0]).toBe('M')
  })
})