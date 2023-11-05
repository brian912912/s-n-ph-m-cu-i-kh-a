document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('bt1');
    const imageDisplay = document.getElementById('imageDisplay1');

    fileInput.addEventListener('change', function() {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function() {
                imageDisplay.src = reader.result;
            }

            reader.readAsDataURL(file);
        }
    });

    const fileInput2 = document.getElementById('bt2');
    const imageDisplay2 = document.getElementById('imageDisplay2');

    fileInput2.addEventListener('change', function() {
        const file2 = this.files[0];

        if (file2) {
            const reader = new FileReader();

            reader.onload = function() {
                imageDisplay2.src = reader.result;
            }

            reader.readAsDataURL(file2);
        }
    });

    const fileInput3 = document.getElementById('bt3');
    const imageDisplay3 = document.getElementById('imageDisplay3');

    fileInput3.addEventListener('change', function() {
        const file3 = this.files[0];

        if (file3) {
            const reader = new FileReader();

            reader.onload = function() {
                imageDisplay3.src = reader.result;
            }

            reader.readAsDataURL(file3);
        }
    });
});