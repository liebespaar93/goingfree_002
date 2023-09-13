function table_contents_toggle()
{
    document.getElementById("table-contents-botton").classList.toggle('table-contents-close');
    document.getElementById("table-contents-container").classList.toggle('table-contents-display-none');
    document.getElementById("table-contents-botton-icon").classList.toggle('fa-times');
    document.getElementById("table-contents-botton-icon").classList.toggle('fa-chevron-left');
}



function contents_darkmode_toggle()
{
    // darkmode_toggle_template("--note-color");
    // darkmode_toggle_template("--note-background-color");
    darkmode_toggle_template("--table-contents-color");
    darkmode_toggle_template("--table-contents-background-color");
    darkmode_toggle_template("--table-contents-line-color");
}