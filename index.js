function makeKey(lengthWorld) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < lengthWorld; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function searchArray(nameKey, valueKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i][nameKey] === valueKey) {
            return { ...myArray[i], urut: i };
        }
    }
}

export { makeKey, searchArray }