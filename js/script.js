
///NOTE: SEMUA KOMENTAR DISINI SENGAJA SAYA BUAT YA KAK, UNTUK PROSES BELAJAR SAYA DAN BUKAN DARI AI :p

welcomeSpeech();

function welcomeSpeech() {
    /// promt menanyakan nama pengunjung
    let name = prompt("Enter your name:");

    // menyapa dengan nama mereka
    document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
}

/// Function untuk validasi input
function validateForm() {
    /// Get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    /// memeriksa apakah ada field yang kosong
    if (name === "" || email === "" || message === "") {
        /// Show alert if any field is empty
        alert("All fields are required!");
    } else {
        /// menunampilkan pesan sukses jika semua field terisi
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