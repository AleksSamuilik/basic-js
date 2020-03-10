const   START_CODE_CHAR = 65,
        LENGTH = 26,
        CRYPT = /[A-Za-z]/;

class VigenereCipheringMachine {

    constructor (directCoder = true) {
        this.direct = directCoder
    }
    
    charToCode(code) {
        return String.fromCharCode(code + START_CODE_CHAR);
    }

    codeToChar(char) {
        return char.toUpperCase().charCodeAt(char) - START_CODE_CHAR;
    }

    
    encrypt(string, key) {
        if (!string || !key) {
          throw new Error();
        }

        let keyCount = 0,
            keyLength = key.length,
            encryptString = '';

        const encryptChar = (cryptChar) => {
            if (CRYPT.test(cryptChar)) {
                encryptString += this.charToCode((this.codeToChar(cryptChar) + this.codeToChar(key[ keyCount++ % keyLength ])) % LENGTH);
            } else {
                encryptString += cryptChar;
            }
        }
       
        if (this.direct) {
            for (let i = 0, length = string.length; i < length; i++) {
                let cryptChar = string[i];
                encryptChar(cryptChar);
            }
        } else {
            for (let i = string.length - 1; i >= 0; i--) {
                let cryptChar = string[i];
                encryptChar(cryptChar);
            }
        }
        return encryptString;
    }

   decrypt(string, key) {
        if (!string || !key) {
          throw new Error();
        }

            let keyCount = 0,
            keyLength = key.length,
            decryptString = '';

        const decryptChar = (cryptChar) => {
            if (CRYPT.test(cryptChar)) {
                decryptString += this.charToCode((26 + this.codeToChar(cryptChar) - this.codeToChar(key[ keyCount++ % keyLength ])) % LENGTH);
            } else {
                decryptString += cryptChar;
            }
        }

        if (this.direct) {
            for (let i = 0, length = string.length; i < length; i++) {
                let cryptChar = string[i];
                decryptChar(cryptChar);
            }
        } else {
            for (let i = string.length - 1; i >= 0 ; i--) {
                let cryptChar = string[i];
                decryptChar(cryptChar);
            }
        }

        return decryptString;
    }
}


module.exports = VigenereCipheringMachine;