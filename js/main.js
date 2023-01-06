import kanbanAPI from "./api/kanbanAPI.js";
import Kanban from "./view/Kanban.js";

// console.log(kanbanAPI.getItems(1));
// console.log(kanbanAPI.insertItem(1, 'I am new!'))
/* kanbanAPI.updateItem(72716, {
    columnId: 1,
    position: 0,
    content: 'I have changed'
}); */

// kanbanAPI.deleteItem(72716);

new Kanban(
    document.querySelector('.kanban')
);