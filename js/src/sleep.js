import assert from './assert'
import is_number from './is_number'

export default function sleep(seconds) {
  assert(is_number(seconds), 'parameter `seconds` must be a number')

  const start = new Date().getTime()
  while (new Date().getTime() < start + seconds * 1000);

  return seconds
}
