document.addEventListener("DOMContentLoaded", function () {
    const planCards = document.querySelectorAll(".plan-card");
    const planSelect = document.getElementById("plan-select");
    const durationSelect = document.getElementById("duration-select");
    const totalCostText = document.getElementById("total-cost");
    const calculationDetails = document.getElementById("calculation-details");

    planCards.forEach(function (card) {
        card.addEventListener("click", function () {
            
            planCards.forEach(function (c) {
                c.classList.remove("active");
                const btn = c.querySelector(".select-btn");
                if (btn) {
                    btn.innerText = "Select Plan";
                }
            });

            card.classList.add("active");
            const activeBtn = card.querySelector(".select-btn");
            if (activeBtn) {
                activeBtn.innerText = "Selected";
            }

            const price = card.getAttribute("data-price");
            if (planSelect) {
                planSelect.value = price;
            }

            calculateTotal();
        });
    });
