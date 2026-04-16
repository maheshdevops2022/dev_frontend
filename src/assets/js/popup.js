function openPopup(){
  document.getElementById("demoPopup").style.display = "flex";
}

function closePopup(){
  document.getElementById("demoPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("demoForm");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    // Download file
    const link = document.createElement('a');
    link.href = "file/FinOps_Course.pdf";
    link.download = "FinOps_Course.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("Thank you! Your download will start now.");

    // OPTIONAL: submit form to PHP after download
    form.submit();

    closePopup();
  });
});