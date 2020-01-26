<script>
    let contributors = [
        {
            "name": "@jakobdk",
            "github_url": ""
        },
        {
            "name": "@rixo",
            "github_url": ""
        },
        {
            "name": "@wolfr_",
            "github_url": ""
        }
    ]
</script>

<ul>
  {#each contributors as contributor}
  <li>
    <a href="#">
      <img src="#">
      <span>{contributor.name}</span>
    </a>
  </li>
  {/each}
</ul>

