let oddFriend = (names) => {

    for(const name of names){
        if(name.length % 2 == 1){ 
            return name; 
        }
    }
}


const friendsName = ['mahmud', 'jalal', 'kalam', 'tomal', 'jashim', 'malek', 'kawser'];
const result = oddFriend(friendsName);
console.log(result);
// console result: jalal