<script>
  export let space = null;
  export let horizontal = null;
</script>

<div class="c-stack c-stack--{space} { horizontal ? "c-stack-horizontal--" + space : ''}">
  <slot></slot>
</div>
