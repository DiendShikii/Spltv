// script.js
document.getElementById('equationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const a1 = parseFloat(event.target[0].value);
    const b1 = parseFloat(event.target[1].value);
    const c1 = parseFloat(event.target[2].value);
    const d1 = parseFloat(event.target[3].value);

    const a2 = parseFloat(event.target[4].value);
    const b2 = parseFloat(event.target[5].value);
    const c2 = parseFloat(event.target[6].value);
    const d2 = parseFloat(event.target[7].value);

    const a3 = parseFloat(event.target[8].value);
    const b3 = parseFloat(event.target[9].value);
    const c3 = parseFloat(event.target[10].value);
    const d3 = parseFloat(event.target[11].value);

    const result = solveLinearEquations(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3);
    
    document.getElementById('result').innerText = result;
});

function solveLinearEquations(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3) {
    const D = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
    const Dx = d1 * (b2 * c3 - b3 * c2) - b1 * (d2 * c3 - d3 * c2) + c1 * (d2 * b3 - d3 * b2);
    const Dy = a1 * (d2 * c3 - d3 * c2) - d1 * (a2 * c3 - a3 * c2) + c1 * (a2 * d3 - a3 * d2);
    const Dz = a1 * (b2 * d3 - b3 * d2) - b1 * (a2 * d3 - a3 * d2) + d1 * (a2 * b3 - a3 * b2);

    if (D === 0) {
        return "SPLTV ini tidak bisa diselesaikan. Tolong masukkan SPLTV lain :)";
    } else {
        const x = Dx / D;
        const y = Dy / D;
        const z = Dz / D;
        return `Solusi: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}, z = ${z.toFixed(2)}`;
    }
}

document.addEventListener('copy', function(event) {
    event.preventDefault();
});
