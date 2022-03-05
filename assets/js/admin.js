//Delete data in reservation
if(window.location.pathname == "/admin-reservation-list"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/reservation/${id}`,
            "method" : "DELETE",
        }

        if(confirm("Do you want to delete this data?")){
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}

//Delete data in contact
if(window.location.pathname == "/admin-contact"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr('data-id');
        var request = {
            "url" : `http://localhost:3000/api/contacts/${id}`,
            "method" : "DELETE",
        }

        if(confirm("Do you want to delete this data?")){
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}

//Delete data in user account
if(window.location.pathname == "/admin-customer-list"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/customers/${id}`,
            "method" : "DELETE",
        }

        if(confirm("Do you want to delete this data?")){
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}


//Delete Image christening
if(window.location.pathname == "/admin-christening"){
    $ondelete = $(".card-header .card-tools a.delete-christ");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");
        var request = {
            "url" : `http://localhost:3000/api/christening/gal/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}

//Delete Image birthday
if(window.location.pathname == "/admin-birthday"){
    $ondelete = $(".card-header .card-tools a.delete-birth");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");
        var request = {
            "url": `http://localhost:3000/api/birthday/gal/${id}`,
            "method":"DELETE"
        }

        if(confirm("Do you want to delete this data?")){
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}


//Delete Image wedding
if(window.location.pathname == "/admin-wedding"){
    $ondelete = $(".card-header .card-tools a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");
        var request = {
            "url": `http://localhost:3000/api/wedding/gal/${id}`,
            "method":"DELETE"
        }

        if(confirm("Do you want to delete this data?")){
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}

//Delete Image debut
if(window.location.pathname == "/admin-debut"){
    $ondelete = $(".card-header .card-tools a.delete-debut");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");
        var request = {
            "url": `http://localhost:3000/api/debut/gal/${id}`,
            "method":"DELETE"
        }

        if(confirm("Do you want to delete this data?")){
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}

//Delete Image other
if(window.location.pathname == "/admin-other"){
    $ondelete = $(".card-header .card-tools a.delete-other");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");
        var request = {
            "url": `http://localhost:3000/api/other/gal/${id}`,
            "method":"DELETE"
        }

        if(confirm("Do you want to delete this data?")){
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}

