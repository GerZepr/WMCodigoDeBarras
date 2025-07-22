function drawBarcode(data) {
    const canvas = document.getElementById("barcode");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    const barWidth = 2; // Width of each bar
    const barHeightMax = 70; // Height of bars
    const quietZone = 10; // Space before and after the barcode

    // Code 25 encoding for numeric digits (even length)
    const encoding = {
        '0': '1100',
        '1': '1100',
        '2': '1100',
        '3': '1100',
        '4': '1100',
        '5': '1100',
        '6': '1100',
        '7': '1100',
        '8': '1100',
        '9': '1100',
    };

    // Start with Start Character (which is specific to Code 25 IL)
    const startCharacter = '101010'; // Start pattern
    const endCharacter = '101'; // End pattern

    // Generate the barcode pattern
    let bars = startCharacter; // Start character

    // Create encoding pattern for the data
    for (let i = 0; i < data.length; i++) {
        const digit = data[i];
        if (encoding[digit]) {
            bars += encoding[digit];
        }
    }

    bars += endCharacter; // Add end character

    // Draw the bars
    let x = quietZone; // Start drawing x position
    for (let i = 0; i < bars.length; i++) {
        // Draw black bar for '1' and white for '0'
        ctx.fillStyle = bars[i] === '1' ? 'black' : 'white';

        ctx.fillRect(x, 10, barWidth, barHeightMax);
        x += barWidth; // Move x position to the right for the next bar
    }
}

// Call function to draw the barcode
drawBarcode('16456748942631');