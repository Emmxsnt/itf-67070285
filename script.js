const DEFAULT_profile_URL = 'https://i.pinimg.com/736x/20/e9/a3/20e9a3d448332149d3e6fc4441ca9943.jpg';

let contacts = [];

function setUsername() {
    const username = document.getElementById('usernameInput').value;
    document.getElementById('username').textContent = username;
}

function setprofile() {
    const url = document.getElementById('profileInput').value;
    document.getElementById('profile').style.backgroundImage = url ? `url(${url})` : `url(${DEFAULT_profile_URL})`;

}   

function addContact() {
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    contacts.push({ name, phone });
    updateTable();
}

function updateTable() {
    const table = document.getElementById('contactTable');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    contacts.forEach((contact, index) => {
        const row = table.insertRow(-1);
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = contact.name;
        row.insertCell(2).textContent = contact.phone;
    });
}

function exportContacts() {
    let csv = 'Name,Phone Number\n';
    contacts.forEach(contact => {
        csv += `${contact.name},${contact.phone}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'contacts.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function setDefaultprofile() {
    document.getElementById('profile').style.backgroundImage = `url(${DEFAULT_profile_URL})`;
}

window.onload = setDefaultprofile;

document.getElementById('username').addEventListener('click', function() {
    window.location.href = 'https://github.com/Rattapoomm';
});
