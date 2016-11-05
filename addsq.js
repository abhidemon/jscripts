		function addSquare() {

				var l = document.getElementById("length").value;
				var b = document.getElementById("breadth").value;
				var colr = document.getElementById("color").value;

				sq = document.createElement("div");
				sq.setAttribute('style', 'width:'+b+'px; height:'+l+'px;background-color:'+colr );

				document.getElementById("box1").appendChild(sq);

		}


