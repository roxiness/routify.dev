<script>
    let contributors = [
        {
            "name": "@jakedk",
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
        },
        {
            "name": "@kev",
            "github_url": "https://github.com/kevmodrome",
            "imgpath": "kev"
        },
        {
            "name": "@jitesh",
            "github_url": "https://github.com/jkdoshi",
        }
        
    ]
</script>

<div class="c-contributors">

    <h3 class="c-h3">Contributors</h3>

    <ul class="c-contributors__list">
        {#each contributors as contributor}
        <li class="c-contributors__list-item">
            <a href="{contributor.github_url}">
                {#if contributor.imgpath}
                  <img class="c-contributors__img" src="/images/collaborators/{contributor.imgpath}.jpg" alt="">
                {:else}
                  <img class="c-contributors__img" src="/images/collaborators/default.jpg" alt="">
                {/if}
                <span class="c-contributors__name">{contributor.name}</span>
            </a>
        </li>
        {/each}
    </ul>
</div>


