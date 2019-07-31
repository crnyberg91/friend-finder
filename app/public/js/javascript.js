$("#submitBtn").on("click", e => {
    e.preventDefault();

    function checkForm() {
      let valid = true;
      if (!$("#name") && !$("#profilePhoto")) {
        alert("add a name and/photo please");
        return (valid = false);
      }
      $(".custom-select").each(function() {
        if ($(this).val() === "") {
          alert("answer all questions please");
          return (valid = false);
        }
      });
      return valid;
    }

    if (checkForm()) {
      const friendData = {
        name: $("#name")
          .val()
          .trim(),
        img: $("#profilePhoto")
          .val()
          .trim(),
        answers: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
      };

      $.post("/api/friends", friendData).then(data => {
        $("#bestName").text(data.name);
        $("#bestImg").attr("src", data.img);
        $("#resultsModal").modal("show");
      });
    }
    $("#name").empty();
    $("#profilePhoto").empty();
    $("#q1").empty();
    $("#q2").empty();
    $("#q3").empty();
    $("#q4").empty();
    $("#q5").empty();
    $("#q6").empty();
    $("#q7").empty();
    $("#q8").empty();
    $("#q9").empty();
    $("#q10").empty();
  });