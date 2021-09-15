window.addEventListener("load", function() {
    // page loader
        document.querySelector(".page-loader").classList.add("fade-out");
        setTimeout(function(){
            document.querySelector(".page-loader").style.display = "none";
        }, 600);
    
    // animation on scroll
        AOS.init();
    });
    
    // toggle navbar
    const navToggler = document.querySelector(".nav-toggler");
    navToggler.addEventListener("click", toggleNav);
    
    function toggleNav() {
        navToggler.classList.toggle("active");
        document.querySelector(".nav").classList.toggle("open");
    };
    
    // close nav when clicking on a nav item
    document.addEventListener("click", function(e) {
        if(e.target.closest(".nav-item")){
            toggleNav();
        }
    });
    
    // sticky header
    window.addEventListener("scroll", function() {
        if(this.pageYOffset > 60) {
            document.querySelector(".header").classList.add("sticky");
        } else {
            document.querySelector(".header").classList.remove("sticky");
        }
    });

    const scrollBtn = document.querySelector(".scroll-button a");
    // scroll button
    window.addEventListener("scroll", function() {
        if(this.pageYOffset > 1650) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });
    
    // menu tabs
    const menuTabs = document.querySelector(".menu-tabs");
    menuTabs.addEventListener("click", function (e) {
        if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
            const target = e.target.getAttribute("data-target");
            menuTabs.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const menuSection = document.querySelector(".menu-section");
            menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
            menuSection.querySelector(target).classList.add("active");
            // animation on scroll
            AOS.init();
        }
    });

    // food tabs
    const btnCLear = document.querySelector(".clear");
    btnCLear.addEventListener("click", function() {
        sE.style.display = "none";
        yGBA.style.display = "none";
        sBCS.style.display = "none";
        oPP.style.display = "none";
        bOQ.style.display = "none";
        aFL.style.display = "none";
        hPAS.style.display = "none";
        fAFP.style.display = "none";
        sA.style.display = "none";
        fFA.style.display = "none";
        bA.style.display = "none";
        lA.style.display = "none";
        cFBB.style.display = "none";
        lBC.style.display = "none";
        AOS.init();
    });
    // Lanches Rápidos start
    // Yogurte Grego com Blueberries e Amêndoas
    const btn_yGBA = document.querySelector(".btn-yGBA");
    const yGBA = document.querySelector(".yGBA");
    btn_yGBA.addEventListener("click", function() {
        if (yGBA.style.display === "block") {
            yGBA.style.display = "none";
        } else {
            yGBA.style.display = "block";
            location.href = "#yGBA";
        }
        AOS.init();
    });
    // Ovo com Pimentão e Pepino
    const btn_oPP = document.querySelector(".btn-oPP");
    const oPP = document.querySelector(".oPP");
    btn_oPP.addEventListener("click", function() {
        if (oPP.style.display === "block") {
            oPP.style.display = "none";
        } else {
            oPP.style.display = "block";
            location.href = "#oPP";
        }
        AOS.init();
    });
    // Bacon com Ovo e Queijo
    const btn_bOQ = document.querySelector(".btn-bOQ");
    const bOQ = document.querySelector(".bOQ");
    btn_bOQ.addEventListener("click", function() {
        if (bOQ.style.display === "block") {
            bOQ.style.display = "none";
        } else {
            bOQ.style.display = "block";
            location.href = "#bOQ";
        }
        AOS.init();
    });
    // Lanches Rápidos end
    // Almoço start
    // Arros com Frango e Legumes
    const btn_aFL = document.querySelector(".btn-aFL");
    const aFL = document.querySelector(".aFL");
    btn_aFL.addEventListener("click", function() {
        if (aFL.style.display === "block") {
            aFL.style.display = "none";
        } else {
            aFL.style.display = "block";
            location.href = "#aFL";
        }
        AOS.init();
    });
    // Hambúrguer de Peru com Arroz e Salada
    const btn_hPAS = document.querySelector(".btn-hPAS");
    const hPAS = document.querySelector(".hPAS");
    btn_hPAS.addEventListener("click", function() {
        if (hPAS.style.display === "block") {
            hPAS.style.display = "none";
        } else {
            hPAS.style.display = "block";
            location.href = "#hPAS";
        }
        AOS.init();
    });
    // Lasanha de Batata Doce
    const btn_lBC = document.querySelector(".btn-lBC");
    const lBC = document.querySelector(".lBC");
    btn_lBC.addEventListener("click", function() {
        if (lBC.style.display === "block") {
            lBC.style.display = "none";
        } else {
            lBC.style.display = "block";
            location.href = "#lBC";
        }
        AOS.init();
    });
    // Almoço end
    // Pré-Treino start
    // Smoothie Espinafre
    const btn_sE = document.querySelector(".btn-sE");
    const sE = document.querySelector(".sE");
    btn_sE.addEventListener("click", function() {
        if (sE.style.display === "block") {
            sE.style.display = "none";
        } else {
            sE.style.display = "block";
            location.href = "#sE";
        }
        AOS.init();
    });
    // Strawberry Blueberry Cereal Smoothie
    const btn_sBCS = document.querySelector(".btn-sBCS");
    const sBCS = document.querySelector(".sBCS");
    btn_sBCS.addEventListener("click", function() {
        if (sBCS.style.display === "block") {
            sBCS.style.display = "none";
        } else {
            sBCS.style.display = "block";
            location.href = "#sBCS";
        }
        AOS.init();
    });
    // Suco de Maçã com Beterraba
    const btn_sMB = document.querySelector(".btn-sMB");
    const sMB = document.querySelector(".sMB");
    btn_sMB.addEventListener("click", function() {
        if (sMB.style.display === "block") {
            sMB.style.display = "none";
        } else {
            sMB.style.display = "block";
            location.href = "#sMB";
        }
        AOS.init();
    });
    // Pré-Treino end
    // Janta start
    // Frango Com Abobrinha E Feijão Preto
    const btn_fAFP = document.querySelector(".btn-fAFP");
    const fAFP = document.querySelector(".fAFP");
    btn_fAFP.addEventListener("click", function() {
        if (fAFP.style.display === "block") {
            fAFP.style.display = "none";
        } else {
            fAFP.style.display = "block";
            location.href = "#fAFP";
        }
        AOS.init();
    });
    // Salada de Atum
    const btn_sA = document.querySelector(".btn-sA");
    const sA = document.querySelector(".sA");
    btn_sA.addEventListener("click", function() {
        if (sA.style.display === "block") {
            sA.style.display = "none";
        } else {
            sA.style.display = "block";
            location.href = "#sA";
        }
        AOS.init();
    });
    // Filé de Frango com Antepasto
    const btn_fFA = document.querySelector(".btn-fFA");
    const fFA = document.querySelector(".fFA");
    btn_fFA.addEventListener("click", function() {
        if (fFA.style.display === "block") {
            fFA.style.display = "none";
        } else {
            fFA.style.display = "block";
            location.href = "#fFA";
        }
        AOS.init();
    });
    // Burrito de Abobrinha
    const btn_bA = document.querySelector(".btn-bA");
    const bA = document.querySelector(".bA");
    btn_bA.addEventListener("click", function() {
        if (bA.style.display === "block") {
            bA.style.display = "none";
        } else {
            bA.style.display = "block";
            location.href = "#bA";
        }
        AOS.init();
    });
    // Lasanha de Abobrinha
    const btn_lA = document.querySelector(".btn-lA");
    const lA = document.querySelector(".lA");
    btn_lA.addEventListener("click", function() {
        if (lA.style.display === "block") {
            lA.style.display = "none";
        } else {
            lA.style.display = "block";
            location.href = "#lA";
        }
        AOS.init();
    });
    // Couve-FLor Bang Bang
    const btn_cFBB = document.querySelector(".btn-cFBB");
    const cFBB = document.querySelector(".cFBB");
    btn_cFBB.addEventListener("click", function() {
        if (cFBB.style.display === "block") {
            cFBB.style.display = "none";
        } else {
            cFBB.style.display = "block";
            location.href = "#cFBB";
        }
        AOS.init();
    });
    // Janta end