welcomeSpeech();

function welcomeSpeech() {
    /// Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Greet the user with their name
    document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
}

/// Function to validate form inputs
function validateForm() {
    /// Get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    /// Check if any field is empty
    if (name === "" || email === "" || message === "") {
        /// Show alert if any field is empty
        alert("All fields are required!");
    } else {
        /// Show success message
        alert(`Thank you ${name}, your message has been submitted successfully!`);
    }
}

// Menunggu sampai seluruh konten HTML dimuat
document.addEventListener('DOMContentLoaded', function() {

    // 1. Temukan elemen-elemen penting
    const sendButton = document.getElementById('send-button');
    
    // Input
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    
    // Output
    const outputPlaceholder = document.querySelector('.output-wrapper .placeholder');
    
    const outputName = document.getElementById('output-name');
    const outputEmail = document.getElementById('output-email');
    const outputMessage = document.getElementById('output-message');

    const outputNameValue = document.getElementById('output-name-value');
    const outputEmailValue = document.getElementById('output-email-value');
    const outputMessageValue = document.getElementById('output-message-value');

    // 2. Tambahkan "event listener" pada tombol
    sendButton.addEventListener('click', function() {
        
        // Panggil fungsi validasi (seperti nama fungsi di HTML Anda)
        validateAndShowOutput();
    });

    // 3. Buat fungsi untuk validasi dan menampilkan output
    function validateAndShowOutput() {
        // Ambil nilai dari input (dihilangkan spasi di awal/akhir)
        const nameVal = nameInput.value.trim();
        const emailVal = emailInput.value.trim();
        const messageVal = messageInput.value.trim();

        // Validasi sederhana: Cek apakah ada yang kosong
        if (nameVal === "" || emailVal === "" || messageVal === "") {
            alert("Harap isi semua kolom terlebih dahulu!");
            return; // Hentikan fungsi jika ada yang kosong
        }

        // Jika validasi berhasil:
        
        // 1. Sembunyikan placeholder
        if (outputPlaceholder) {
            outputPlaceholder.style.display = 'none';
        }

        // 2. Masukkan nilai ke elemen output
        outputNameValue.textContent = nameVal;
        outputEmailValue.textContent = emailVal;
        outputMessageValue.textContent = messageVal; // 'pre' tag akan menjaga spasi

        // 3. Tampilkan elemen output
        outputName.style.display = 'block';
        outputEmail.style.display = 'block';
        outputMessage.style.display = 'block';
    }

});