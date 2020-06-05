// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };

  return task;
}

//DRIVER CODE
const task1 = newTask("Clean Cat Litter", "Take all the ish out of the litter box");
const task2 = newTask("Do Laundry", "aww mannn");
const tasks = [task1, task2];

task1.logState(task1); // Clean Cat Litter has not been completed
task1.markCompleted(task1);
task1.logState(task1); // Clean Cat Litter has been completed

console.log(tasks);
