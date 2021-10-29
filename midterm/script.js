//wasn't able to return the data so will have to refresh page manually
$(document).ready(function(){
  $('#night').click(function(){
    $(this).css("background-color", "white");
    $(this).css("color", "black");
    $("body").css("background", "#161616");
    $(".topnav a").css("color", "white");
    $(".topnav a.active").css("color", "pink");
    $("p, h4").css("color", "white");
  });
});


//this is the starting search bar
//originally I thought about adding this code to each popup option but I figured it would look much neater being single
$(function() {
    $("#my-show").click(function() {
      let lookShow = $("#look-show").val()
      if (lookShow != '') {
        getShow(lookShow)
      }
      //reset the input
    $('#look-show').val('')
  })
 })


//to create the function for searchShow I used lookShow instead and used one single set of data to search once
//I tried to figure out how to revert the search back to clean when making a new search but couldn't quite get it right
 function getShow(lookShow) {
   $.getJSON(`https://api.tvmaze.com/search/shows?q=${lookShow}`, function(data) {
           console.log('data: ', data)
           for (let i =  0 ; i < 1; i++) {
      // add some show data
      let show = data[i].show
      // ternary statement
      let sImage = show.image == null ? `placeholder.jpg height="100%"` : show.image.medium
      let sImg = $(`<div class="show"><img src=${sImage} /> <h3>${ show.name}</h3> <p><i> ${ show.language}</i> <br><h4>${ show.summary}</h4></p></div>`)
      let infoButton = $(`<button class="get-info">Get More Info</button>`)
      //append it to the container
      $('#theshow').append(sImg)
      $("#theshow").append(infoButton)
      //function needed
      getInfo(infoButton, show.id)

    }
     }).fail(function() {
       //we can add a "fail" function to our AJAX request to do something if it fails
       console.log("that request failed")
     })
 }

//this function is to get the actor's names and images of the more info button
 function getInfo(element, showId) {
  element.click(function() {
    $.getJSON(`https://api.tvmaze.com/shows/${showId}/cast`, function(data) {
      console.log('data', data)
      for (let actor of data) {
        let noImgs = actor.person.image == null ? `placeholder.jpg` : actor.person.image.medium
        element.after(`<li><div>${actor.person.name} as ${actor.character.name} <p><img src=${noImgs} width='50px'/></div></li>`)
      }
    })
  })
}

//while I'm sure there must be an easier way to get the same date for each different search I could not figure it output
//my coding isn't as dry as I wanted it to but I managed to simplify as much as I could for each pop up container
 //this is the beginning for the popup modal
 //originally I wanted to use the genre data but the TVMAZE api doesn't have one so I had to manually put a search word for each containers
 // after this all coding is repetitive of just the same code with different names

 $('#popup1').popup();
document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);

        function fetchUserData(){
            fetch('https://api.tvmaze.com/search/shows?q=fantasy')
                .then(response => response.json())
                .then(data => {
                    let output = '<h2>List of Fantasy Shows</h2>';
                    output += '<ul>';
                    data.forEach(function(data) {
                      //what I used for when image was null
                      let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                        output += `
                            <li>
                            <b><h3>${data.show.name}</h3></b>
                            <p><i> ${data.show.language}</i></p>
                            <p> DOP: ${data.show.premiered}</p>
                            <p><img src=${showImage}>
                            </li>
                        `;

                    });
                    output += '</ul>'

                    document.getElementById("response").innerHTML = output;

                });

        }


        //for the popup modal 2//
$('#popup2').popup();
//this will be to look up your own show

//this is for the already opened content to look at

document.getElementById('fetchUserDataBtn2').addEventListener('click', fetchUserData2);

        function fetchUserData2(){
            fetch('https://api.tvmaze.com/search/shows?q=romance')
                .then(response => response.json())
                .then(data => {
                    let output2 = '<h2>List of Romance Shows</h2>';
                    output2 += '<ul>';

                    data.forEach(function(data) {
                      let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                        output2 += `
                            <li>
                            <b><h3>${data.show.name}</h3></b>
                            <p><i> ${data.show.language}</i></p>
                            <p> DOP: ${data.show.premiered}</p>
                            <p><img src=${showImage}>
                            </li>
                        `;
                    });
                    output2 += '</ul>'
                    document.getElementById("response2").innerHTML = output2;
                });
        }
