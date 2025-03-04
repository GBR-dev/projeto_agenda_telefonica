document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const foneInput = document.getElementById("fone");
    const tableBody = document.querySelector("#contact-table tbody");

    let contacts = JSON.parse(localStorage.getItem("contacts")) || []; // Recupera contatos armazenados

    function renderTable() {
        tableBody.innerHTML = ""; // Limpa a tabela antes de renderizar

        contacts.forEach((contact, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.fone}</td>
                <td><button class="delete-btn" data-index="${index}">Excluir</button></td>
            `;

            row.querySelector(".delete-btn").addEventListener("click", () => deleteContact(index));

            tableBody.appendChild(row);
        });
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const fone = foneInput.value.trim();

        if (name === "" || fone === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        addContact(name, fone);
        form.reset();
    });

    function addContact(name, fone) {
        contacts.push({ name, fone }); // Adiciona ao array
        saveContacts();
        renderTable();
    }

    function deleteContact(index) {
        contacts.splice(index, 1); // Remove do array
        saveContacts();
        renderTable();
    }

    function saveContacts() {
        localStorage.setItem("contacts", JSON.stringify(contacts)); // Salva no LocalStorage
    }

    renderTable(); // Exibe contatos ao carregar a página
});                           
