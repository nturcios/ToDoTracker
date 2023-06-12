window.addEventListener('load', () => {  //waits for page to load
	const form = document.querySelector("#new-task-form"); //This line selects an HTML element with the ID "new-task-form" 
	const input = document.querySelector("#new-task-input"); //This line selects an HTML element with the ID "new-task-input" 
	const list_el = document.querySelector("#tasks"); //This line selects an HTML element with the ID "tasks"
    //The selected elements above are then stored in a constant variable of its own

	form.addEventListener('submit', (e) => { //Page is listening 
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div'); //This line creates a new <div> element and assigns it to a constant variable called task_el.
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
        //line above creates another <div> element and assigns it to a constant variable called task_content_el.

		task_content_el.classList.add('content'); //this allows you to style the element using CSS. 

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el); 
        //added a child element to another parent element. In this case, task_content_el is being added as a child element inside task_el.

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');//This allows you to apply styles to the div element 
        //using CSS rules targeting the "actions" class.
		

        // This Piece of code allows us to edit our inputs clicking the button assigned to edit
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

        // This Piece of code allows us to edit our inputs clicking the button assigned to delete
		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		//a container for task-related actions, such as editing and deleting.
        task_actions_el.appendChild(task_edit_el);//representing a button or link for editing a task.
		task_actions_el.appendChild(task_delete_el);//representing a button or link for deleting a task.

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});