function welcome()
{
    var css = "text-shadow: -1px -1px #00ff00; background-color:black; border-left: 1px solid yellow;";
    console.log("📔\n\
    %c\n\
    ▗  ▖            ▝▜              ▗▄▄ ▝▜                  \n\
    ▐ ▞ ▗ ▗  ▄▖ ▗ ▗  ▐   ▄▖  ▄▖     ▐  ▌ ▐   ▄▖  ▄▄         \n\
    ▐▟  ▝▖▞ ▐▘▜ ▐ ▐  ▐  ▐▘▐ ▐▘▐     ▐▄▄▘ ▐  ▐▘▜ ▐▘▜         \n\
    ▐ ▙  ▙▌ ▐ ▐ ▐ ▐  ▐  ▐▀▀ ▐▀▀     ▐  ▌ ▐  ▐ ▐ ▐ ▐   __    \n\
    ▐ ▝▖ ▜  ▝▙▛ ▝▄▜  ▝▄ ▝▙▞ ▝▙▞     ▐▄▄▘ ▝▄ ▝▙▛ ▝▙▜ <(o )___\n\
         ▞                                       ▖▐  ( ._> /\n\
        ▝▘                                       ▝▘   `---'  \n", css);
}

function main_darkmode_toggle()
{
    darkmode_toggle_template("--main-color");
    darkmode_toggle_template("--main-background-color");
};

welcome();
include();