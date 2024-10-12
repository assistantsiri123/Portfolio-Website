<script>
    // Get the modal
    var modal = document.getElementById("imageModal");

    // Get the modal image and caption text
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    // Get all portfolio images
    var images = document.getElementsByClassName("portfolio-img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    }

    // Close the modal
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
</script>