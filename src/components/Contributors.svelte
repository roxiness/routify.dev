<script>
    let contributors = [
        {
            "name": "@jakobdk",
            "github_url": "https://github.com/jakobrosenberg/",
            "imgpath": "jk"
        },
        {
            "name": "@rixo",
            "github_url": "https://github.com/rixo",
            "imgpath": "rx"
        },
        {
            "name": "@wolfr_",
            "github_url": "https://github.com/wolfr",
            "imgpath": "jr"
        },
        {
            "name": "@evajacobs",
            "github_url": "https://github.com/evajacobs",
            "imgpath": "ej"
        }
    ]
</script>

<div class="c-contributors">

    <h3 class="c-h3">Contributors</h3>

    <ul class="c-contributors__list">
        {#each contributors as contributor}
        <li class="c-contributors__list-item">
            <a href="{contributor.github_url}">
                <img class="c-contributors__img" src="/images/collaborators/{contributor.imgpath}.jpg" alt="contributor image">
                <span class="c-contributors__name">{contributor.name}</span>
            </a>
        </li>
        {/each}
    </ul>
</div>


