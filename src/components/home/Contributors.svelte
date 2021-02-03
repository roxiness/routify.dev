<script>
  import {contributors} from '@/data.js'
  let basepath = '/images/collaborators';
</script>

<div class="c-contributors">
    <h3 class="c-h3">Contributors</h3>
    <ul class="c-contributors__list">
        {#each contributors as contributor}
        <li class="c-contributors__list-item">
            <a href="https://github.com/{contributor.github}" class="c-contributor">
                {#if contributor.imgpath}
                  <img class="c-contributor__img" src="{basepath}/{contributor.imgpath}.{contributor.imgext ? contributor.imgext : 'jpg'}" alt="">
                {:else}
                  <img class="c-contributor__img" src="{basepath}/default.jpg" alt="">
                {/if}
                <span class="c-contributor__name">{contributor.name}</span>
            </a>
        </li>
        {/each}
    </ul>
</div>
