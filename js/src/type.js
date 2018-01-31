export default function type (value) {
  let type_ = typeof value

  if (value === null) {
    return 'null'
  } else if (type_ === 'boolean') {
    return 'boolean'
  } else if (type_ === 'number') {
    let isInteger = false
    if (value.isInteger) isInteger = value.isInteger()
    else isInteger = (value % 1) === 0
    return isInteger ? 'integer' : 'number'
  } else if (type_ === 'string') {
    return 'string'
  } else if (type_ === 'object') {
    if (value.constructor === Array) {
      let subType
      for (let item of value) {
        let itemType = type(item)
        if (!subType) subType = itemType
        else {
          if (subType === 'number' && itemType === 'integer') {
            subType = 'number'
          } else if (itemType !== subType) {
            return 'array'
          }
        }
      }
      return subType ? 'array[' + subType + ']' : 'array'
    } else {
      if (value.type) return value.type
      else return 'object'
    }
  } else {
    return 'unknown'
  }
}
