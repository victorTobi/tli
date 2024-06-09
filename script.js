document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var file = formData.get('image');
    
    if (file) {
        // Extract filename
        var filename = file.name;
        
        // Check if illness prediction is already stored for this filename
        var storedPrediction = localStorage.getItem(filename);
        var prediction;

        if (storedPrediction !== null) {
            // If prediction is already stored, use it
            prediction = storedPrediction;
        } else {
            // Otherwise, generate a random prediction
            var illnesses = ['Cataract', 'Glaucoma', 'Diabetic Retinopathy'];
            prediction = illnesses[Math.floor(Math.random() * illnesses.length)];

            // Store the prediction for this filename
            localStorage.setItem(filename, prediction);
        }

        // Display the prediction
        document.getElementById('prediction').innerText = 'Predicted Illness: ' + prediction;
    } else {
        alert('Please select an image.');
    }
});
