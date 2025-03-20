## So far in the code renderTbl():
When a user submits the form (entering first and last name followed by house information) the information goes to the FORM.addEventListener() function. 
Where all the values are stored in variables. Then the start() function is called
followed by clearing the entire webpage, and then rendering the table with the output. Finally we clear all the inputs in the form. 

### The FORM.addEventListener() function:
- Executes when the user presses the submit button after filling out the form
- Stores the values: firstname, lastname, household members and house size (data user entered)
- Passes all of these values by reference into the start() function
- Clears all the output on the webpage (removes duplicate data in output table)
- Calls renderTbl() function with cfpData Array
- Clears all of the inputs in the form

### Start() function:
- Computes household points, houseSize points and total carbon points
- Pushes all the point data into cfpData array as an object

### renderTbl() function:
- First checks if there is a table already created in the output using querySelector
- If there is no table created:
    - Calls renderTblHeading function:
    - A table is created
    - Thead created
    - tr created
    - headings of table stored in an array
    - Using a forEach loop the heading array is iterated through and a th element created for each heading, that is appended to the tr
    - After the loop is finished tr is appended to thead, which is appended to the table and the table is returned. 
    - Then we go back to the renderTbl function where we begin populating the table with data from the cfpData array
    - We create two td elements each time, one for name and one for the carbon points total
    - Then append the td elements to a tr element, after we leave the loop, we append the tr to the tbody, tbody to the table and the table to the document using an ID.
- If the table is already created (meaning user submitted form at least once):
    - Select the tbody from the document using querySelector
    - Set the tbody to empty (clearing it)
    - Then iterate through the cfpData array using a forEach loop
    - In the forEach loop (since there will be more than 1 object in the array of objects cfpData array) we create a new tr element, two td elements each time. Also appending the td elements to the tr, the tr to the tbody and the tbody to the table each iteration. We cannot do this outside of the loop because the created tr scope is only in the forEach loop. 
- After that the code goes back to the FORM.addEventListener function(), where it proceeds to empty the inputs in the form. Ready for a second entry from the user.


#### Feedback for video
> The explanation given for the code was very clear and simple. 
> I realized I should have been a bit more descriptive for the other code, I only described the behavior of the new code we wrote (renderTbl) nothing on determineHouseholdPts or determineHouseSizePts. I will do that next time to be clear and concise. 
> The video was helpful, it showed how to explain the code properly

####  Code Challenge: How to repopulate the inputs with the row data
- Begin by capturing data of row where the edit button was clicked
- Capture the inputs using getElementsByName();
- Change the input.value to the index value from the object
- Then after the user changes the values again, they will submit the form and it will be remade


## Local Storage Explanation
- Can go to the local storage via the console and typing: "localStorage"
- localStorage is read only and the data stored can be accessed after reloading
- No expiration time
- sessionStorage (clears when tab is closed), localStorage does not
- When using incognito mode, localStorage acts like sessionStorage
##### How to add data to localStorage:
localStorage.setItem();
##### How to read item from localStorage:
const readData = localStorage.getItem("name");
##### How to remove an item from localStorage:
localStorage.removeItem("name");
##### Removing all items in localStorage:
localStorage.clear();
### JSON and Serialization
> Serialization allows a data structure to be transferred over a network or stored in a storage
#### JSON serializes JS objects via JSON.stringify(object)
#### JSON.parse(string) converts the string back into JS usable code 
