document.addEventListener('DOMContentLoaded', function() {
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const style = window.getComputedStyle(sidebar);
        const transform = style.getPropertyValue('transform');

        if(transform === "matrix(1, 0, 0, 1, -100, 0)") {  // translateX(-100%) is represented as matrix(1, 0, 0, 1, -100, 0)
            sidebar.style.transform = "translateX(0)";
        } else {
            sidebar.style.transform = "translateX(-100%)";
        }
    }

    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', toggleSidebar);
});
