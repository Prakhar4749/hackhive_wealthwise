

// tb

function sendRecommendation(event) {
    var form = document.getElementById("recommendationForm");
    var tenure = form.elements["tenure"].value;
    var amount = form.elements["amount"].value;
    event.preventDefault();

    

    var data = {
        "tenure": parseInt(tenure),
        "amount": parseFloat(amount)
    };

    fetch("http://65.2.161.64/recommend", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        var responseDiv = document.getElementById("response");
        console.log(data.recommend)
        responseDiv.innerHTML = "<p>Recommendation: " + data.recommend + "</p>";
    })
    .catch(error => {
        console.error("Error:", error);
        var responseDiv = document.getElementById("response");
        responseDiv.innerHTML = "<p>An error occurred. Please try again.</p>";
    });
}   



