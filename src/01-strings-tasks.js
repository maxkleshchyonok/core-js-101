/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1.concat('', value2);
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const arr = value.split(' ');
  return arr[1].concat(` ${arr[2].replace(/!/g, '')}`);
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  return value.repeat(parseInt(count, 10));
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return str.replace(/[<>]/g, '');
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  let str = '';
  for (let i = 1; i <= height; i += 1) {
    for (let j = 1; j <= width; j += 1) {
      if (i === 1) {
        if (j === 1) {
          str += '┌';
        } else if (j > 1 && j < width) {
          str += '─';
        } else if (j === width) {
          str += '┐\n';
        }
      } else if (i !== 1 && i !== height) {
        if (j === 1) {
          str += '│';
        } else if (j > 1 && j < width) {
          str += ' ';
        } else if (j === width) {
          str += '│\n';
        }
      } else if (i === height) {
        if (j === 1) {
          str += '└';
        } else if (j !== 1 && j !== width) {
          str += '─';
        } else if (j === width) {
          str += '┘\n';
        }
      }
    }
  }
  return str;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  // for (let i = 0; i < str.length; i += 1) {
  //   if (str[i] === 'a') {
  //     str.replace('a', 'n');
  //   }
  //   if (str[i] === 'b') {
  //     str.replace('b', 'o');
  //   }
  //   if (str[i] === 'c') {
  //     str.replace('c', 'p');
  //   }
  //   if (str[i] === 'd') {
  //     str.replace('d', 'q');
  //   }
  //   if (str[i] === 'e') {
  //     str.replace('e', 'r');
  //   }
  //   if (str[i] === 'f') {
  //     str.replace('f', 's');
  //   }
  //   if (str[i] === 'g') {
  //     str.replace('g', 't');
  //   }
  //   if (str[i] === 'h') {
  //     str.replace('h', 'u');
  //   }
  //   if (str[i] === 'i') {
  //     str.replace('i', 'v');
  //   }
  //   if (str[i] === 'j') {
  //     str.replace('j', 'w');
  //   }
  //   if (str[i] === 'k') {
  //     str.replace('k', 'x');
  //   }
  //   if (str[i] === 'l') {
  //     str.replace('l', 'y');
  //   }
  //   if (str[i] === 'm') {
  //     str.replace('m', 'z');
  //   }
  //   if (str[i] === 'n') {
  //     str.replace('n', 'a');
  //   }
  //   if (str[i] === 'o') {
  //     str.replace('o', 'b');
  //   }
  //   if (str[i] === 'p') {
  //     str.replace('p', 'c');
  //   }
  //   if (str[i] === 'q') {
  //     str.replace('q', 'd');
  //   }
  //   if (str[i] === 'r') {
  //     str.replace('r', 'e');
  //   }
  //   if (str[i] === 's') {
  //     str.replace('s', 'f');
  //   }
  //   if (str[i] === 't') {
  //     str.replace('t', 'g');
  //   }
  //   if (str[i] === 'u') {
  //     str.replace('u', 'h');
  //   }
  //   if (str[i] === 'v') {
  //     str.replace('v', 'i');
  //   }
  //   if (str[i] === 'w') {
  //     str.replace('w', 'j');
  //   }
  //   if (str[i] === 'x') {
  //     str.replace('x', 'k');
  //   }
  //   if (str[i] === 'y') {
  //     str.replace('y', 'l');
  //   }
  //   if (str[i] === 'z') {
  //     str.replace('z', 'm');
  //   }
  // }
  const alp = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < alp.length; j += 1) {
      if (str[i] === alp[j]) {
        if (j <= 13) {
          if (str[i] === str[i].toLowerCase()) {
            str.replace(str[i], alp[j + 13]);
          } else if (str[i] === str[i].toUpperCase()) {
            str.replace(str[i], alp[j + 13].toUpperCase());
          }
        } else if (j > 13) {
          if (str[i] === str[i].toLowerCase()) {
            str.replace(str[i], alp[j - 13]);
          } else if (str[i] === str[i].toUpperCase()) {
            str.replace(str[i], alp[j - 13].toUpperCase());
          }
        }
      }
    }
  }
  return str;
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (typeof value === 'string' || value instanceof String) {
    return true;
  } return false;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const deck = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];
  const findCard = (el) => el === value;
  return deck.findIndex(findCard);
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
