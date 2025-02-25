document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact");
    const nameInput = document.getElementById("name");
    const foneInput = document.getElementById("fone");
    const tableBody = document.querySelector("#contact-table tbody");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const fone = foneInput.value.trim();
        
        if (name === "" || fone === "") {
            alert("Preencha todos os campos!");
            return;
        }
        
        addContact(name, fone);
        form.reset();
    });

    function addContact(name, fone) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${fone}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        
        row.querySelector(".delete-btn").addEventListener("click", () => {
            row.remove();
        });

        tableBody.appendChild(row);
    }
});
