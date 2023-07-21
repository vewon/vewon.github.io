function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.transform === 'translateX(0)') {
        sidebar.style.transform = 'translateX(-100%)';
    } else {
        sidebar.style.transform = 'translateX(0)';
    }
}