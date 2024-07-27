document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const addressEditButton = document.querySelector('.profile_row .address_edit_button');
    const saveButton = document.getElementById('save_button');
    const cancelButton = document.getElementById('cancel_button');
    const editButtons = document.querySelectorAll('.edit_button');

    // 주소 수정 모달 열기
    addressEditButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // 주소 수정 모달 저장 버튼 클릭 시 닫기
    saveButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 주소 수정 모달 취소 버튼 클릭 시 닫기
    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 모달 외부 클릭 시 모달 닫기
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 수정하기 버튼 클릭 시 join_2.html로 이동
    editButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (event.target && event.target.matches('.edit_button')) {
                const buttonIndex = Array.from(editButtons).indexOf(event.target);
                if (buttonIndex === 2) { // 세 번째 버튼 인덱스는 2입니다.
                    window.location.href = 'join_2.html'; // join_2.html 페이지로 이동
                }
            }
        });
    });
});
