// Sample data for ninjas
const ninjas = [
    { id: 1, name: "Naruto Uzumaki", details: "The Seventh Hokage of the Hidden Leaf Village." },
    { id: 2, name: "Sasuke Uchiha", details: "The last surviving Uchiha clan member." },
    { id: 3, name: "Sakura Haruno", details: "A medical ninja with superhuman strength." },
];

// Populate ninja list and dropdown
window.onload = function() {
    const ninjaList = document.querySelector('#ninja-list ul');
    const ninjaSelect = document.getElementById('ninja');

    ninjas.forEach(ninja => {
        // Populate list
        let li = document.createElement('li');
        li.textContent = `${ninja.name}: ${ninja.details}`;
        ninjaList.appendChild(li);

        // Populate dropdown
        let option = document.createElement('option');
        option.value = ninja.id;
        option.textContent = ninja.name;
        ninjaSelect.appendChild(option);
    });
};

// Function to handle ninja purchase
function purchaseNinja() {
    const ninjaId = document.getElementById('ninja').value;
    const ninja = ninjas.find(n => n.id == ninjaId);

    // Send data to server
    fetch('save.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `ninja=${encodeURIComponent(ninja.name)}`,
    }).then(response => response.text())
      .then(data => alert(data))
      .catch(error => console.error('Error:', error));
}
