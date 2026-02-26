function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function updateCopyrightYear() {
    let currentYear = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = 'Copyright &#169; ' + currentYear + ' Chom Trevai. All Rights Reserved.';
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcons(newTheme);
}

function updateToggleIcons(theme) {
    const buttons = document.querySelectorAll('.theme-toggle');
    buttons.forEach(function(btn) {
        btn.innerHTML = theme === 'dark' ? '&#9788;' : '&#9790;';
    });
}

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateToggleIcons(theme);
}

function initTheme() {
    var saved = localStorage.getItem('theme');
    applyTheme(saved || getSystemTheme());

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
        if (!localStorage.getItem('theme')) {
            applyTheme(getSystemTheme());
        }
    });
}

initTheme();
updateCopyrightYear();