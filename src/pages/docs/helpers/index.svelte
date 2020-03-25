<script>
  import Index from "./_helpers/Index.svelte";
  import FunctionDoc from "@/components/FunctionDoc.svelte";

  let params = [
    {
      type: "boolean",
      description: "test2"
    },
    {
      type: "array",
      description: "test2"
    }
  ];
</script>

<!-- routify:options $index=false -->


<div data-routify="scroll-lock">
  <Index />
</div>

<!-- <FunctionDoc name="test" {params}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <ul>
    <li>
      <strong>Use case 1:</strong>
      Us tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </li>
    <li>
      <strong>Use case 2:</strong>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmodest laborum.
    </li>
  </ul>
  <div slot="note">Hey this is a note</div>
</FunctionDoc> -->
