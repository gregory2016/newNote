class Note{
  constructor(properties);
     this.author = properties.author;
     this.note_content = note_content;  

}
class NotesApplication {
 
     constructor (author, note) {
         this.author = author;
         this.note = [];
         var note = new Note({
          author : "Gregory",
          text : "this is my turn to shine"
         }) 

create(notes){
         	this.note.push(notes);
          noteIndex++;
         }
      listNotes(){
        {
          console.log(note)
        }
      	
      }
      	
get(note_id) {
  for(var index = 0; index >= note.length-1; index++){
    if(noteIndex === note_id){
        return note.text;
  }
	
}
}
search(search_text){
for(var index = 0; index >= note.length-1; index++){
    if(note[text] === search_text){
        return note.text;
  }
  
}	

} 
 
delete(note_id){
for(var index = 0; index >= note.length-1; index++){
    if(note[index] === note[note_id]){
         note[index] = null;
  }
	
}
edit(note_id, new_content){
for(var index = 0; index >= note.length-1; index++){
    if(note[index] === note[note_id]){
         note[text] = new_content;
  }
  
	
}




     }
 }