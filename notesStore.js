class NotesStore {
    //add your code here
    constructor(){
        this.collection = [];
    }

    addNote(state, name){
        if (!name) return "Error: Name cannot be empty";
        let valid = this.isValid(state);
        if (valid){
            let newNote = {
                state: state,
                name: name
            }
            this.collection.push(newNote);
        } else {
            return `Error: Invalid state ${state}`;
        }
    }

    getNotes(state){
        let valid = this.isValid(state);
        if (!valid) return `Error: Invalid state ${state}`;
        let arr = this.collection.map( n => {
            if (n.state === state) return n.name;
        });
        return arr.filter( n => n != undefined);

    }

    isValid(state){
        return state === "active" || state === "completed" || state === "others" ? true : false;
    }
}

let nS = new NotesStore();
console.log(nS.addNote("completed", "Be cool"));
console.log(nS.addNote("completed", "Code"));
console.log(nS.addNote("active", "Workout"));
console.log(nS.addNote("active", "Go to work"));
console.log(nS.addNote("blah", "fdsaf"));
console.log(nS.addNote("completed", ""));
console.log(nS.getNotes("completed"));
console.log(nS.getNotes("others"));

