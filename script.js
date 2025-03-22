document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const pinBtn = document.querySelector(".pin-btn");

    // Menyuni ochish/yopish
    menuIcon.addEventListener("click", () => {
        const isPinned = navLinks.classList.contains("pinned");
        if (isPinned) return; // Agar pinned bo‘lsa, menu-icon ishlamaydi

        menuIcon.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Menyuni chetga surib turish
    pinBtn.addEventListener("click", () => {
        const isPinned = navLinks.classList.contains("pinned");

        if (!isPinned) {
            // Pin qilish
            navLinks.classList.add("pinned");
            navLinks.classList.add("active"); // Menyu ochiq bo‘ladi
            pinBtn.classList.add("pinned");
            menuIcon.classList.remove("active"); // Hamburgerni yopish
        } else {
            // Unpin qilish
            navLinks.classList.remove("pinned");
            navLinks.classList.remove("active"); // Menyu yopiladi
            pinBtn.classList.remove("pinned");
        }
    });

    // Menyu elementiga bosilganda menyuni yopish (agar pinned bo‘lmasa)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            if (!navLinks.classList.contains("pinned")) {
                menuIcon.classList.remove("active");
                navLinks.classList.remove("active");
            }
        });
    });

    // Tashqariga bosilganda menyuni yopish (agar pinned bo‘lmasa)
    document.addEventListener("click", (e) => {
        if (
            !navLinks.classList.contains("pinned") &&
            !navLinks.contains(e.target) &&
            !menuIcon.contains(e.target) &&
            !pinBtn.contains(e.target)
        ) {
            menuIcon.classList.remove("active");
            navLinks.classList.remove("active");
        }
    });

    // Quyidagi qismlar oldingi kodlardan olingan
    // Typing Effect
    const texts = [
        "Backend Developer",
        "Frontend Developer",
        "UI/UX Designer",
        "Web Developer",
        "Telegram Bots Creator",
        "AI Creator",
        "Cybersecurity Specialist"
    ];
    const typingElement = document.getElementById("typing");
    let index = 0;
    let currentText = "";
    let isDeleting = false;
    let speed = 150;

    function type() {
        let text = texts[index];

        if (isDeleting) {
            currentText = text.substring(0, currentText.length - 1);
            speed = 100;
        } else {
            currentText = text.substring(0, currentText.length + 1);
            speed = 150;
        }

        typingElement.innerHTML = currentText;

        if (!isDeleting && currentText === text) {
            speed = 1000;
            isDeleting = true;
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            index = (index + 1) % texts.length;
            speed = 150;
        }

        setTimeout(() => {
            requestAnimationFrame(type);
        }, speed);
    }
    type();

    // Preloader
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000);
    }, 3000);

    // Projects Animatsiyasi
    const projects = document.querySelectorAll(".project");
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add("visible");
        }, index * 200);
    });

    projects.forEach(project => {
        project.addEventListener("mouseover", () => {
            project.classList.add("hovered");
        });
        project.addEventListener("mouseout", () => {
            project.classList.remove("hovered");
        });
    });

    // Filter Button
    const filterBtn = document.querySelector("#filter-btn");
    filterBtn.addEventListener("click", () => {
        projects.forEach(project => {
            if (!project.classList.contains("selected")) {
                project.style.display = "none";
            }
        });
    });

    // Contact Details Shake Animatsiyasi
    document.querySelectorAll(".contact-details p").forEach(item => {
        item.addEventListener("mouseenter", () => {
            const icon = item.querySelector("i");
            icon.classList.add("shake");
        });
    });
});