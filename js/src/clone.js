import { cloneDeep } from 'lodash-es'

/**
* @title clone
* @name clone
* @summary Creates a deep (recursive) clone of the value.
*
* @description Creates a deep (recursive) clone of the value. Uses lodash-es cloneDeep.
*
* @param {any} value The value to clone.
* @return {any} Returns exact (recursive) clone of the value.
*
* @implem js
*
* @example clone(condition, message)
* @example <caption>Example usage of clone function.</caption>
*
* // returns [{ 'a': 1 }, { 'b': 2 }]
* clone([{ 'a': 1 }, { 'b': 2 }])
*
*/


export default function clone(value) {
  return cloneDeep(value)
}
