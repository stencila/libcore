import assert from './assert'
import is_number from './is_number'


/**
+@title sleep
+@name sleep
+@summary Delay execution for a specified time interval (in seconds).
+
+@description
+
+Delay execution for a specified time interval (in seconds).
+In Javascript this function is implemented in blocking, CPU-hogging way.
+
+@param {number}  seconds Duration of delay
+@return {number} Duration of delay
+
+@implem js
+
+@example sleep(seconds)
+@example <caption>Example usage of sleep function.</caption>
+@example sleep(20)
+ */


export default function sleep(seconds) {
  assert(is_number(seconds), 'parameter `seconds` must be a number')

  const start = new Date().getTime()
  while (new Date().getTime() < start + seconds * 1000);

  return seconds
}
