document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#new-task').onsubmit = () => {
        const cb = document.createElement("INPUT");
        cb.setAttribute("type", "checkbox");

        const li = document.createElement('li');
        li.appendChild(cb);
        li.innerHTML += document.querySelector('#task').value;

        // Crear botón de eliminar
        const delBtn = document.createElement('button');
        delBtn.innerHTML = 'Eliminar';
        delBtn.className = 'delete-btn';

        // Agregar funcionalidad para eliminar tarea
        delBtn.onclick = () => {
            li.remove();  // Eliminar el elemento 'li' correspondiente
        };
        li.appendChild(delBtn);

        document.querySelector('#tasks').append(li);

        document.querySelector('#task').value = '';

        return false;
    };
    document.querySelector('#mark-all').onclick = () => {
        // Selecciona todas las casillas de verificación dentro de la lista de tareas
        const checkboxes = document.querySelectorAll('#tasks li input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            checkbox.checked = true; // Marca todas las casillas
        });
    };    
});
