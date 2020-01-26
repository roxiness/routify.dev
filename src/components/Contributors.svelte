<script>
    let contributors = [
        {
            "name": "@jakobdk",
            "github_url": "",
            "imgpath": "jk"
        },
        {
            "name": "@rixo",
            "github_url": "",
            "imgpath": "rx"
        },
        {
            "name": "@wolfr_",
            "github_url": "",
            "imgpath": "jr"
        }
    ]
</script>

<style>

    h3 {
        text-align: center;
    }

    ul {
        display: flex;
        text-align: center;
        justify-content: center;
    }

    li {
        flex: 0 0 auto;
        padding: 0 3.2rem;
    }

    a {
        display: block;
        color: #000;
        text-decoration: none;
    }

    img {
        border-radius: 100%;
        width: 4.8rem;
        height: 4.8rem;
    }

    span {
        display: block;
    }
</style>

<h3 class="c-h3">Contributors</h3>

<ul>
    {#each contributors as contributor}
    <li>
        <a href="#">
            <img src="/images/{contributor.imgpath}.jpg">
            <span>{contributor.name}</span>
        </a>
    </li>
    {/each}
</ul>

