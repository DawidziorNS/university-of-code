const obj = {
    yourSignature: ""
};

const signYourName = (obj) => {
    Object.seal(obj)

    obj.yourSignature = "Whatever"
    obj.spouseSignature = "Nice try"

    return obj

}

console.log(signYourName(obj))