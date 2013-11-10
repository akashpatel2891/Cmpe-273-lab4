$(document).ready(function()
{
    var myelements = $('td[title="status"]');
    for( i=0; i<myelements.length; i++ )
    {
            var newstatus = myelements[i].innerHTML;
            var id1 = myelements[i].id.slice("6");
            var id = "#"+ id1;
            if(newstatus == "lost")
                    {
                            $(id).attr("disabled","disabled");
                    }
            else{
                    $(id).removeAttr("disabled");
            }
    }
});

$(":button").click(function() {
    var isbn = this.id;
    var uri = "/library/v1/books/"+isbn+"?status=lost";
    var disablebutton = "#"+isbn;
    var newstatus = "#status"+isbn;
    alert('About to report lost on ISBN ' + isbn);
    
    $.ajax({
             url: uri,
             type: 'PUT',
             success: function(data) {
                     $(disablebutton).attr("disabled","disabled");
                     $(newstatus).text("lost");
             }
            });
});