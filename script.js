function showReport() {
    const reportNumber = document.getElementById('reportNumber').value;
    const reportImageDiv = document.getElementById('reportImage');
    
    if (reportNumber) {
        reportImageDiv.innerHTML = `<img src="reports/${reportNumber}.jpg" alt="Report Image">`;
    } else {
        reportImageDiv.innerHTML = 'Please enter a report number.';
    }
}
