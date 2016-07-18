/**
 * This is where you have to code.
 *
 * See javadoc and associated unit tests to understand what is expected
 *
 * @author tiry
 *
 */
 var Tester = {
  /**
   * input will be a string, but it may not have a file extension. return the file
   * extension (with no period) if it has one, otherwise null
   *
   * @param file
   * @return null if input is null or filename has no extension and the
   *         extension without the period otherwise
   */
   getFileNameExtension: function (file) {
    // XXX implement me !
    var splitFileName = file.split('.');
    var extension = splitFileName.length > 1 ? splitFileName[splitFileName.length - 1] : null;
    return extension
},

  /**
   * return the longest string contained inside the input array
   *
   * @param values input Array of values
   * @return null if input is null and the longest string otherwise
   */
   getLongestString: function (values) {
   	var subArrCheck = function(arr, longest){
   		var longestStr;
   		var longestStrLeng = longest
   		arr.forEach(function(value) {
   			if (Array.isArray(value) && subArrCheck(value, longest)){
   				longestStr = subArrCheck(value, longestStrLeng);
   				longestStrLeng = longestStr.length;
   			} else if (typeof value === 'string' && value.length >= longestStrLeng) {
   				longestStr = value;
   				longestStrLeng = value.length;
   			}
   		})
   		return longestStr;
   	};
   	var longestStr;
   	var longestStrLeng = 0;
   	values.forEach(function(value) {

   		if (Array.isArray(value) && subArrCheck(value, longestStrLeng)){
   			longestStr = subArrCheck(value, longestStrLeng);
   			longestStrLeng = longestStr.length;
   		} else if (typeof value === 'string' && value.length >= longestStrLeng) {
   			longestStr = value;
   			longestStrLeng = value.length;
   		}
   	})
   	return longestStr;
   },

  /**
   * Returns true is both arrays contains the same values
   *
   * @param arr1 first Array to test
   * @param arr2 second Array to test
   * @return true if both arrays contains the same values
   */
   areArraysEquals: function (arr1, arr2) {
   	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
   		if (arr1 === arr2) {
   			return true;
   		} else {
   			return false;
   		}
   	}
   	var sortedArr1 = arr1.sort();
   	var sortedArr2 = arr2.sort();
   	if (sortedArr1.find(function(idx, ele) {
   		return sortedArr2[idx] !== ele;
   	})) {
   		return false;
   	} else {
   		return true;
   	}
   },

  /**
   * Compress the input string with a very dummy algorithm : repeated letters
   * are replaced by {n}{letter} where n is the number of repetition and
   * {letter} is the letter. n must be superior to 1 (otherwise, simply output
   * the letter)
   *
   * @param str the input string that can only contains letters
   * @return the compressed String or null if the input is null
   */
   getCompressedString: function (str) {
   	if (!str) {
   		return null;
   	}
   	var strArray = str.split('');
   	var resultArray = [];
   	var count = 0;
   	
   	for (var x = 0; x < str.length; x++) {
   		if (strArray[x] === strArray[x+1]) {
   			count++;
   		} else {
   			resultArray.push(count === 0 ? strArray[x] : count+1 +strArray[x]);
   			count = 0;
   		}
   	}
   	return resultArray.join('');
   },

  /**
   * Sort the input array of string based on lexicographic order of the
   * corresponding compressed string
   *
   * @param arr the Array to sort
   * @return the sorted array
   */
   getSortedArray: function (arr) {
   	var origArrLookup = {};

   	var compressedStrArr = arr.map(function(ele, idx) {
   		var compressedStr = getCompressedString(ele);
   		origArrLookup[compressedStr] = idx;
   		return getCompressedString(ele);
   	})
   	var sortedCompressedStrArr = compressedStrArr.sort();
   	var returnArr = [];
   	sortedCompressedStrArr.forEach(function(ele) {
   		returnArr.push(arr[origArrLookup[ele]]);
   	})
   	return returnArr;
   }
};
