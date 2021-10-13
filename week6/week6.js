//onload function
$('#gif').prepend($('<img>',{id:'gif',src:'tv.gif',width:'20%',align:'center'}))


$(function() {
  $("#get-input").click(function() {
    let textInput = $("#text-input").val()
    //will reset if failed
    $("#fail").text('')
//adding our api
    if (textInput !== '')
    $.getJSON(`https://api.tvmaze.com/search/shows?q=${textInput}`, function(data) {
          console.log('data: ', data)
          if (data.length == 0) {
                $("#fail").text("We couldn't find anything for that topic")
              } else {
                for (let i = 0; i < 5; i++) {
                  let work = data[i]
                  //here we are adding the title and summary of the shows
                  $("#recommendations").append('<li>' + ' Title: ' + work.show.name + ' Language: ' + work.show.language +  ' Summary: ' + work.show.summary)
                  //an image will also be added
                  let img = $("<img/>", { src: work.show.image.medium })
                  img.appendTo('#recommendations')
                }

              }

            }).fail(function() {
              $('#fail').text("No show found.")
              console.log("we can't find anything")
            })


    //reset the input
    $('#text-input').val('')
  })
})
