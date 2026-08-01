import { describe, it, expect } from 'vitest'
import * as pkg from '../index'

describe('包骨架', () => {
  it('index 可被导入', () => {
    expect(pkg).toBeTypeOf('object')
  })
})
