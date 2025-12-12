// Event-Vista/homescript.js
        const planners = {
            Wedding: [
                { name: "Elite Wedding Planners", rating: "4.9★", price: "₹50,000 - ₹2,00,000" },
                { name: "Dream Day Events", rating: "4.8★", price: "₹75,000 - ₹3,00,000" },
                { name: "Royal Wedding Co.", rating: "4.7★", price: "₹1,00,000 - ₹5,00,000" }
            ],
            Birthday: [
                { name: "Party Perfect", rating: "4.8★", price: "₹15,000 - ₹50,000" },
                { name: "Celebration Station", rating: "4.6★", price: "₹10,000 - ₹40,000" },
                { name: "Fun Times Events", rating: "4.7★", price: "₹20,000 - ₹60,000" }
            ],
            Corporate: [
                { name: "Pro Events Management", rating: "4.9★", price: "₹1,00,000 - ₹10,00,000" },
                { name: "Business Solutions Events", rating: "4.7★", price: "₹75,000 - ₹5,00,000" },
                { name: "Corporate Connect", rating: "4.8★", price: "₹50,000 - ₹3,00,000" }
            ],
        };

        function showPlanners(type) {
            const modal = document.getElementById('plannerModal');
            const title = document.getElementById('modalTitle');
            const list = document.getElementById('plannerList');
            
            title.textContent = type + ' Planners & Venues';
            list.innerHTML = '';
            
            planners[type].forEach(p => {
                const div = document.createElement('div');
                div.className = 'planner';
                div.innerHTML = `
                    <div class="planner-info">
                        <h4>${p.name}</h4>
                        <p>Rating: ${p.rating}</p>
                    </div>
                    <div class="price">${p.price}</div>
                `;
                list.appendChild(div);
            });
            
            modal.style.display = 'block';
        }

        function closeModal() {
            document.getElementById('plannerModal').style.display = 'none';
        }

        window.onclick = function(e) {
            const modal = document.getElementById('plannerModal');
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        }