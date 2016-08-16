	var xhttp=new XMLHttpRequest();
		xhttp.open("GET","assets/json/listaDeResultados.json",true);
			xhttp.send();
			
			xhttp.onreadystatechange=function(){
				if(xhttp.readyState==4 && xhttp.status==200){
					var json=JSON.parse(xhttp.responseText);
					
					var tabla=document.getElementById("tabla");
					json.forEach(function(auto){
						//console.log(auto.marca);
					var checkbox = document.createElement('input');
					checkbox.type = "checkbox";
					
					checkbox.style.width='100%';
					checkbox.style.height='100%';
					var tr=document.createElement("tr");
					var td1=document.createElement("td");
					var td2=document.createElement("td");
					var td3=document.createElement("td");
					var td4=document.createElement("td");
					td1.textContent=auto.resultados;
					td2.textContent=auto.codBarras;
					td3.appendChild(checkbox);
					
					
					var men = document.createElement("a");
					tr.appendChild(td1);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					tabla.appendChild(tr);
					checkbox.addEventListener("click",function(){
						if (checkbox.checked == 1){
							men.className="fa fa-plus-square-o "
							men.setAttribute("href", "ingresomuestra.html");
							men.textContent="Ingresar resultados";
							td4.appendChild(men);
							
						}
						else{
							men.setAttribute("href", "#");
							men.className="fa fa-envelope-o "
							var modal = document.getElementById('myModal');
							var span = document.getElementsByClassName("close")[0];
							
							men.addEventListener("click",function(){
								modal.style.display = "block";
							})
								

								// When the user clicks on <span> (x), close the modal
								span.onclick = function() {
									modal.style.display = "none";
								}

								// When the user clicks anywhere outside of the modal, close it
								window.onclick = function(event) {
									if (event.target == modal) {
										modal.style.display = "none";
									}
								}
							men.textContent="Notificar";
							td4.appendChild(men);
							
						}
						})
					}
					
					);
					
				}
			};
			
			

