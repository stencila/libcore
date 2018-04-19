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
* @example clone(condition, message)
* @example <caption>Example usage of clone function.</caption>
*
* @example clone([{ 'a': 1 }, { 'b': 2 }])
* @example returns [{ 'a': 1 }, { 'b': 2 }]
*/


export default function clone(value) {
  return cloneDeep(value)
}
