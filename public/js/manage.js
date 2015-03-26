$('#popoverData').popover();

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeText(source) {
  if(source == 'Bioportal') {
    $('#sourcetext').val('Ontology will be automatically updated from Bioportal.');
    $('#sourcetext').prop('disabled', true);
  } else if(source == 'Direct link') {
    $('#sourcetext').val('Enter link to ontology.');
    $('#sourcetext').prop('disabled', false);
  } else if(source == 'Manual update only') {
    $('#sourcetext').val('Ontology will only be updated manually.');
    $('#sourcetext').prop('disabled', true);
  }
}

function submitForm() {

}

openSourceForm = function() {
  var oid = $('#ontology_value').text();
  var source = capitalise($('#osource').text());
  $('#sourceForm').html('<br /><form class="form" action="/ontology/'+oid+'/updatesyncmethod" method="post" role="form"> ' +
      '<div class="input-group"> ' +
      '<div class="input-group-btn">' + 
        '<button id="syncbutt" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">'+source+'</button> ' +
        '<ul id="syncbox" class="dropdown-menu" role="menu">' + 
          '<li><a href="#">Bioportal</a></li> ' + 
          '<li><a href="#">Direct link</a></li> ' +
          '<li><a href="#">Manual update only</a></li>' +
        '</ul>' +
      '</div><!-- /btn-group -->' + 
      '<input name="sourcetext" id="sourcetext" type="text" class="form-control" aria-label="..." />' +
      '<input name="method" id="method" type="hidden" />' +
    '<div class="input-group-btn"><button class="btn btn-success" type="submit">Save</button></div></div></form><br /><!-- /input-group -->');

  changeText(source);

  $('#syncbox li').on('click', function(event) {
    var $target = $(event.currentTarget);
    $('#syncbutt').text($target.text());
    $('#method').text($target.text());
    changeText($target.text());
  });
};

