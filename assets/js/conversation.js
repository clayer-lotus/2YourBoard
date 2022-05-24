var settings = {
    "async": true,
    "crossDomain": true,

    "url": "/conversations/" + get_lastID + "",
    "method": "GET"
}

$.get(settings, function (response, statusText, xhr) {
    if (xhr.status == 200) {

        //   console.log(response);

        if (response.length == 0) {
            document.getElementById("our-conversation-visiblity").style.display = "none";
            document.getElementById("conversation").style.display = "none";

        } else {
            for (i = 0; i < response.length; i++) {

                var imageAddress = [
                    'assets/images/teamLeader/Daraius Nawroze.JPG',
                    'assets/images/teamLeader/Desmond.JPG',
                    'assets/images/teamLeader/Edward photo.jpeg',
                    'assets/images/teamLeader/Franck 07 2020.JPG',
                    'assets/images/teamLeader/Gurpreet1.JPG',
                    'assets/images/teamLeader/Helen Yang photo.jpg',
                    'assets/images/teamLeader/Keith Holder.jpeg',
                    'assets/images/teamLeader/Michael2.JPG',
                    'assets/images/teamLeader/SylvieDavidson.jpg',
                    'assets/images/teamLeader/Jeremy Young.JPG',
                    'assets/images/teamLeader/Vivian Lines.png',
                    'assets/images/teamLeader/Anuj.PNG',
                    'assets/images/1227457020-27612-yourboardfavicon.png',
                    'assets/images/teamLeader/Brian_Henderson.jpg'
                ];
                if (response[i][0][219943030].value == "Your Board") {
                    var comment = '<div class="media"  data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[12] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }

                if (response[i][0][219943030].value == "Anuj Kumar Kannojia") {
                    var comment = '<div class="media"  data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[11] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Franck Picard") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[3] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Sylvie Davidson") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[8] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Michael van Ommeren") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[7] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Daraius K NAWROZE") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[0] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Vivian Lines") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[10] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Desmond Wee") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[1] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Gigi Grewal") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[4] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Jeremy Young") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[9] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Keith Holder") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[6] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


                if (response[i][0][219943030].value == "Helen Yang") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[5] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }

                if (response[i][0][219943030].value == "Edward Stockreisser") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[2] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }

                if (response[i][0][219943030].value == "Brian Henderson") {
                    var comment = '<div class="media" data-aos="fade-up" data-aos-delay="0.03"> <img class="media-object" src="' + imageAddress[13] + '" > <div class="media-body"> <p class="media-para">' + response[i][1][219943038].value + '</p> </div> </div>';
                    $('.conversation-comment').append(comment);
                }


            }

        }

    }
});
