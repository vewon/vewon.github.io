function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const style = window.getComputedStyle(sidebar);
    const transform = style.getPropertyValue('transform');

    if(transform === "translateX(-100%)") {
        sidebar.style.transform = "translateX(0)";
    } else {
        sidebar.style.transform = "translateX(-100%)";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');

        if(sidebar.style.transform === "translateX(-100%)") {
            sidebar.style.transform = "translateX(0)";
        } else {
            sidebar.style.transform = "translateX(-100%)";
        }
    }

    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', toggleSidebar);
});