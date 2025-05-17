# TO DO List App
This app will recommend a task to do according to the time you have, or create a schedule based on the tasks required. This app was created to minimize procrastination and increase productivity. It also includes a boolean to store if the task was completed, to boost motivation and give a sense of accomplishment. 

## Global Variables: 
* taskName (string): Will store the task name
* taskPriority (string or number): Will store the importance of the task, measured by number or a string (hours)
* taskDueDate (number): A number for the due date in days
* Category (string): Work, school, personal, hobbies, religion etc. 
* taskEstimate (number): How long the task will take, an estimate (in hours).
* taskDescription (string): Optional description of the task.
* taskCompleted (boolean): Is task completed (?), this is for the feeling of accomplishment

## Logic Implementation
* This app uses if-else conditionals to suggest the best task to complete at a certain time
* (&& and || operations)

## Decision making process
### Sort by Urgency (1st), Deadline (2nd), Task estimate (3rd), Task category (4th)
* If task due date is tonight and the task is urgent (high priority) start the task as soon as possible
* If the task due date is in a few hours and is urgent start right away
* If the task is due the following day and is urgent, and there is no other pending task, begin this task
* If the task is low priority with no due date, do this task last 
* If no urgent or deadline tasks, but a work category do first
* If no urgency or deadline tasks, but a school category do second (after work)
* If no urgency or deadline tasks, but a hobby do fourth
* If no urgency or deadline tasks, but a religion one do third
* If task completed show as blue highlighted row

## Output
* Task to do first, second, third etc. for the day
* Or task to do within the time you have (?)



<!-- <div>
                <label for="">Task:</label>
                <input type="text" name="taskname" required>
            </div>
            <div>
                <label for="">Task Deadline:</label>
                <input type="date" name="taskdeadline" required>
            </div>
            <div>
                <label for="">Task Time Estimate:</label>
                <input type="number" id="timeInput">
            </div>
            <div>
                <label for="">Task Category:</label>
                <select name="taskcategory" required>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="hobbies">Hobbies</option>
                    <option value="religion">Religion</option>
                    <option value="family">Family</option>
                </select>
            </div>
            <div>
                <label for="">Task Priority:</label>
                <select name="taskpriority" required>
                    <option value="top">Top Priority</option>
                    <option value="second">Second Priority</option>
                    <option value="third">Third Priority</option>
                    <option value="fourth">Fourth Priority</option>
                </select>
            </div>
            <div>
                <label for="">Task Completed?</label>
                <input type="radio" name="choiceYes" value="yes" id="yes"> Yes
                <input type="radio" name="choiceNo" value="no" id="no"> No
            </div> -->


<!-- // btnEdit.addEventListener("click", function (e) {
//     if (e.target.classList.contains('edit-btn')) {  // checking if e.target is the edit button
//         const buttonEdit = e.target;        // captures the edit button
//         const row = buttonEdit.closest('tr'); // finds closest tr (the row btn is in)
//         const isEditing = btnEdit.textContent === "Save"; //boolean
//         if (!isEditing) {
//             // Convert to input
//             row.querySelectorAll('td:not(:last-child)').forEach(cell => {
//               const value = cell.textContent;
//               cell.innerHTML = `<input type="text" value="${value}">`;
//             });
//             btnEdit.textContent = 'Save';
//           } else {
//             // Save inputs back to text
//             row.querySelectorAll('td:not(:last-child)').forEach(cell => {
//               const input = cell.querySelector('input');
//               if (input) {
//                 cell.textContent = input.value;
//               }
//             });
//             btnEdit.textContent = 'Edit';
//         }
//     }
// }) -->