//FOR POP MODAL 3
$('#popup3').popup();
document.getElementById('fetchUserDataBtn3').addEventListener('click', fetchUserData3);

        function fetchUserData3(){
            fetch('https://api.tvmaze.com/search/shows?q=action')
                .then(response => response.json())
                .then(data => {
                    let output3 = '<h2>List of Action Shows</h2>';
                    output3 += '<ul>';

                    data.forEach(function(data) {
                      let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                        output3 += `
                            <li>
                            <b><h3>${data.show.name}</h3></b>
                            <p><i> ${data.show.language}</i></p>
                            <p> DOP: ${data.show.premiered}</p>
                            <p><img src=${showImage}>
                            </li>
                        `;
                    });
                    output3 += '</ul>'
                    document.getElementById("response3").innerHTML = output3;
                });
        }
//FOR POP MODAL 4
$('#popup4').popup();
document.getElementById('fetchUserDataBtn4').addEventListener('click', fetchUserData4);

        function fetchUserData4(){
            fetch('https://api.tvmaze.com/search/shows?q=horror')
                .then(response => response.json())
                .then(data => {
                    let output4 = '<h2>List of Horror Shows</h2>';
                    output4 += '<ul>';

                    data.forEach(function(data) {
                      let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                        output4 += `
                            <li>
                            <b><h3>${data.show.name}</h3></b>
                            <p><i> ${data.show.language}</i></p>
                            <p> DOP: ${data.show.premiered}</p>
                            <p><img src=${showImage}>
                            </li>
                        `;
                    });
                    output4 += '</ul>'
                    document.getElementById("response4").innerHTML = output4;
                });
        }

//FOR POP MODAL 5
$('#popup5').popup();
document.getElementById('fetchUserDataBtn5').addEventListener('click', fetchUserData5);

        function fetchUserData5(){
            fetch('https://api.tvmaze.com/search/shows?q=anime')
                .then(response => response.json())
                .then(data => {
                    let output5 = '<h2>List of Anime Shows</h2>';
                    output5 += '<ul>';

                    data.forEach(function(data) {
                      let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                        output5 += `
                            <li>
                            <b><h3>${data.show.name}</h3></b>
                            <p><i> ${data.show.language}</i></p>
                            <p> DOP: ${data.show.premiered}</p>
                            <p><img src=${showImage}>
                            </li>
                        `;
                    });
                    output5 += '</ul>'
                    document.getElementById("response5").innerHTML = output5;
                });
        }

