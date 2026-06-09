const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//Show Sidebar
menuBtn.addEventListener('click',() =>{
      sideMenu.style.display = "block";
})

//Close Sidebar
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none";
})

//==================Change Theme=========================
const currentTheme = localStorage.getItem('theme');

if(currentTheme === 'dark-theme-variables'){
    document.body.classList.add('dark-theme-variables');
    menuBtn.style.color = "var(--primary-color)";
    

    themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
    themeToggler.querySelector('span:nth-child(2)').classList.add('active');
}

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    menuBtn.style.color = "var(--primary-color)";
    

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    if(document.body.classList.contains('dark-theme-variables')){
        localStorage.setItem('theme', 'dark-theme-variables');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
   

// Revenue Chart
        const revenueCtx = document.getElementById('revenueChart').getContext('2d');
        const labels = ['May 12','May 13','May 14','May 15','May 16','May 17','May 18'];
        const revenueChart = new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: [12000, 29000, 22000, 31000, 27000, 45000, 38000],
                        borderColor: '#7380ec',
                        backgroundColor: 'rgba(115,128,236,0.08)',
                        borderWidth: 2.5,
                        pointBackgroundColor: '#7380ec',
                        pointRadius: 4,
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Previous Period',
                        data: [8000, 16000, 14000, 20000, 18000, 28000, 24000],
                        borderColor: '#aab4c8',
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderDash: [5,5],
                        pointBackgroundColor: '#aab4c8',
                        pointRadius: 3,
                        tension: 0.4,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { font: { size: 11 } } },
                    y: {
                        grid: { color: 'rgba(132,139,200,0.12)' },
                        ticks: {
                            callback: v => '$' + (v/1000) + 'K',
                            font: { size: 11 }
                        }
                    }
                }
            }
        });

        // Customer Growth Chart
        const custCtx = document.getElementById('customerChart').getContext('2d');
        const customerChart = new Chart(custCtx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'Customers',
                    data: [380, 420, 460, 510, 550, 620, 590],
                    backgroundColor: 'rgba(115,128,236,0.75)',
                    borderRadius: 6,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { font: { size: 11 } } },
                    y: { grid: { color: 'rgba(132,139,200,0.12)' }, ticks: { font: { size: 11 } } }
                }
            }
        });

        function updateChartColors() {
            const isDark = document.body.classList.contains('dark-theme-variables');
            const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(132,139,200,0.12)';
            const tickColor = isDark ? '#a3bdcc' : '#677483';
            [revenueChart, customerChart].forEach(c => {
                c.options.scales.x.ticks.color = tickColor;
                c.options.scales.y.ticks.color = tickColor;
                c.options.scales.y.grid.color = gridColor;
                c.update();
            });
        }