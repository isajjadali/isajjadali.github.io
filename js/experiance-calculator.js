function getExperiance(date, remainingMonths) {
    let years = new Date().getFullYear() - new Date(date).getFullYear();
    let otherMonths = new Date().getMonth() + 1 + remainingMonths;
    if (otherMonths < 12) {
        document.write(years + '.' + otherMonths);
        return;
    }
    document.write((years + (otherMonths / 12)).toFixed(2));
}
