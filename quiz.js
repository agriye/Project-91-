player1_name = localStorage.getItem("player1_name");
	
player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : "; 

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

//send function
function send()
{
    //numbers actual ans
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1)*parseInt(number2);

    //displaying ques and button with input box
    question = "<h4>"+number1+" × "+number2+"</h4>";
    input_box = "<br>"+"Answer: "+ "<input type='number' id='input_check_box' placeholder='Type your answer here'>";
    check_button = "<br>"+"<br>"+"<button class='btn btn-success' onclick='check()'>"+"Check"+"</button>";
    row = question+input_box+check_button;
    document.getElementById('output').innerHTML = row;
    //making values of no. null
    number1 = document.getElementById("number1").value="";
    number2 = document.getElementById("number2").value="";
}