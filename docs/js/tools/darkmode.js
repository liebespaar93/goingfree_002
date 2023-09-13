function darkmode_toggle_template(property_name)
{
    const property_dark = 'var(' + property_name + '-dark)';
    const property_light = 'var(' + property_name + '-light)';
    if (document.documentElement.style.getPropertyValue(property_name) == property_dark)
        document.documentElement.style.setProperty(property_name, property_light);
    else
        document.documentElement.style.setProperty(property_name, property_dark);
}

function darkmode_toggle()
{
    document.getElementById("darkmode-dark").classList.toggle('darkmode-display-none');
    document.getElementById("darkmode-light").classList.toggle('darkmode-display-none');
    wave_darkmode_toggle();
    contents_darkmode_toggle();
    markdown_codeblock_darkmode_toggle();
}