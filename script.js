document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                entry.target.classList.remove("animate");
            }
        });
    });

    document.querySelectorAll(".service, .post").forEach(section => {
        observer.observe(section);
    });
});
