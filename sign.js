 document.getElementById("place").addEventListener("change", function () {
      document.getElementById("selectedCity").textContent = this.value;
    });

    // CHARACTER COUNTER
    document.getElementById("address").addEventListener("input", function () {
      let max = 150;
      let left = max - this.value.length;
      document.getElementById("charsLeft").textContent = left;
    });

    // FORM VALIDATION + HIGHLIGHT
    function submitForm() {
      let fields = ["name", "password", "email", "address"];
      let empty = false;

      fields.forEach(id => {
        let field = document.getElementById(id);
        if (field.value.trim() === "") {
          field.classList.add("error");
          empty = true;
        } else {
          field.classList.remove("error");
        }
      });

      if (empty) {
        alert("Please fill all fields before submitting!");
        return;
      }

      alert("Form submitted successfully!");
    }

    // CLEAR ERRORS ON RESET
    function resetForm() {
      let fields = ["name", "password", "email", "address"];
      fields.forEach(id => {
        document.getElementById(id).classList.remove("error");
      });

      document.getElementById("selectedCity").textContent = "KORAMANGALA";
      document.getElementById("charsLeft").textContent = "150";
    }