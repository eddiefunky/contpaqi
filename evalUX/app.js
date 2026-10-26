document.addEventListener("DOMContentLoaded", async () => {
    try {
        const respuesta = await fetch('datos.json');
        const datos = await respuesta.json();

        const ctx = document.getElementById('skillsRadar').getContext('2d');
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: datos.conceptos,
                datasets: datos.evaluaciones
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        min: 0,
                        max: 5,
                        ticks: { stepSize: 1 }
                    }
                },
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
});