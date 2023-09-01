function table_contents_toggle()
{
    document.getElementById("table-contents-botton").classList.toggle('table-contents-close');
    document.getElementById("table-contents-container").classList.toggle('table-contents-display-none');
    document.getElementById("table-contents-botton-icon").classList.toggle('fa-times');
    document.getElementById("table-contents-botton-icon").classList.toggle('fa-chevron-left');
}