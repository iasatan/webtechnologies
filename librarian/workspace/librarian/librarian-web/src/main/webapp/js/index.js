var adCount = 10;

function listAuthors(){
	$.getJSON('authors', function(data) {
		var table = $('<table id="authorsTable" border="1"></table>');
		$(table).append(
				'<tr><th>ID</th><th>Name</th><th>Nationality</th><th>Birth date</th></tr>');

		$.each(data, function(key, value) {
			var row = $('<tr></tr>');
			var link
			var idCell=$('<td>'+value['authorID']+'</td>');
			var nameCell = $('<td>' + value['name'] + '</td>');
			var nationCell = $('<td>' + value['nationality'] + '</td>');
			var birthDateCell = $('<td>' + converDate(value['birthDate']) + '</td>');
			$(row).append(idCell);
			$(row).append(nameCell);
			$(row).append(nationCell);
			$(row).append(birthDateCell);
			$(table).append(row);
		});
		$('#help').append(table);
	});
}

function goneTooFar() {
	alert("real");
}
function openBooks(author)
{
	var tbl=document.getElementById("authorsTable");
	tbl.parentNode.removeChild(tbl);
	$.getJSON('books', function(data) {
		var table = $('<table border="1"></table>');
		$(table).append('<tr><th>Id</th><th>Title</th><th>Genre</th><th>Author</th></tr>');

		$.each(data, function(key, value) {
			var authorCell=$('<td></td>');
			var actualAuthor;

			$.each(value['authors'], function(authorIndex, authorValue){
				$(authorCell).append(authorValue['name']);
				actualAuthor=authorValue['name'];
			});
			if(author===actualAuthor){
				var row = $('<tr></tr>');
				var idCell = $('<td>' + value['bookId'] + '</td>');
				var titleCell = $('<td>' + value['title'] + '</td>');
				var genresCell = $('<td>' + value['genres']	+ '</td>');
				$(row).append(idCell);
				$(row).append(titleCell);
				$(row).append(genresCell);
				$(row).append(authorCell);
				$(table).append(row);
			}
		});
		$('#content').append(table);
	});
}
function converDate(dateToCheck) {
	var date = new Date(dateToCheck);
	var turningDate = new Date(1582, 9, 15);
	if (date.getFullYear() <= 1582) {
		if (date.getTime() < turningDate.getTime()) {
			date.setDate(date.getDate() - 10);
		}
	}
	var century = 1500
	while (date.getFullYear() < century) {
		if ((century % 400) != 0) {
			date.setDate(date.getDate() + 1);
		}
		century = century - 100;

	}
	var formatedTime = date.getFullYear() + '-' + (date.getMonth() + 1)
			+ '-' + date.getDate();
	return formatedTime;
}
function loremScroll() {
	if (scroll) {
		var lorem = [ "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur",
				"adipiscing", "elit", "ut", "aliquam,", "purus", "sit", "amet",
				"luctus", "venenatis,", "lectus", "magna", "fringilla",
				"urna,", "porttitor", "rhoncus", "dolor", "purus", "non",
				"enim", "praesent", "elementum", "facilisis", "leo,", "vel",
				"fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi",
				"etiam", "dignissim", "diam", "quis", "enim", "lobortis",
				"scelerisque", "fermentum", "dui", "faucibus", "in", "ornare",
				"quam", "viverra", "orci", "sagittis", "eu", "volutpat",
				"odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae",
				"tortor", "condimentum", "lacinia", "quis", "vel", "eros",
				"donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices",
				"in", "iaculis", "nunc", "sed", "augue", "lacus,", "viverra",
				"vitae", "congue", "eu,", "consequat", "ac", "felis", "donec",
				"et", "odio", "pellentesque", "diam", "volutpat", "commodo",
				"sed", "egestas", "egestas", "fringilla", "phasellus",
				"faucibus", "scelerisque", "eleifend", "donec", "pretium",
				"vulputate", "sapien", "nec", "sagittis", "aliquam",
				"malesuada", "bibendum", "arcu", "vitae", "elementum",
				"curabitur", "vitae", "nunc", "sed", "velit", "dignissim",
				"sodales", "ut", "eu", "sem", "integer", "vitae", "justo",
				"eget", "magna", "fermentum", "iaculis", "eu", "non", "diam",
				"phasellus", "vestibulum", "lorem", "sed", "risus",
				"ultricies", "tristique", "nulla", "aliquet", "enim",
				"tortor,", "at", "auctor", "urna", "nunc", "id", "cursus",
				"metus", "aliquam", "eleifend", "mi", "in", "nulla", "posuere",
				"sollicitudin", "aliquam", "ultrices", "sagittis", "orci,",
				"a", "scelerisque", "purus", "semper", "eget", "duis", "at",
				"tellus", "at", "urna", "condimentum", "mattis",
				"pellentesque", "id", "nibh", "tortor,", "id", "aliquet",
				"lectus", "proin", "nibh", "nisl,", "condimentum", "id",
				"venenatis", "a,", "condimentum", "vitae", "sapien",
				"pellentesque", "habitant", "morbi", "tristique", "senectus",
				"et", "netus", "et", "malesuada", "fames", "ac", "turpis",
				"egestas", "sed", "tempus,", "urna", "et", "pharetra",
				"pharetra,", "massa", "massa", "ultricies", "mi,", "quis",
				"hendrerit", "dolor", "magna", "eget", "est", "lorem", "ipsum",
				"dolor", "sit", "amet,", "consectetur", "adipiscing", "elit",
				"pellentesque", "habitant", "morbi", "tristique", "senectus",
				"et", "netus", "et", "malesuada", "fames", "ac", "turpis",
				"egestas", "integer", "eget", "aliquet", "nibh", "praesent",
				"tristique", "magna", "sit", "amet", "purus", "gravida",
				"quis", "blandit", "turpis", "cursus", "in", "hac",
				"habitasse", "platea", "dictumst", "quisque", "sagittis,",
				"purus", "sit", "amet", "volutpat", "consequat,", "mauris",
				"nunc", "congue", "nisi,", "vitae", "suscipit", "tellus",
				"mauris", "a", "diam", "maecenas", "sed", "enim", "ut", "sem",
				"viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras",
				"adipiscing", "enim", "eu", "turpis", "egestas", "pretium",
				"aenean", "pharetra,", "magna", "ac", "placerat",
				"vestibulum,", "lectus", "mauris", "ultrices", "eros,", "in",
				"cursus", "turpis", "massa", "tincidunt", "dui", "ut",
				"ornare", "lectus", "sit", "amet", "est", "placerat", "in",
				"egestas", "erat", "imperdiet", "sed", "euismod", "nisi",
				"porta", "lorem", "mollis", "aliquam", "ut", "porttitor",
				"leo", "a", "diam", "sollicitudin", "tempor", "id", "eu",
				"nisl", "nunc", "mi", "ipsum,", "faucibus", "vitae", "aliquet",
				"nec,", "ullamcorper", "sit", "amet", "risus", "nullam",
				"eget", "felis", "eget", "nunc", "lobortis", "mattis",
				"aliquam", "faucibus", "purus", "in", "massa", "tempor", "nec",
				"feugiat", "nisl", "pretium", "fusce", "id", "velit", "ut",
				"tortor", "pretium", "viverra", "suspendisse", "potenti",
				"nullam", "ac", "tortor", "vitae", "purus", "faucibus",
				"ornare", "suspendisse", "sed", "nisi", "lacus,", "sed",
				"viverra", "tellus", "in", "hac", "habitasse", "platea",
				"dictumst", "vestibulum", "rhoncus", "est", "pellentesque",
				"elit", "ullamcorper", "dignissim", "cras", "tincidunt",
				"lobortis", "feugiat", "vivamus", "at", "augue", "eget",
				"arcu", "dictum", "varius", "duis", "at", "consectetur",
				"lorem", "donec", "massa", "sapien,", "faucibus", "et",
				"molestie", "ac,", "feugiat", "sed", "lectus", "vestibulum",
				"mattis", "ullamcorper", "velit", "sed", "ullamcorper",
				"morbi", "tincidunt", "ornare", "massa,", "eget", "egestas",
				"purus", "viverra", "accumsan", "in", "nisl", "nisi,",
				"scelerisque", "eu", "ultrices", "vitae,", "auctor", "eu",
				"augue", "ut", "lectus", "arcu,", "bibendum", "at", "varius",
				"vel,", "pharetra", "vel", "turpis", "nunc", "eget", "lorem",
				"dolor,", "sed", "viverra", "ipsum", "nunc", "aliquet",
				"bibendum", "enim,", "facilisis", "gravida", "neque",
				"convallis", "a", "cras", "semper", "auctor", "neque,",
				"vitae", "tempus", "quam", "pellentesque", "nec", "nam",
				"aliquam", "sem", "et", "tortor", "consequat", "id", "porta",
				"nibh", "venenatis", "cras", "sed", "felis", "eget", "velit",
				"aliquet", "sagittis", "id", "consectetur", "purus", "ut",
				"faucibus", "pulvinar", "elementum", "integer", "enim",
				"neque,", "volutpat", "ac", "tincidunt", "vitae,", "semper",
				"quis", "lectus", "nulla", "at", "volutpat", "diam", "ut",
				"venenatis", "tellus", "in", "metus", "vulputate", "eu",
				"scelerisque", "felis", "imperdiet", "proin", "fermentum",
				"leo", "vel", "orci", "porta", "non", "pulvinar", "neque",
				"laoreet", "suspendisse", "interdum", "consectetur", "libero,",
				"id", "faucibus", "nisl", "tincidunt", "eget", "nullam", "non",
				"nisi", "est,", "sit", "amet", "facilisis", "magna", "etiam",
				"tempor,", "orci", "eu", "lobortis", "elementum,", "nibh",
				"tellus", "molestie", "nunc,", "non", "blandit", "massa",
				"enim", "nec", "dui", "nunc", "mattis", "enim", "ut", "tellus",
				"elementum", "sagittis", "vitae", "et", "leo", "duis", "ut",
				"diam", "quam", "nulla", "porttitor", "massa", "id", "neque",
				"aliquam", "vestibulum", "morbi", "blandit", "cursus",
				"risus,", "at", "ultrices", "mi", "tempus", "imperdiet",
				"nulla", "malesuada", "pellentesque", "elit", "eget",
				"gravida", "cum", "sociis", "natoque", "penatibus", "et",
				"magnis", "dis", "parturient", "montes,", "nascetur",
				"ridiculus", "mus", "mauris", "vitae", "ultricies", "leo",
				"integer", "malesuada", "nunc", "vel", "risus", "commodo",
				"viverra", "maecenas", "accumsan,", "lacus", "vel",
				"facilisis", "volutpat,", "est", "velit", "egestas", "dui,",
				"id", "ornare", "arcu", "odio", "ut", "sem", "nulla",
				"pharetra", "diam", "sit", "amet", "nisl", "suscipit",
				"adipiscing", "bibendum", "est", "ultricies", "integer",
				"quis", "auctor", "elit", "sed", "vulputate", "mi", "sit",
				"amet", "mauris", "commodo", "quis", "imperdiet", "massa",
				"tincidunt", "nunc", "pulvinar", "sapien", "et", "ligula",
				"ullamcorper", "malesuada", "proin", "libero", "nunc,",
				"consequat", "interdum", "varius", "sit", "amet,", "mattis",
				"vulputate", "enim", "nulla", "aliquet", "porttitor", "lacus,",
				"luctus", "accumsan", "tortor", "posuere", "ac", "ut",
				"consequat", "semper", "viverra", "nam", "libero", "justo,",
				"laoreet", "sit", "amet", "cursus", "sit", "amet,", "dictum",
				"sit", "amet", "justo", "donec", "enim", "diam,", "vulputate",
				"ut", "pharetra", "sit", "amet,", "aliquam", "id", "diam",
				"maecenas", "ultricies", "mi", "eget", "mauris", "pharetra",
				"et", "ultrices", "neque", "ornare", "aenean", "euismod",
				"elementum", "nisi,", "quis", "eleifend", "quam", "adipiscing",
				"vitae", "proin", "sagittis,", "nisl", "rhoncus", "mattis",
				"rhoncus,", "urna", "neque", "viverra", "justo,", "nec",
				"ultrices", "dui", "sapien", "eget", "mi", "proin", "sed",
				"libero", "enim,", "sed", "faucibus", "turpis", "in", "eu",
				"mi", "bibendum", "neque", "egestas", "congue", "quisque",
				"egestas", "diam", "in", "arcu", "cursus", "euismod", "quis",
				"viverra", "nibh", "cras", "pulvinar", "mattis", "nunc,",
				"sed", "blandit", "libero", "volutpat", "sed", "cras",
				"ornare", "arcu", "dui", "vivamus", "arcu", "felis,",
				"bibendum", "ut", "tristique", "et,", "egestas", "quis",
				"ipsum", "suspendisse", "ultrices", "gravida", "dictum",
				"fusce", "ut", "placerat", "orci", "nulla", "pellentesque",
				"dignissim", "enim,", "sit", "amet", "venenatis", "urna",
				"cursus", "eget", "nunc", "scelerisque", "viverra", "mauris,",
				"in", "aliquam", "sem", "fringilla", "ut", "morbi",
				"tincidunt", "augue", "interdum", "velit", "euismod", "in",
				"pellentesque", "massa", "placerat", "duis", "ultricies",
				"lacus", "sed", "turpis", "tincidunt", "id", "aliquet",
				"risus", "feugiat", "in", "ante", "metus,", "dictum", "at",
				"tempor", "commodo,", "ullamcorper", "a", "lacus",
				"vestibulum", "sed", "arcu", "non", "odio", "euismod",
				"lacinia", "at", "quis", "risus", "sed", "vulputate", "odio",
				"ut", "enim", "blandit", "volutpat", "maecenas", "volutpat",
				"blandit", "aliquam", "etiam", "erat", "velit,", "scelerisque",
				"in", "dictum", "non,", "consectetur", "a", "erat", "nam",
				"at", "lectus", "urna", "duis", "convallis", "convallis",
				"tellus,", "id", "interdum", "velit", "laoreet", "id", "donec",
				"ultrices", "tincidunt", "arcu,", "non", "sodales", "neque",
				"sodales", "ut", "etiam", "sit", "amet", "nisl", "purus,",
				"in", "mollis", "nunc", "sed", "id", "semper", "risus", "in",
				"hendrerit", "gravida", "rutrum", "quisque", "non", "tellus",
				"orci,", "ac", "auctor", "augue", "mauris", "augue", "neque,",
				"gravida", "in", "fermentum", "et,", "sollicitudin", "ac",
				"orci", "phasellus", "egestas", "tellus", "rutrum", "tellus",
				"pellentesque", "eu", "tincidunt", "tortor", "aliquam",
				"nulla", "facilisi", "cras", "fermentum,", "odio", "eu",
				"feugiat", "pretium,", "nibh", "ipsum", "consequat", "nisl,",
				"vel", "pretium", "lectus", "quam", "id", "leo", "in", "vitae",
				"turpis", "massa", "sed", "elementum", "tempus", "egestas",
				"sed", "sed", "risus", "pretium", "quam", "vulputate",
				"dignissim", "suspendisse", "in", "est", "ante", "in", "nibh",
				"mauris,", "cursus", "mattis", "molestie", "a,", "iaculis",
				"at", "erat", "pellentesque", "adipiscing", "commodo", "elit,",
				"at", "imperdiet", "dui", "accumsan", "sit", "amet", "nulla",
				"facilisi", "morbi", "tempus", "iaculis", "urna,", "id",
				"volutpat", "lacus", "laoreet", "non", "curabitur", "gravida",
				"arcu", "ac", "tortor", "dignissim", "convallis", "aenean",
				"et", "tortor", "at", "risus", "viverra", "adipiscing", "at",
				"in", "tellus", "integer", "feugiat", "scelerisque", "varius",
				"morbi", "enim", "nunc,", "faucibus", "a", "pellentesque",
				"sit", "amet,", "porttitor", "eget", "dolor", "morbi", "non",
				"arcu", "risus,", "quis", "varius", "quam", "quisque", "id",
				"diam", "vel", "quam", "elementum", "pulvinar", "etiam", "non",
				"quam", "lacus", "suspendisse", "faucibus", "interdum",
				"posuere", "lorem", "ipsum", "dolor", "sit", "amet,",
				"consectetur", "adipiscing", "elit", "duis", "tristique",
				"sollicitudin", "nibh", "sit", "amet", "commodo", "nulla",
				"facilisi", "nullam", "vehicula", "ipsum", "a", "arcu",
				"cursus", "vitae", "congue", "mauris", "rhoncus", "aenean",
				"vel", "elit", "scelerisque", "mauris", "pellentesque",
				"pulvinar", "pellentesque", "habitant", "morbi", "tristique",
				"senectus", "et", "netus", "et", "malesuada", "fames", "ac",
				"turpis", "egestas", "maecenas", "pharetra", "convallis",
				"posuere", "morbi", "leo", "urna,", "molestie", "at",
				"elementum", "eu,", "facilisis", "sed", "odio", "morbi",
				"quis", "commodo", "odio", "aenean", "sed", "adipiscing",
				"diam", "donec", "adipiscing", "tristique", "risus", "nec",
				"feugiat", "in", "fermentum", "posuere", "urna", "nec",
				"tincidunt", "praesent", "semper", "feugiat", "nibh", "sed",
				"pulvinar", "proin", "gravida", "hendrerit", "lectus", "a",
				"molestie" ];
		var div = document.getElementById('content');
		var first = lorem[Math.floor((Math.random() * 1186) + 1)];
		div.innerHTML = div.innerHTML + first.charAt(0).toUpperCase()
				+ first.slice(1);
		for (i = 0; i < 140; i++)
			div.innerHTML = div.innerHTML + " "
					+ lorem[Math.floor((Math.random() * 1186) + 1)];
		div.innerHTML = div.innerHTML
				+ lorem[Math.floor((Math.random() * 1186) + 1)]
						.replace(",", '');
		div.innerHTML = div.innerHTML + ".";
		div.innerHTML = div.innerHTML + "<p>";
		if (adCount === 0) {
			if (Math.floor((Math.random() * 8)) === 1)
				div.innerHTML = div.innerHTML
						+ "<img src='images/ad.png' style='float:right;width:304px;height:228px;'>";
			else if (Math.floor((Math.random() * 8)) === 2)
				div.innerHTML = div.innerHTML
						+ "<img src='images/ad2.png' style='float:right;width:304px;height:228px;'>";
			else if (Math.floor((Math.random() * 8)) === 3)
				div.innerHTML = div.innerHTML
						+ "<img src='images/ad3.jpg' style='float:right;width:304px;height:228px;'>";
			else if (Math.floor((Math.random() * 8)) === 4)
				div.innerHTML = div.innerHTML
						+ "<img src='images/ad4.jpg' style='float:right;width:304px;height:228px;'>";
			else if (Math.floor((Math.random() * 8)) === 5)
				div.innerHTML = div.innerHTML
						+ "<img src='images/ad5.jpg' style='float:right;width:304px;height:228px;'>";
			else if (Math.floor((Math.random() * 8)) === 6)
				div.innerHTML = div.innerHTML
						+ "<img src='images/ad6.jpg' style='float:right;width:304px;height:228px;'>";
			else if (Math.floor((Math.random() * 8)) === 7)
				div.innerHTML = div.innerHTML
						+ "<img src='images/ad7.png' style='float:right;width:304px;height:228px;'>";
			adCount = 10;
		} else
			adCount--;
	}
}