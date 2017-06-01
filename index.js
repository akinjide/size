"use strict";

module.exports = function size(opts, callback) {
  const options = {}
  let bytes

  if (typeof opts === 'function') {
    callback = opts
  }

  if (typeof opts === 'object') {
    Object.assign(options, opts)
  }

  bytes = options.bytes || 0;

  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const dm = options.decimals || 3
    const k = 1000

    if (bytes == 0) {
      resolve('0 Byte')
      return callback(null, '0 Byte')
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    const formatSize = `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`

    resolve(formatSize)
    return callback(null, formatSize)
  })
}