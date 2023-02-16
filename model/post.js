module.exports = {

    posts : [
        {
            id:"ksasaskaska",
            title:"Meu mural",
            description : "Descrição teste"
        } , 

        {
            id:"123",
            title:"Mural a ser deletado",
            description : "Descrição teste"
        } , 

        {
            id:"456",
            title:"Meu mural",
            description : "Descrição teste"
        } , 
    ],

    getAll() {
        return this.posts
    },

    newPost(title , description) {
        this.posts.push({id: generateID() , title , description});
    } ,

    deletePost (id) {
        for(let i = 0;i < this.posts.length ; i++) {
            if(this.posts[i].id == id) {
                this.posts.splice(this.posts[i] , 1);           
            }
        }
    }
}

function generateID () {
    return Math.random().toString(36).substring(2,9);
}