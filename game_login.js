function LogIn()
{
    player1_name=document.getElementById("player_name_1_input").value;
    player2_name=document.getElementById("player_name_2_input").value;

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name);

    window.location="game_page.html";
}