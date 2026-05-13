const generateBtn = document.getElementById('generate-btn');
const digits = document.querySelectorAll('.digit');

function generateOTP() {
    digits.forEach((digit, index) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 10);
            digit.textContent = randomNum;
            digit.classList.add('pop');
            setTimeout(() => digit.classList.remove('pop'), 200);
        }, index * 100);
    });
}

generateBtn.addEventListener('click', generateOTP);

// Initial generate
generateOTP();
