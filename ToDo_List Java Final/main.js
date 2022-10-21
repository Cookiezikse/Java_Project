window.addEventListener('load', () => {
	/* Prises des inputs */
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks"); /* Liste qu'on va créer */

	form.addEventListener('submit', (e) => { /* Voir si on clique sur le bouton */
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div'); /* Create une div pour y mettre les tasks */
		task_el.classList.add('task'); /* Add une class au tasks pour manipuler les tasks, par exemple, dans le css */

		const task_content_el = document.createElement('div'); /* On met les contents dedans, c'est à dire les tasks */
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el); /* On les mets dedans */

		const task_input_el = document.createElement('input'); /* On prends l'input, le text dans l'input pour l'affecter */
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el); /* On le place ici */

		const task_actions_el = document.createElement('div'); /* Créer une div pour les actions pour le css etc... */
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button'); /* Pareil ici, pour le boutton edit, dans le meme but */
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');  /* Pareil ici, mais pour le bouton delete, dans le meme but */
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el); /* On les places dans les div qu'on a faites */
		task_actions_el.appendChild(task_delete_el); /* On les places dans les div qu'on a faites */

		task_el.appendChild(task_actions_el); /* Pareil ici */

		list_el.appendChild(task_el); /* Pareil ici */

		input.value = '';

		task_edit_el.addEventListener('click', (e) => { /* On ajoute l'évènement pour savoir si il y a un click. Si il y a un click */
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => { /* Si il y a un click */
			list_el.removeChild(task_el); /* Delete du child, c'est à dire de la task qu'on veut enlever */
		});
	});
});










window.addEventListener('load', () => {
	const form2 = document.querySelector("#new-task-form2");
	const input = document.querySelector("#new-task-input");
	const list_el2 = document.querySelector("#tasks2");

	form2.addEventListener('submit', (e) => {
		e.preventDefault();

		const task2 = input.value;

		const task_el2 = document.createElement('div');
		task_el2.classList.add('task');
		console.log(task_el2)
		const task_content_el2 = document.createElement('div');
		task_content_el2.classList.add('content');
		console.log(task_content_el2)

		task_el2.appendChild(task_content_el2);

		const task_input_el2 = document.createElement('input');
		task_input_el2.classList.add('text');
		task_input_el2.type = 'text';
		task_input_el2.value = task2;
		task_input_el2.setAttribute('readonly', 'readonly');

		task_content_el2.appendChild(task_input_el2);

		const task_actions_el2 = document.createElement('div');
		task_actions_el2.classList.add('actions');
		
		const task_edit_el2 = document.createElement('button');
		task_edit_el2.classList.add('edit');
		task_edit_el2.innerText = 'Edit';

		const task_delete_el2 = document.createElement('button');
		task_delete_el2.classList.add('delete');
		task_delete_el2.innerText = 'Delete';

		task_actions_el2.appendChild(task_edit_el2);
		task_actions_el2.appendChild(task_delete_el2);

		task_el2.appendChild(task_actions_el2);

		list_el2.appendChild(task_el2);

		input.value = '';

		task_edit_el2.addEventListener('click', (e) => {
			if (task_edit_el2.innerText.toLowerCase() == "edit") {
				task_edit_el2.innerText = "Save";
				task_input_el2.removeAttribute("readonly");
				task_input_el2.focus();
			} else {
				task_edit_el2.innerText = "Edit";
				task_input_el2.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el2.addEventListener('click', (e) => {
			list_el2.removeChild(task_el2);
		});
	});
});






window.addEventListener('load', () => {
	const form3 = document.querySelector("#new-task-form3");
	const input = document.querySelector("#new-task-input");
	const list_el3 = document.querySelector("#tasks3");

	form3.addEventListener('submit', (e) => {
		e.preventDefault();

		const task3 = input.value;

		const task_el3 = document.createElement('div');
		task_el3.classList.add('task');
		console.log(task_el3)
		const task_content_el3 = document.createElement('div');
		task_content_el3.classList.add('content');
		console.log(task_content_el3)

		task_el3.appendChild(task_content_el3);

		const task_input_el3 = document.createElement('input');
		task_input_el3.classList.add('text');
		task_input_el3.type = 'text';
		task_input_el3.value = task3;
		task_input_el3.setAttribute('readonly', 'readonly');

		task_content_el3.appendChild(task_input_el3);

		const task_actions_el3 = document.createElement('div');
		task_actions_el3.classList.add('actions');
		
		const task_edit_el3 = document.createElement('button');
		task_edit_el3.classList.add('edit');
		task_edit_el3.innerText = 'Edit';

		const task_delete_el3 = document.createElement('button');
		task_delete_el3.classList.add('delete');
		task_delete_el3.innerText = 'Delete';

		task_actions_el3.appendChild(task_edit_el3);
		task_actions_el3.appendChild(task_delete_el3);

		task_el3.appendChild(task_actions_el3);

		list_el3.appendChild(task_el3);

		input.value = '';

		task_edit_el3.addEventListener('click', (e) => {
			if (task_edit_el3.innerText.toLowerCase() == "edit") {
				task_edit_el3.innerText = "Save";
				task_input_el3.removeAttribute("readonly");
				task_input_el3.focus();
			} else {
				task_edit_el3.innerText = "Edit";
				task_input_el3.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el3.addEventListener('click', (e) => {
			list_el3.removeChild(task_el3);
		});
	});
});

