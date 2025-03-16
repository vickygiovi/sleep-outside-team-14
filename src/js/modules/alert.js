import alerts from '../../public/json/alerts.json'; 

class Alert {
    constructor() {
        this.alertsData = alerts; // Store imported JSON
    }

    // Function to display alerts on the page
    renderAlerts() {
        if (!this.alertsData || this.alertsData.length === 0) return;

        const alertSection = document.createElement('section');
        alertSection.className = 'alert-list';

        this.alertsData.forEach(alert => {
            const alertItem = document.createElement('p');
            alertItem.textContent = alert.message;
            alertItem.style.backgroundColor = alert.background;
            alertItem.style.color = alert.color;
            alertSection.appendChild(alertItem);
        });

        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.prepend(alertSection);
        }
    }
}

// Export the class as default
export default Alert;
