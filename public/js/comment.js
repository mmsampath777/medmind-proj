function sendEmail() {
    var commentText = document.getElementById("comment-textarea").value;
    var userName = "Medmind"; // You can replace this with a dynamic value like user's name

    if (commentText.trim() === "") {
        alert("Please write a comment before submitting.");
        return; // Don't send the email if the textarea is empty
    }

  
    var templateParams = {
        to_name: "sampathram@student.tce.edu", // The recipient's email address
        from_name: userName,                  
        message: commentText                  
    };

    // Send the email using EmailJS
    emailjs.send('service_rvhs8um', 'template_vhxd025', templateParams)
        .then(function(response) {
            alert("Comment submitted successfully!");
            console.log('Success:', response);
        }, function(error) {
            alert("Error in sending the comment.");
            console.log('Error:', error);
        });
}

// Initialize EmailJS (replace 'YOUR_USER_ID' with your actual user ID)
(function()
 {
    emailjs.init('RDV9hNU3LwfrKMcdn');
})();
