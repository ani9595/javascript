const reverse = (str) => {
    let stringArr = str.split("");
    let newString = [];
    //console.log(stringArr);
    for(let i=str.length; i>=0; i--) {      
        //newString += str[i]; //It is using list
        newString.push(str[i]); //This is using array manipulation

        //Suppose we want to remove empty strings
        if(str[i] === " ") {
            newString.pop(str[i]);
        }
    }
    return newString.join('');
}

console.log(reverse("Many Many happy returns of the day"));