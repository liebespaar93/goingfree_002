import { Octokit } from "https://esm.sh/@octokit/core";

async function github_traffic() {
    const octokit = new Octokit({ auth: `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` });

    return (await octokit.request('GET /repos/liebespaar93/liebespaar93.github.io/traffic/clones', {
        owner: 'OWNER',
        repo: 'REPO',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }).then((res) => {
        return res.data.count;
    }));
}

async function blog_traffic() {

    let traffic = await github_traffic();
    console.log(traffic);
    // document.getElementById('blog_traffic').textContent = traffic;
}

$(document).ready(() => { blog_traffic(); })
