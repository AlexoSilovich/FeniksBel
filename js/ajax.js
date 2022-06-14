$(document).ready(function() {

  $(".link").click(function() {
    let info = $(this).attr("href") + " #change_types"

    $("#change_types").hide("fast", loadContent)
    $(".loader").fadeIn("normal")

    function loadContent () {
      $("#change_types").load(info, "", function () {
        $("#change_types").show("normal", hideLoader())
      })
    }

    function hideLoader() {
      $(".loader").fadeOut("normal")
    }

    return false
  })

  $(".change_link").click(function() {
    let info = $(this).attr("href") + " #change_slider"

    $("#change_slider").hide("fast", loadContent)
    $(".loader2").fadeIn("normal")

    function loadContent () {
      $("#change_slider").load(info, "", function () {
        $("#change_slider").show("normal", hideLoader())
      })
    }

    function hideLoader() {
      $(".loader2").fadeOut("normal")
    }

    return false
  })
})