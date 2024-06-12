function checkPasswordStrength(password) {
    var blurContainer = document.getElementById('blur-container');
    var strength = 0;

    if (password.match(/[a-zA-Z0-9]+/)) {
        strength += 1;
    }

    if (password.match(/[~!@#$%^&*()_+{}":;'[\]]+/)) {
        strength += 1;
    }

    if (password.length > 7) {
        strength += 1;
    }

    switch (strength) {
        case 1:
            blurContainer.className = 'blur-weak';
            break;
        case 2:
            blurContainer.className = 'blur-medium';
            break;
        case 3:
            blurContainer.className = 'blur-strong';
            break;
        default:
            blurContainer.className = ''; // Remove any existing blur class
    }
}