//FOR POP MODAL 6
$('#popup6').popup();
document.getElementById('fetchUserDataBtn6').addEventListener('click', fetchUserData6);

        function fetchUserData6(){
            fetch('https://api.tvmaze.com/search/shows?q=comedy')
                .then(response => response.json())
                .then(data => {
                    let output6 = '<h2>List of Comedy Shows</h2>';
                    output6 += '<ul>';

                    data.forEach(function(data) {
                      let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                        output6 += `
                            <li>
                            <b><h3>${data.show.name}</h3></b>
                            <p><i> ${data.show.language}</i></p>
                            <p> DOP: ${data.show.premiered}</p>
                            <p><img src=${showImage}>
                            </li>
                        `;
                    });
                    output6 += '</ul>'
                    document.getElementById("response6").innerHTML = output6;
                });
        }

        //FOR POP MODAL 7
        $('#popup7').popup();
        document.getElementById('fetchUserDataBtn7').addEventListener('click', fetchUserData7);

                function fetchUserData7(){
                    fetch('https://api.tvmaze.com/search/shows?q=mystery')
                        .then(response => response.json())
                        .then(data => {
                            let output7 = '<h2>List of Mystery Shows</h2>';
                            output7 += '<ul>';

                            data.forEach(function(data) {
                              let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                                output7 += `
                                    <li>
                                    <b><h3>${data.show.name}</h3></b>
                                    <p><i> ${data.show.language}</i></p>
                                    <p> DOP: ${data.show.premiered}</p>
                                    <p><img src=${showImage}>
                                    </li>
                                `;
                            });
                            output7 += '</ul>'
                            document.getElementById("response7").innerHTML = output7;
                        });
                }

        //FOR POP MODAL 8
        $('#popup8').popup();
        document.getElementById('fetchUserDataBtn8').addEventListener('click', fetchUserData8);

                function fetchUserData8(){
                    fetch('https://api.tvmaze.com/search/shows?q=crime')
                        .then(response => response.json())
                        .then(data => {
                            let output8 = '<h2>List of Crime Shows</h2>';
                            output8 += '<ul>';

                            data.forEach(function(data) {
                              let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                                output8 += `
                                    <li>
                                    <b><h3>${data.show.name}</h3></b>
                                    <p><i> ${data.show.language}</i></p>
                                    <p> DOP: ${data.show.premiered}</p>
                                    <p><img src=${showImage}>
                                    </li>
                                `;
                            });
                            output8 += '</ul>'
                            document.getElementById("response8").innerHTML = output8;
                        });
                }

                //FOR POP MODAL 9
                $('#popup9').popup();
                document.getElementById('fetchUserDataBtn9').addEventListener('click', fetchUserData9);

                        function fetchUserData9(){
                            fetch('https://api.tvmaze.com/search/shows?q=thriller')
                                .then(response => response.json())
                                .then(data => {
                                    let output9 = '<h2>List of Thriller Shows</h2>';
                                    output9 += '<ul>';

                                    data.forEach(function(data) {
                                      let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                                        output9 += `
                                            <li>
                                            <b><h3>${data.show.name}</h3></b>
                                            <p><i> ${data.show.language}</i></p>
                                            <p> DOP: ${data.show.premiered}</p>
                                            <p><img src=${showImage}>
                                            </li>
                                        `;
                                    });
                                    output9 += '</ul>'
                                    document.getElementById("response9").innerHTML = output9;
                                });
                        }

                        //FOR POP MODAL 10
                        $('#popup10').popup();
                        document.getElementById('fetchUserDataBtn10').addEventListener('click', fetchUserData10);

                                function fetchUserData10(){
                                    fetch('https://api.tvmaze.com/search/shows?q=documentary')
                                        .then(response => response.json())
                                        .then(data => {
                                            let output10 = '<h2>List of Documentary Shows</h2>';
                                            output10 += '<ul>';

                                            data.forEach(function(data) {
                                              let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                                                output10 += `
                                                    <li>
                                                    <b><h3>${data.show.name}</h3></b>
                                                    <p><i> ${data.show.language}</i></p>
                                                    <p> DOP: ${data.show.premiered}</p>
                                                    <p><img src=${showImage}>
                                                    </li>
                                                `;
                                            });
                                            output10 += '</ul>'
                                            document.getElementById("response10").innerHTML = output10;
                                        });
                                }

                                //FOR POP MODAL 11
                                $('#popup11').popup();
                                document.getElementById('fetchUserDataBtn11').addEventListener('click', fetchUserData11);

                                        function fetchUserData11(){
                                            fetch('https://api.tvmaze.com/search/shows?q=food')
                                                .then(response => response.json())
                                                .then(data => {
                                                    let output11 = '<h2>List of Food Shows</h2>';
                                                    output11 += '<ul>';

                                                    data.forEach(function(data) {
                                                      let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                                                        output11 += `
                                                            <li>
                                                            <b><h3>${data.show.name}</h3></b>
                                                            <p><i> ${data.show.language}</i></p>
                                                            <p> DOP: ${data.show.premiered}</p>
                                                            <p><img src=${showImage}>
                                                            </li>
                                                        `;
                                                    });
                                                    output11 += '</ul>'
                                                    document.getElementById("response11").innerHTML = output11;
                                                });
                                        }

                                        //FOR POP MODAL 12
                                        $('#popup12').popup();
                                        document.getElementById('fetchUserDataBtn12').addEventListener('click', fetchUserData12);

                                                function fetchUserData12(){
                                                    fetch('https://api.tvmaze.com/search/shows?q=nature')
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            let output12 = '<h2>List of Nature Shows</h2>';
                                                            output12 += '<ul>';

                                                            data.forEach(function(data) {
                                                              let showImage = data.show.image == null ? `placeholder.jpg height="100%"` : data.show.image.medium
                                                                output12 += `
                                                                    <li>
                                                                    <b><h3>${data.show.name}</h3></b>
                                                                    <p><i> ${data.show.language}</i></p>
                                                                    <p> DOP: ${data.show.premiered}</p>
                                                                    <p><img src=${showImage}>
                                                                    </li>
                                                                `;
                                                            });
                                                            output12 += '</ul>'
                                                            document.getElementById("response12").innerHTML = output12;
                                                        });
                                                }
