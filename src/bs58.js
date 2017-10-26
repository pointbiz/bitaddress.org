// Base58 encoding/decoding
// Originally written by Mike Hearn for BitcoinJ
// Copyright (c) 2011 Google Inc
// Ported to JavaScript by Stefan Thomas
// Merged Buffer refactorings from base58-native by Stephen Pair
// Copyright (c) 2013 BitPay Inc

var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
var ALPHABET_MAP = {}
for(var i = 0; i < ALPHABET.length; i++) {
  ALPHABET_MAP[ALPHABET.charAt(i)] = i
}
var BASE = 58

function bs58_encode(buffer) {
  if (buffer.length === 0) return ''

  var i, j, digits = [0]
  for (i = 0; i < buffer.length; i++) {
    for (j = 0; j < digits.length; j++) digits[j] <<= 8
    digits[digits.length - 1] += buffer[i]

    var carry = 0
    for (j = digits.length - 1; j >= 0; j--){
      digits[j] += carry
      carry = (digits[j] / BASE) | 0
      digits[j] %= BASE
    }

    while (carry) {
      digits.unshift(carry)
      carry = (digits[0] / BASE) | 0
      digits[0] %= BASE
    }
  }

  // deal with leading zeros
  for (i = 0; i < buffer.length - 1 && buffer[i] == 0; i++) digits.unshift(0)

  return digits.map(function(digit) { return ALPHABET[digit] }).join('')
}

function bs58_decode(string) {
  if (string.length === 0) return 0

  var input = string.split('').map(function(c){
    //assert.notEqual(ALPHABET_MAP[c], undefined, 'Non-base58 character')
    return ALPHABET_MAP[c]
  })

  var i, j, bytes = [0]
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < bytes.length; j++) bytes[j] *= BASE
    bytes[bytes.length - 1] += input[i]

    var carry = 0
    for (j = bytes.length - 1; j >= 0; j--){
      bytes[j] += carry
      carry = bytes[j] >> 8
      bytes[j] &= 0xff
    }

    while (carry) {
      bytes.unshift(carry)
      carry = bytes[0] >> 8
      bytes[0] &= 0xff
    }
  }

  // deal with leading zeros
  for (i = 0; i < input.length - 1 && input[i] == 0; i++) bytes.unshift(0)

  return bytes
}