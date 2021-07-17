

function saveUser(user){
    // load old data, 
    let data = readUsers();

    //merge, 
    data.push(user);
    
    //and then save


    let val = JSON.stringify(data); //parses what you pass into a string, converts the object
    localStorage.setItem("data", val);
}


//setItem is a key -> value system, using strings
// key is "users" and value is the array
//JSON JS object Notation -- 

function readUsers() {
    let data = localStorage.getItem("data");
    if (!data) {
        return [];
    }else{
    let list = JSON.parse(data); //parse string back to object
    return list;
    }
}

function clearUsers() {
    localStorage.removeItem("data");
    location.reload();
    
}