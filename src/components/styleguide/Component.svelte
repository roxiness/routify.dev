<script>
    export let name;
    export let description="";
</script>
<div class="c-styleguide__component">
    <h2 class="c-h3">{name}</h2>
    <p>{description}</p>
    <div class="c-styleguide__component-inner">
        <slot></slot>
    </div>
</div>