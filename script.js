"use strict";
var categories = [
    {
        title: "Personal",
        img: "boy.png",
    },
    {
        title: "Work",
        img: "briefcase.png",
    },
    {
        title: "Shopping",
        img: "shopping.png",
    },
    {
        title: "Coding",
        img: "web-design.png",
    },
    {
        title: "Health",
        img: "healthcare.png",
    },
    {
        title: "Fitness",
        img: "dumbbell.png",
    },
    {
        title: "Education",
        img: "education.png",
    },
    {
        title: "Finance",
        img: "saving.png",
    },
];
var tasks = [
    {
        id: 1,
        task: "Go to market",
        category: "Shopping",
        date: "3245324",
        priorty: "medium",
        completed: false,
    },
    {
        id: 2,
        task: "Read a chapter of a book",
        category: "Personal",
        date: "2024-03-22",
        priorty: "low",
        completed: false,
    },
    {
        id: 3,
        task: "Prepare presentation for meeting",
        category: "Work",
        date: "2024-03-21",
        priorty: "high",
        completed: false,
    },
    {
        id: 4,
        task: "Complete coding challenge",
        category: "Coding",
        date: "2024-03-23",
        priorty: "high",
        completed: false,
    },
    {
        id: 5,
        task: "Take a 30-minute walk",
        category: "Health",
        date: "2024-03-22",
        priorty: "medium",
        completed: false,
    },
    {
        id: 6,
        task: "Do a 20-minute HIIT workout",
        category: "Fitness",
        date: "2024-03-23",
        priorty: "medium",
        completed: false,
    },
    {
        id: 7,
        task: "Watch an educational video online",
        category: "Education",
        date: "2024-03-21",
        priorty: "low",
        completed: false,
    },
    {
        id: 8,
        task: "Review monthly budget",
        category: "Finance",
        date: "2024-03-21",
        priorty: "high",
        completed: false,
    },
    {
        id: 9,
        task: "Buy groceries for the week",
        category: "Shopping",
        date: "2024-03-21",
        priorty: "medium",
        completed: false,
    },
    {
        id: 10,
        task: "Write in a journal",
        category: "Personal",
        date: "2024-03-24",
        priorty: "low",
        completed: false,
    },
    {
        id: 11,
        task: "Send follow-up emails",
        category: "Work",
        date: "2024-03-26",
        priorty: "medium",
        completed: false,
    },
    {
        id: 12,
        task: "Work on a coding side project",
        category: "Coding",
        date: "2024-03-26",
        priorty: "medium",
        completed: false,
    },
    {
        id: 13,
        task: "Try a new healthy recipe",
        category: "Health",
        date: "2024-03-20",
        priorty: "low",
        completed: false,
    },
    {
        id: 14,
        task: "Attend a yoga class",
        category: "Fitness",
        date: "2024-03-20",
        priorty: "low",
        completed: false,
    },
    {
        id: 15,
        task: "Read an article about a new topic",
        category: "Education",
        date: "2024-03-21",
        priorty: "low",
        completed: false,
    },
    {
        id: 16,
        task: "Set up automatic bill payments",
        category: "Finance",
        date: "2024-03-21",
        priorty: "medium",
        completed: false,
    },
    {
        id: 17,
        task: "Buy new clothes",
        category: "Shopping",
        date: "2024-03-21",
        priorty: "medium",
        completed: false,
    },
    {
        id: 18,
        task: "Meditate for 10 minutes",
        category: "Personal",
        date: "2024-03-21",
        priorty: "low",
        completed: false,
    },
    {
        id: 19,
        task: "Prepare agenda for team meeting",
        category: "Work",
        date: "2024-03-21",
        priorty: "high",
        completed: false,
    },
    {
        id: 20,
        task: "Debug a software issue",
        category: "Coding",
        date: "2024-03-21",
        priorty: "high",
        completed: false,
    },
    {
        id: 21,
        task: "Try a new recipe for lunch",
        category: "Health",
        date: "2024-03-21",
        priorty: "medium",
        completed: false,
    },
    {
        id: 22,
        task: "Go for a run",
        category: "Fitness",
        date: "2024-03-21",
        priorty: "medium",
        completed: false,
    },
    {
        id: 23,
        task: "Learn a new language online",
        category: "Education",
        date: "2024-03-21",
        priorty: "low",
        completed: false,
    },
    {
        id: 24,
        task: "Read about history",
        category: "Education",
        date: "2024-03-21",
        priorty: "low",
        completed: false,
    },
    {
        id: 25,
        task: "Review investment portfolio",
        category: "Finance",
        date: "2024-03-21",
        priorty: "high",
        completed: false,
    }, // Other tasks...
];
// Define functions
var saveLocal = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
saveLocal();
var getLocal = function () {
    var tasksLocal = localStorage.getItem("tasks");
    if (tasksLocal) {
        tasks = JSON.parse(tasksLocal);
    }
};
var toggleScreen = function () {
    screenWrapper === null || screenWrapper === void 0 ? void 0 : screenWrapper.classList.toggle("show-category");
};
// const updateTotals = () => {
//   const categoryTasks = tasks.filter(
//     (task) =>
//       task.category.toLowerCase() === selectedCategory.title.toLowerCase()
//   );
//   numTasks.innerHTML = `${categoryTasks.length} Tasks`;
//   totalTasks.innerHTML = tasks.length.toString();
// };
var updateTotals = function () {
    var categoryTasks = tasks.filter(function (task) {
        return task.category.toLowerCase() === selectedCategory.title.toLowerCase()
            && !task.completed;
    } // Exclude completed tasks
    );
    // Count the number of incomplete tasks
    var incompleteTasksCount = categoryTasks.length;
    // Update numTasks with the count of incomplete tasks
    numTasks.innerHTML = "".concat(incompleteTasksCount, " Tasks");
    // Update totalTasks with the total count of tasks excluding completed ones
    totalTasks.innerHTML = tasks.filter(function (task) { return !task.completed; }).length.toString();
};
var renderCategories = function () {
    categoriesContainer.innerHTML = "";
    categories.forEach(function (category) {
        var categoryTasks = tasks.filter(function (task) { return task.category.toLowerCase() === category.title.toLowerCase(); });
        var div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", function () {
            screenWrapper === null || screenWrapper === void 0 ? void 0 : screenWrapper.classList.toggle("show-category");
            selectedCategory = category;
            updateTotals();
            categoryTitle.textContent = category.title;
            categoryImg.src = "images/".concat(category.img);
            renderTasks();
        });
        div.innerHTML = "\n                    <div class=\"left\">\n                  <img src=\"images/".concat(category.img, "\"\n                   alt=\"").concat(category.title, "\"\n                    />\n                  <div class=\"content\">\n                    <h1>").concat(category.title, "</h1>\n                    <p>").concat(categoryTasks.length, " Tasks</p>\n                  </div>\n                </div>\n                <div class=\"options\">\n                  <div class=\"toggle-btn\">\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      fill=\"none\"\n                      viewBox=\"0 0 24 24\"\n                      stroke-width=\"1.5\"\n                      stroke=\"currentColor\"\n                      class=\"w-6 h-6\"\n                    >\n                      <path\n                        stroke-linecap=\"round\"\n                        stroke-linejoin=\"round\"\n                        d=\"M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z\"\n                      />\n                    </svg>\n                  </div>\n                </div>\n      ");
        categoriesContainer.appendChild(div);
    });
};
var renderTasks = function () {
    tasksContainer.innerHTML = "";
    var categoryTasks = tasks.filter(function (task) {
        return task.category.toLowerCase() === selectedCategory.title.toLowerCase();
    });
    if (categoryTasks.length === 0) {
        tasksContainer.innerHTML = "<p class=\"no-tasks\">No tasks added for this category</p>";
    }
    else {
        categoryTasks.forEach(function (task) {
            var div = document.createElement("div");
            div.classList.add("task-wrapper");
            var label = document.createElement("label");
            label.classList.add("task");
            label.setAttribute("for", task.id.toString());
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = task.id.toString();
            checkbox.checked = task.completed;
            var priority = task.priorty;
            // checkbox.addEventListener("change", () => {
            //   const index = tasks.findIndex((t) => t.id === task.id);
            //   tasks[index].completed = !tasks[index].completed;
            //   saveLocal();
            // });
            //   checkbox.addEventListener("change", () => {
            //     const confirmed = confirm("Is the task completed?");
            //     if (confirmed) {
            //         const index = tasks.findIndex((t) => t.id === task.id);
            //         tasks[index].completed = true;
            //         saveLocal();
            //     } else {
            //         // If the user clicks "Cancel" or "No", uncheck the checkbox
            //         checkbox.checked = false;
            //     }
            // });
            //   checkbox.addEventListener("change", function handleChange() {
            //     const confirmed = confirm("Is the task completed?");
            //     if (confirmed) {
            //         const index = tasks.findIndex((t) => t.id === task.id);
            //         tasks[index].completed = true;
            //         saveLocal();
            //         // Remove the event listener after the checkbox is checked
            //         checkbox.removeEventListener("change", handleChange);
            //     } else {
            //         // If the user clicks "Cancel" or "No", uncheck the checkbox
            //         checkbox.checked = false;
            //     }
            // });
            //   checkbox.addEventListener("change", function handleChange() {
            //     const confirmed = confirm("Is the task completed?");
            //     if (confirmed) {
            //         const index = tasks.findIndex((t) => t.id === task.id);
            //         tasks[index].completed = true;
            //         saveLocal();
            //         // Disable the checkbox after the task is marked as completed
            //         checkbox.disabled = true;
            //         // Remove the event listener after the checkbox is checked
            //         checkbox.removeEventListener("change", handleChange);
            //     } else {
            //         // If the user clicks "Cancel" or "No", uncheck the checkbox
            //         checkbox.checked = false;
            //     }
            //     updateTotals();
            // }
            // );
            checkbox.addEventListener("change", function handleChange() {
                var confirmed = confirm("Is the task completed?");
                if (confirmed) {
                    var index = tasks.findIndex(function (t) { return t.id === task.id; });
                    tasks[index].completed = true;
                    saveLocal();
                    // Remove the task from the tasks array
                    tasks.splice(index, 1);
                    saveLocal();
                    // Disable the checkbox after the task is marked as completed
                    checkbox.disabled = true;
                    // Remove the event listener after the checkbox is checked
                    checkbox.removeEventListener("change", handleChange);
                    alert("Task completed Sucessfully. task will not been shown next time");
                }
                else {
                    // If the user clicks "Cancel" or "No", uncheck the checkbox
                    checkbox.checked = false;
                }
                updateTotals();
            });
            //   checkbox.addEventListener("change", function handleChange() {
            //     // Check if the task is already completed
            //     if (!task.completed) {
            //         const confirmed = confirm("Is the task completed?");
            //         if (confirmed) {
            //             const index = tasks.findIndex((t) => t.id === task.id);
            //             tasks[index].completed = true;
            //             saveLocal();
            //             // Disable the checkbox after the task is marked as completed
            //             checkbox.disabled = true;
            //             // Remove the event listener after the checkbox is checked
            //             checkbox.removeEventListener("change", handleChange);
            //         } else {
            //             // If the user clicks "Cancel" or "No", uncheck the checkbox
            //             checkbox.checked = false;
            //         }
            //         updateTotals();
            //     }
            // });
            div.innerHTML = "\n        <div class=\"delete\">\n                  <svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    fill=\"none\"\n                    viewBox=\"0 0 24 24\"\n                    stroke-width=\"1.5\"\n                    stroke=\"currentColor\"\n                    class=\"w-6 h-6\"\n                  >\n                    <path\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      d=\"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0\"\n                    />\n                  </svg>\n                </div>\n                ";
            label.innerHTML = "\n                <span class=\"checkmark\"\n                  ><svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    fill=\"none\"\n                    viewBox=\"0 0 24 24\"\n                    stroke-width=\"1.5\"\n                    stroke=\"currentColor\"\n                    class=\"w-6 h-6\"\n                  >\n                    <path\n                      stroke-linecap=\"round\"\n                      stroke-linejoin=\"round\"\n                      d=\"M4.5 12.75l6 6 9-13.5\"\n                    />\n                  </svg>\n                </span>\n                <p class=\"".concat(priority, "\">").concat(task.task, " - (").concat(task.date, " )</p>\n\n          ");
            label.prepend(checkbox);
            div.prepend(label);
            tasksContainer.appendChild(div);
            var deleteBtn = div.querySelector(".delete");
            deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener("click", function () {
                var index = tasks.findIndex(function (t) { return t.id === task.id; });
                tasks.splice(index, 1);
                saveLocal();
                renderTasks();
                alert("Task deleted Sucessfully");
            });
        });
        renderCategories();
        updateTotals();
    }
};
var toggleAddTaskForm = function () {
    addTaskWrapper === null || addTaskWrapper === void 0 ? void 0 : addTaskWrapper.classList.toggle("active");
    blackBackdrop === null || blackBackdrop === void 0 ? void 0 : blackBackdrop.classList.toggle("active");
    addTaskBtn === null || addTaskBtn === void 0 ? void 0 : addTaskBtn.classList.toggle("active");
};
var addTask = function (e) {
    e.preventDefault();
    console.log("Adding task...");
    var task = taskInput.value;
    var category = categorySelect.value;
    var priority = selectPriorty.value;
    var selectedDate = dateInput.value;
    if (task === "") {
        alert("Please enter a task");
    }
    else {
        var newTask = {
            id: tasks.length + 1,
            task: task,
            category: category,
            date: selectedDate,
            priorty: priority,
            completed: false,
        };
        taskInput.value = "";
        tasks.push(newTask);
        saveLocal();
        toggleAddTaskForm();
        renderTasks();
        // alert("Task added Sucessfully");
    }
    console.log(selectedDate); // Get the selected date value
};
// Initialize variables and DOM elements
var selectedCategory = categories[0];
var categoriesContainer = document.querySelector(".categories");
var screenWrapper = document.querySelector(".wrapper");
var menuBtn = document.querySelector(".menu-btn");
var backBtn = document.querySelector(".back-btn");
var tasksContainer = document.querySelector(".tasks");
var numTasks = document.getElementById("num-tasks");
var categoryTitle = document.getElementById("category-title");
var categoryImg = document.getElementById("category-img");
var categorySelect = document.getElementById("category-select");
var addTaskWrapper = document.querySelector(".add-task");
var addTaskBtn = document.querySelector(".add-task-btn");
var taskInput = document.getElementById("task-input");
var blackBackdrop = document.querySelector(".black-backdrop");
var addBtn = document.querySelector(".add-btn");
var cancelBtn = document.querySelector(".cancel-btn");
var totalTasks = document.getElementById("total-tasks");
var selectPriorty = document.getElementById('priority');
// Get a reference to the date input element
var dateInput = document.getElementById('date');
var todaysMessage = document.querySelector(".todaysmessage");
var tdyTask = document.querySelector(".tdy-task");
var tdyTaskClose = document.querySelector('#tdy-task-close');
var tdyhd = document.querySelector(".tdy-task-hd");
// Select the div where the tasks will be displayed
var tdyTasksDiv = document.getElementById('tdy-tasks');
var todayRadioButton = document.getElementById('today');
var toggleTdyTask = function () {
    compareDatesAndRetrieveTasks();
    tdyTask.classList.toggle("active");
};
todaysMessage.addEventListener("click", toggleTdyTask);
tdyTaskClose.addEventListener("click", function () {
    tdyTask.classList.remove("active");
    tdyTask.classList.add("deactive");
});
// // Function to handle changes to the date input
// const handleDateChange = () => {
//   // Retrieve the value of the date input field
//   const selectedDate = dateInput.value;
//   // Store the date value in local storage
//   localStorage.setItem('selectedDate', selectedDate);
// };
// Attach an event listener to the date input element
// dateInput.addEventListener('change', handleDateChange);
// Attach event listeners
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", toggleScreen);
backBtn === null || backBtn === void 0 ? void 0 : backBtn.addEventListener("click", toggleScreen);
addTaskBtn === null || addTaskBtn === void 0 ? void 0 : addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop === null || blackBackdrop === void 0 ? void 0 : blackBackdrop.addEventListener("click", toggleAddTaskForm);
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", addTask);
cancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener("click", toggleAddTaskForm);
// Render initial state
getLocal();
renderTasks();
categories.forEach(function (category) {
    var option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect === null || categorySelect === void 0 ? void 0 : categorySelect.appendChild(option);
});
var cDate = "".concat(new Date().getMonth() + 1, "/").concat(new Date().getDate(), "/").concat(new Date().getFullYear());
function compareDatesAndRetrieveTasks() {
    todayRadioButton.checked = true;
    // Get current date in the format "MM/DD/YYYY"
    var cDate = "".concat(new Date().getFullYear(), "-0").concat(new Date().getMonth() + 1, "-").concat(new Date().getDate());
    // Get the tasks from local storage
    var storedTasksString = localStorage.getItem('tasks');
    var storedTasks = storedTasksString ? JSON.parse(storedTasksString) : [];
    // Select the div where the tasks will be displayed
    var tdyTasksDiv = document.getElementById('tdy-tasks');
    // Check if tdyTasksDiv is not null
    if (tdyTasksDiv) {
        // Clear any existing tasks in the div
        tdyTasksDiv.innerHTML = '';
        // Loop through tasks
        storedTasks.forEach(function (task) {
            console.log(cDate);
            console.log(task.date);
            // Check if the task date matches the current date
            if (task.date === cDate) {
                // Add click event listener to each task element
                // tdyhd.innerText="Task to be completed today"
                // Create a new paragraph element
                var taskElement = document.createElement('p');
                taskElement.id = task.id.toString();
                // Set the class based on task priority
                var priority = '';
                if (task.priorty === 'high') {
                    priority = 'high';
                }
                else if (task.priorty === 'medium') {
                    priority = 'medium';
                }
                else {
                    priority = 'low';
                }
                taskElement.classList.add(priority);
                // Set the text content of the paragraph element
                taskElement.textContent = "".concat(task.task, " - (").concat(task.category, ")");
                // Append the paragraph element to the tdyTasksDiv
                tdyTasksDiv.appendChild(taskElement);
            }
            else {
                // tdyhd.innerText="No Task to be completed today"
            }
        });
    }
    else {
        console.error("tdyTasksDiv is null. Make sure the HTML element with id 'tdy-tasks' exists.");
    }
}
var todayRadioBtn = document.getElementById('today');
var tomorrowRadioBtn = document.getElementById('tomorrow');
var PendingRadioBtn = document.getElementById('Pending');
todayRadioBtn.addEventListener('click', function () {
    // Call compareDatesAndRetrieveTasks() with today's date
    compareDatesAndRetrieveTasks();
});
tomorrowRadioBtn.addEventListener('click', function () {
    compareTmrDatesAndRetrieveTasks();
});
PendingRadioBtn.addEventListener('click', function () {
    comparePenDatesAndRetrieveTasks();
});
function compareTmrDatesAndRetrieveTasks() {
    // Get current date in the format "MM/DD/YYYY"
    var currentDate = new Date(); // Get the current date
    var tomorrowDate = new Date(currentDate);
    tomorrowDate.setDate(currentDate.getDate() + 1);
    var tomorrowYear = tomorrowDate.getFullYear();
    var tomorrowMonth = (tomorrowDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based
    var tomorrowDay = tomorrowDate.getDate().toString().padStart(2, '0');
    var tomorrowDateString = "".concat(tomorrowYear, "-").concat(tomorrowMonth, "-").concat(tomorrowDay);
    console.log(tomorrowDateString); // Output example: "2024-03-20" (if today is March 19th, 2024)
    var cDate = tomorrowDateString;
    // Get the tasks from local storage
    var storedTasksString = localStorage.getItem('tasks');
    var storedTasks = storedTasksString ? JSON.parse(storedTasksString) : [];
    // Check if tdyTasksDiv is not null
    if (tdyTasksDiv) {
        // Clear any existing tasks in the div
        tdyTasksDiv.innerHTML = '';
        // Loop through tasks
        storedTasks.forEach(function (task) {
            console.log(cDate);
            console.log(task.date);
            // Check if the task date matches the current date
            if (task.date === cDate) {
                // Add click event listener to each task element
                // Create a new paragraph element
                var taskElement = document.createElement('p');
                taskElement.id = task.id.toString();
                // Set the class based on task priority
                var priority = '';
                if (task.priorty === 'high') {
                    priority = 'high';
                }
                else if (task.priorty === 'medium') {
                    priority = 'medium';
                }
                else {
                    priority = 'low';
                }
                taskElement.classList.add(priority);
                // Set the text content of the paragraph element
                taskElement.textContent = "".concat(task.task, " - (").concat(task.category, ")");
                // Append the paragraph element to the tdyTasksDiv
                tdyTasksDiv.appendChild(taskElement);
            }
        });
    }
    else {
        console.error("tdyTasksDiv is null. Make sure the HTML element with id 'tdy-tasks' exists.");
    }
}
// for pending
function comparePenDatesAndRetrieveTasks() {
    // Get current date in the format "MM/DD/YYYY"
    var cDate = "".concat(new Date().getFullYear(), "-0").concat(new Date().getMonth() + 1, "-").concat(new Date().getDate());
    // Get the tasks from local storage
    var storedTasksString = localStorage.getItem('tasks');
    var storedTasks = storedTasksString ? JSON.parse(storedTasksString) : [];
    // Select the div where the tasks will be displayed
    var tdyTasksDiv = document.getElementById('tdy-tasks');
    // Check if tdyTasksDiv is not null
    if (tdyTasksDiv) {
        // Clear any existing tasks in the div
        tdyTasksDiv.innerHTML = '';
        // Loop through tasks
        storedTasks.forEach(function (task) {
            console.log(cDate);
            console.log(task.date);
            // Check if the task date matches the current date
            if (task.date < cDate) {
                // Add click event listener to each task element
                // tdyhd.innerText="Task to be completed today"
                // Create a new paragraph element
                var taskElement = document.createElement('p');
                taskElement.id = task.id.toString();
                // Set the class based on task priority
                var priority = '';
                if (task.priorty === 'high') {
                    priority = 'high';
                }
                else if (task.priorty === 'medium') {
                    priority = 'medium';
                }
                else {
                    priority = 'low';
                }
                taskElement.classList.add(priority);
                // Set the text content of the paragraph element
                taskElement.textContent = "".concat(task.task, " - (").concat(task.category, ")");
                // Append the paragraph element to the tdyTasksDiv
                tdyTasksDiv.appendChild(taskElement);
            }
            else {
                // tdyhd.innerText="No Task to be completed today"
            }
        });
    }
    else {
        console.error("tdyTasksDiv is null. Make sure the HTML element with id 'tdy-tasks' exists.");
    }
}
