/**
 * 
 * @param {string} string1 
 * @param {string} string2 
 */
export default function compareStrings(string1, string2) {
    if (string1 === "" || string2 === "") return false;

    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    if (string1.length > string2.length) {
        // que el mas corto sea el primer
        let t = string1;
        string1 = string2;
        string2 = t;
    }

    if (string2.includes(string1)) return true;
    return false;
}