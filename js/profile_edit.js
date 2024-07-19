document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const addressEditButton = document.querySelector('.profile_row .address_edit_button');
    const saveButton = document.getElementById('save_button');
    const cancelButton = document.getElementById('cancel_button');

    addressEditButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    saveButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
