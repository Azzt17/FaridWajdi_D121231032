let binaryInputValue = '';

function inputDigit(digit) {
    if (binaryInputValue.length < 4) {
        binaryInputValue += digit;
        document.getElementById('binaryInput').textContent = 'Binary Input (4 Digit): ' + binaryInputValue;
    }
}

function updateDisplay() {
    if (binaryInputValue.length === 4 && /^[01]+$/.test(binaryInputValue)) {
        const decimalOutput = document.getElementById('decimalOutput');
        const segments = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

        // Reset display
        segments.forEach(segment => {
            document.getElementById(segment).classList.remove('active');
        });

        // Convert binary to decimal
        const decimalValue = parseInt(binaryInputValue, 2);
        decimalOutput.textContent = 'Decimal: ' + decimalValue;

        // Display segments for seven-segment display
        if (decimalValue >= 0 && decimalValue <= 15) {
            const segmentMapping = [
                [1, 1, 1, 1, 1, 1, 0],
                [0, 1, 1, 0, 0, 0, 0],
                [1, 1, 0, 1, 1, 0, 1],
                [1, 1, 1, 1, 0, 0, 1],
                [0, 1, 1, 0, 0, 1, 1],
                [1, 0, 1, 1, 0, 1, 1],
                [1, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 1],
            ];

            segments.forEach((segment, index) => {
                if (segmentMapping[decimalValue][index] === 1) {
                    document.getElementById(segment).classList.add('active');
                }
            });
        } else {
            console.error('Invalid decimal input. Please enter a number between 0 and 15.');
        }
    }
}

function resetDisplay() {
    binaryInputValue = '';
    document.getElementById('binaryInput').textContent = 'Binary Input(4 Digit): ';
    document.getElementById('decimalOutput').textContent = 'Decimal: ';
    updateDisplay(); // Reset display
}
