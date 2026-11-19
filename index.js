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

        function calculateTotal() {
        if (!planSelect || !durationSelect) return;

        const monthlyPrice = parseInt(planSelect.value);
        const durationMonths = parseInt(durationSelect.value);

        let discount = 0;
        if (durationMonths === 3) {
            discount = 0.05; // 5% discount
        } else if (durationMonths === 6) {
            discount = 0.10; // 10% discount
        } else if (durationMonths === 12) {
            discount = 0.20; // 20% discount
        }

        const grossCost = monthlyPrice * durationMonths;
        const discountAmount = grossCost * discount;
        const finalCost = grossCost - discountAmount;

        if (totalCostText) {
            totalCostText.innerText = "₹" + Math.round(finalCost);
        }

        if (calculationDetails) {
            const planName = planSelect.options[planSelect.selectedIndex].text.split(" (")[0];
            if (discount > 0) {
                calculationDetails.innerText = planName + " for " + durationMonths + " Months (" + (discount * 100) + "% off applied)";
            } else {
                calculationDetails.innerText = planName + " for " + durationMonths + " Month";
            }
        }
    }

    calculateTotal();
});

