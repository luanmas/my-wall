    
   function deletePost() {
    let id = document.getElementById("id-post").value;
    let postToDelete = {id};
    console.log(postToDelete);
    const options = {
        method:"DELETE",
        headers: new Headers({'content-type' : 'application/json'}),
        body: JSON.stringify(postToDelete)
    }

    fetch("http://192.168.18.9:3000/api/del" , options).then(res => {
        console.log(res);
        document.getElementById("id-post").value = ""
    })
}