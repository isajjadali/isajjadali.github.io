function getExperience(date) {
    let years = new Date().getFullYear() - new Date(date).getFullYear() - 1;

    let otherMonths = new Date().getMonth() + 1 + (12 - (new Date(date).getMonth() + 1));

    if (otherMonths < 12) {
        document.write(years + ((otherMonths + '').length < 2 ? '.0' : '.') + otherMonths);
        return;
    } else if (otherMonths === 12) {
        document.write(years + 1 + '.00');
        return;
    }
    document.write((years + 1 + '.0' + (otherMonths - 12)));
}
