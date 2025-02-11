// // Initialize EmailJS with your Public Key
// emailjs.init("NaveT_Dl86Jixkw94"); // Replace with your EmailJS Public Key

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("contactForm").addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent default form submission

//         // Collect form data
//         let formData = {
//             name: document.getElementById("name").value,
//             email: document.getElementById("email").value,
//             phone: document.getElementById("phone").value,
//             project: document.getElementById("project").value,
//             subject: document.getElementById("subject").value,
//             message: document.getElementById("message").value
//         };

//         // Send email using EmailJS
//         emailjs.send("service_l7dzkia", "template_3420iv3", formData)
//             .then(function (response) {
//                 document.getElementById("responseMessage").innerHTML = 
//                     "<p class='text-success'>Your message has been sent successfully!</p>";
//                 document.getElementById("contactForm").reset();
//             })
//             .catch(function (error) {
//                 document.getElementById("responseMessage").innerHTML = 
//                     "<p class='text-danger'>Failed to send message. Please try again later.</p>";
//             });
//     });
// });


// Initialize EmailJS with your Public Key
emailjs.init("NaveT_Dl86Jixkw94"); // Replace with your actual EmailJS Public Key

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Show loading text in the button
        let submitButton = document.querySelector("button[type='submit']");
        submitButton.innerHTML = "Sending...";
        submitButton.disabled = true;

        // Collect form data
        let formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            project: document.getElementById("project").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        // Send email using EmailJS
        emailjs.send("service_l7dzkia", "template_3420iv3", formData)
            .then(function (response) {
                // Show success message
                let responseMessage = document.getElementById("responseMessage");
                responseMessage.innerHTML = 
                    "<div class='alert alert-success mt-3'>✅ Your message has been sent successfully!</div>";
                responseMessage.style.display = "block";

                // Reset form after 1 second
                setTimeout(function () {
                    document.getElementById("contactForm").reset();
                    responseMessage.style.display = "none"; // Hide message after reset
                    submitButton.innerHTML = "Send Message";
                    submitButton.disabled = false;
                }, 1000);
            })
            .catch(function (error) {
                // Show error message
                let responseMessage = document.getElementById("responseMessage");
                responseMessage.innerHTML = 
                    "<div class='alert alert-danger mt-3'>❌ Failed to send message. Please try again later.</div>";
                responseMessage.style.display = "block";

                // Re-enable button
                submitButton.innerHTML = "Send Message";
                submitButton.disabled = false;
            });
    });
});

